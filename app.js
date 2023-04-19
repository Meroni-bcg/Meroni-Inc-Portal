const express = require("express");
const dotenv = require("dotenv");
//const { default: mongoose } = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const patientRoutes = require("./routes/patientRoutes");
const cookieParser = require("cookie-parser");
const registerRoute = require("./routes/registerRoute");
const doctorRoute = require("./routes/doctorRoute");
const adminRoutes = require("./routes/adminRoutes");
const logoutRoute = require("./routes/logoutRoute");
const cors = require("cors");
const app = express();
const mongoose = require('mongoose')

dotenv.config({ path: "./config.env" });

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

const dbURI = process.env.DATABASE;
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

/*mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(port);
    console.log("connected to db and listening at port 3000");
  })
  .catch((err) => {
    app.listen(port);
    app.get("/", (req, res) => {
      res.send(
        "Something Went Wrong! Please Try again after some time, if problem persists please contact us."
      );
    });
  });*/

app.use(authRoutes);
app.use(registerRoute);
app.use(doctorRoute);
app.use(patientRoutes);
app.use(adminRoutes);
app.use(logoutRoute);

