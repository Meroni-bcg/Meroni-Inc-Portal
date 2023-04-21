const mongoose = require('mongoose')
const Schema = mongoose.Schema
const router = require("express").Router();

const patientSchema = new mongoose.Schema({

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

