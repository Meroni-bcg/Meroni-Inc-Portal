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
if (err.message === "Incorrect Password") {
    errors.healthID = "Your password is incorrect";
}

//duplicate error code
if (err.message === 11000) {
    errors.healthID = "This account is already registered.";
    return errors;
}

if (err.message.includes("Validation failed")) {
    let errorsarray = Object.values(err.errors);
    errorsarray.forEach(({ properties }) => {
        if (!properties.path.includes(".")) {
            errors[properties.path] = properties.message;
        }
    });
return errors;
};














}