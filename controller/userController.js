const userSchema = require("../models/userSchema");
const { GenarateAccessTKN, GenarateRef_TKN } = require("../services/helpers");
const { sendError, sendSuccess } = require("../services/responsehandler");
const {isValidEmail, isValidPassword} =require("../services/validation")

// -------------registraion-----------
const Registration =  async (req,res)=>{
    try {
       const {email,username,password} =req.body
       console.log(req.body);

       if(!username) return sendError(res,"username is required" ,400)
       if(!email) return sendError(res,"email is required" ,400)
       if(!isValidEmail(email)) return sendError(res," Invalid email Address" ,400)
       if(!password) return sendError(res,"password is required" ,400)
       if(!isValidPassword(password)) return sendError(res," Invalid password" ,400)

        const existing_user= await userSchema.findOne({
            email
        })
 
        if(existing_user) return sendError(res,"User already Exist" ,400)

            const new_User = new userSchema({
                username,
                email,
                password,
                isVerified:true,
            })

            await new_User.save()


        sendSuccess(res,"User Registration complete" ,200)
        
    } catch (error) {
       
     sendError(res,"server Error" ,500)
        
        
    }
}



// ---------------login---------


const Login = async(req,res)=>{

try {
       const {email,password} =req.body
       
      
       if(!email) return sendError(res,"email is required" ,400)
       if(!isValidEmail(email)) return sendError(res," Invalid email Address" ,400)
       if(!password) return sendError(res,"password is required" ,400)
       if(!isValidPassword(password)) return sendError(res," Invalid password" ,400)

        const existing_user= await userSchema.findOne({
            email
        })
 
        if(!existing_user) return sendError(res,"User not Exist" ,400)
        

         if(existing_user.password !== password)  return  sendError(res, "Wrong Password", 400);  
         
         const ACCTKN =GenarateAccessTKN(existing_user)
         const REFTKN =GenarateRef_TKN(existing_user)

         
res.cookie("XS-TKN" ,ACCTKN)
res.cookie("RF-TKN" ,REFTKN)
                                          
            
 


        sendSuccess(res,"User login complete" ,200)

    
} catch (error) {
      sendError(res,"server Error" ,500)
      console.log(error);
      
        
}

    
}




module.exports={Registration,Login}