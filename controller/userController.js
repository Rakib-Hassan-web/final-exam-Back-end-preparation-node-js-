const { sendError, sendSuccess } = require("../services/responsehandler");
const emailRegex = require("../services/validation");


const Registration = (req,res)=>{
    try {
       const {email,username,password} =req.body
       console.log(req.body);
       

       
       if(!username) return sendError(res,"username is required" ,400)
       if(!email) return sendError(res,"email is required" ,400)
       if(!emailRegex(email)) return sendError(res,"invalid Email Address" ,400)
       if(!password) return sendError(res,"password is required" ,400)


        sendSuccess(res,"reg done" ,200)
        
    } catch (error) {
       
        console.log(error);
        
        
    }
}





module.exports={Registration}