const express = require('express')
const app = express()
const mongoose = require('mongoose');


app.get('/', (req, res) => {
  res.send('Hello World!')
})




mongoose.connect('mongodb+srv://final_Exam_practice:E-commerceBackend@cluster0.7ooynjm.mongodb.net/final_Exam_practice?appName=Cluster0')
  .then(() => console.log('Connected!'));






app.listen(8000, () => {
  console.log(`server is running with port 8000`)
})

