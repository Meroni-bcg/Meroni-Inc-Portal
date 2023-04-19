const mongoose = require('mongoose')
const Schema = mongoose.Schema
const patientSchema = new Schema({

      firstName: {
      type: String,
      required: [true, "Please enter First Name"],
    },
      lastName: {
        type:String,
        required: [true, "Please enter Last Name"]
      },

    dob: {
        type: Date,
        required: [true, "Please enter Date of Birth"],
      },
      
    mobile: {
        type: String,
        required: [true, "Please enter Mobile Number"],
        minlength: [10, "Please Enter a valid Mobile Number"],
      },
      
    email: {
        type: String,
        required: [true, "Please enter email"],
       // validate: [Email, "Please Enter a valid Email"],
      },
    
    city: {
        type: String,
        required: [true, "Please enter complete Address"],
      },

    state: {
        type: String,
        required: [true, "Please enter complete Address"],
      },
    
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema)

