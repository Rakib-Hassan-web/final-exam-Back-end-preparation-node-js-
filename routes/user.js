const express = require('express')
const { Registration } = require('../controller/userController')


const routee =express.Router()



routee.post("/registration" ,Registration)


module.exports=routee