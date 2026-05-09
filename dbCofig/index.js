const mongoose = require('mongoose');


const DB_Config =()=>{


return  mongoose.connect(process.env.DATABASE_SEC)
  .then(() => console.log('Connected!'));
    
}
 

module.exports=DB_Config