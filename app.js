require("dotenv").config();

const express = require('express');
const patientRoutes = require("./routes/patientRoutes");
const mongoose = require('mongoose')

//express app
const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
}),

//route
app.get('/', (req, res) => {
  res.json({message: 'Welcome to Meroni-Inc-Portal'})
}),

app.use('/', patientRoutes)



// listens for request
app.listen(process.env.PORT, () => {
  console.log('listening on port 3000')
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)



process.env