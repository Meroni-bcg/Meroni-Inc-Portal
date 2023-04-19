const express = require('express')
const router = express.Router()

router.get('/', () => {} )

// Get all patients
router.get('/', (req, res) => {
    res.json({message: 'Get All Patients'})
  }),

  //Get Single Patient
  router.get('/:id', (res, req) => {
    res.json({message: 'Get single patient'})
  }),

// POST a new patient
router.post('/', (req, res) => {
  res.json({message: 'POST new patient'})
}),

//Delete patient
router.delete('/', (req, res) => {
  res.json({message: 'DELETE new patient'})
}),

//UPDATE patient
router.patch('/', (req, res) => {
  res.json({message: 'UPDATE new patient'})
}),



module.exports = router