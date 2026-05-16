const userSchema = require("../models/userSchema");
const { sendError, sendSuccess } = require("../services/responsehandler");
const {isValidEmail, isValidPassword} =require("../services/validation")


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





module.exports={Registration}