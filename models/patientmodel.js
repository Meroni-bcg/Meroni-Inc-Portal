const mongoose = require('mongoose')
const Schema = mongoose.Schema
const patientSchema = new Schema({

    title: {
      type: String,
     required: true 
    },

    name: {
      firstName: {
      type: String,
      required: [true, "Please enter First Name"],
    },
      lastName: {
        type:String,
        required: [true, "Please enter Last Name"]
      }
    }
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema)

