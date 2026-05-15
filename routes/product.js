const express = require('express')
const { Create_product } = require('../controller/productController')

const routee =express.Router()



routee.post("/create" ,Create_product)


module.exports=routee