const mongoose = require('mongoose')
const Schema = mongoose.Schema
const patientSchema = new Schema({

    name: {
        firstName: {
            type: String,
            required: [true, "Please enter full Name"],
        },
        middleName: {
            type: String,
            required: [true, "Please enter full Name"],
        },
        surName: {
            type: String,
            required: [true, "Please enter full Name"],
        },
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
        validate: [isEmail, "Please Enter a valid Email"],
      },

    address: {
        building: {
          type: String,
          required: [true, "Please enter complete Address"],
        },
    
    city: {
        type: String,
        required: [true, "Please enter complete Address"],
      },

    state: {
        type: String,
        required: [true, "Please enter complete Address"],
      },

    password: {
        type: String,
        required: [true, "Please enter password"],
        minlength: [8, "Minimum length of password should must be 8 characters"],
      },


}});