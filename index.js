const express = require('express')
const app = express()
const mongoose = require('mongoose');


app.get('/', (req, res) => {
  res.send('Hello World!')
})




mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));






app.listen(8000, () => {
  console.log(`server is running with port 8000`)
})

