const express = require('express')
const router = express.Router()

// Get all patients
  router.get('/', (req, res) => {
    res.json({message: 'Get All Patients'})
  }),

//Get Single Patient
  router.get('/:id', (req, res) => {
    res.json({message: 'Get single patient'})
  }),

// POST a new patient
  router.post('/', (req, res) => {
    res.json({message: 'POST new patient'})
}),

//Delete patient
  router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE new patient'})
}),

//UPDATE patient
  router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE new patient'})
}),



module.exports = router