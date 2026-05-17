var jwt = require('jsonwebtoken');

const GenarateAccessTKN = (user)=>{

return   jwt.sign({
  data: {
    _id:user._id,
    email:user.email,
    role:user.role
  }
}, process.env.JWT_sec, { expiresIn: '1h' });

}


const GenarateRef_TKN = (user)=>{

return   jwt.sign({
  data: {
    _id:user._id,
    email:user.email,
    role:user.role
  }
}, process.env.JWT_sec, { expiresIn: '1h' });

}


module.exports={GenarateAccessTKN,GenarateRef_TKN}