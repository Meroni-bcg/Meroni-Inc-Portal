const express = require('express');
const Patient = require('../models/patientmodel.js')
const router = express.Router();
const mongoose = require('mongoose');
const {
  createPatient,
  getPatients,
  getPatient,
  deletePatient,
  updatePatient
} = require('../controllers/patientController')


// Get all patients
  router.get('/', getPatient), 

//Get Single Patient
  router.get('/:id', getPatient),

// POST a new patient
  router.post('/', createPatient),

//Delete patient
  router.delete('/:id',deletePatient),

//UPDATE patient
  router.patch('/:id', updatePatient),



module.exports = router;