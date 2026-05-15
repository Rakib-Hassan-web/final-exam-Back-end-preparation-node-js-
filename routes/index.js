const express = require('express')

const routee =express.Router()
const product_js=require("./product")
const auth_js=require("./user")

routee.use("/product" , product_js)
routee.use("/auth" , auth_js)


module.exports=routee