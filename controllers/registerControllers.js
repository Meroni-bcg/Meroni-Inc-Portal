const Patient = require("../models/patient");
const { createToken } = require("../utils/createToken");

const maxAge = 3 * 24 * 60 * 60;
const handleError = (err) => {
    let errors = {};

//Incorrect email
if (err.message === "Invalid HealthID") {
    errors.healthID = "That Health ID is not registered";
}

//Incorrect password

//duplicate error code


















}