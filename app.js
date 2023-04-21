require("dotenv").config();
const express = require('express');
const patientRoutes = require("./routes/patientRoutes");
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
mongoose.set('strictQuery', false);

//express app
const app = express();

//middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
}),

//routes
app.use('/api/patients', patientRoutes)

app.get('/', (req, res) => {
  res.json({message: 'Welcome to Meroni-Inc-Portal'})
}),

//connect to mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //listens for PORT
    app.listen(process.env.PORT, () => {
      console.log('connected to db and listening on PORT', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })


process.env