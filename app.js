require("dotenv").config();

const express = require('express');
const patientRoutes = require("./routes/patientRoutes");
const mongoose = require('mongoose')

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

// listens for request
app.listen(process.env.PORT, () => {
  console.log('listening on port 3000, process.env.PORT')
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)



process.env