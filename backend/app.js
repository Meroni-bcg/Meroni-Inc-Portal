require("dotenv").config();
const express = require('express');
const patientRoutes = require("./routes/patientRoutes");
const mongoose = require('mongoose')
const router = require("express").Router();
const dotenv = require('dotenv');
const { getPatients } = require("../controllers/patientController");
dotenv.config();
mongoose.set('strictQuery', false);

//express app
const app = express();
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
}),

//routes
app.use('/api/patient', patientRoutes)

app.get('/', getPatients)

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