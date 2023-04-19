const express = require('express');
const Patient = require('../models/patientmodel.js')
const router = express.Router();
const mongoose = require('mongoose');

// Get all patients
  router.get('/', (req, res) => {
    res.json({message: 'Get All Patients'})
  }),

//Get Single Patient
  router.get('/:id', (req, res) => {
    res.json({message: 'Get single patient'})
  }),

// POST a new patient
  router.post('/', async (req, res) => {
    const {firstName, lastName, dob, mobile, email, city, state} = req.body
    try {
      const patient = await Patient.create({firstName, lastName, dob, mobile, email, city, state })
      res.status(200).json(patient)
    } catch(error) {
      res.status(400).json({error: error.message})
    }
    //res.json({message: 'POST new patient'})
  }),

//Delete patient
  router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE new patient'})
  }),

//UPDATE patient
  router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE new patient'})
  }),



module.exports = router;