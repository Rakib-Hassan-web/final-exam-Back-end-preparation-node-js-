const express = require('express')
const app = express()
const mongoose = require('mongoose');
const DB_Config = require('./dbCofig');
require('dotenv').config();



app.get('/', (req, res) => {
    res.send('Hello World!')
})
// ---------------database----------


DB_Config()


// ---------server------------

app.listen(8000, () => {
  console.log(`server is running with port 8000`)
})

