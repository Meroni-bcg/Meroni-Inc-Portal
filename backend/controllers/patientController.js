const Patient = require('../models/patientmodel.js')
const mongoose = require('mongoose')

// Get all Patients
const getPatients = async(req, res) => {
    const patients = await Patient.find({}).sort({createdAt:-1})

    res.status(200).json(patients)
}

//Create a new Patient
const createPatient = async(req, res)=>{
    const {title, name } = req.body
    //Add doc to db
    try {
        const patient = await Patient.create({title, name})
        res.status(200).json(patient)
      } catch(error) {
        res.status(400).json({error: error.message})
      }}

//Get a single Patient
const getPatient = async(req,res) => {
    
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Patient'})
    }

    const patient = await Patient.findById(id)

    if(!patient) {
        return res.status(404).json({error: 'No Such Patient'})
}
res.status(200).json(patient)
}


//Delete a Patient
const deletePatient = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Patient'})
    }

    const patient = await Patient.findOneAndDelete({_id: id})

    if(!patient) {
        return res.status(404).json({error: 'No Such Patient'})
    }

    res.status(200).json(patient)
} 


//Update a Patient
const updatePatient = async (req,res) => {
    const{ id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Patient'})
    }

    const patient = await Patient.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!patient) {
        return res.status(404).json({error: 'No Such Patient'})
    }

    res.status(200).json(patient)
}


module.exports = {
    getPatients,
    getPatient,
    createPatient,
    deletePatient,
    updatePatient
}