const express = require('express')
const { Registration, Login } = require('../controller/userController')


const routee =express.Router()



routee.post("/registration" ,Registration)
routee.post("/login" ,Login)


module.exports=routee