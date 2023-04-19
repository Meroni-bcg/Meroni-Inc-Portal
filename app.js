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

//connect to mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to db and listening on PORT', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

/*listens for request
app.listen(process.env.PORT, () => {
  console.log('listening on port 3000, process.env.PORT')
})*/

 
  



process.env