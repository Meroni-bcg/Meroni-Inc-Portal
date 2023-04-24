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
};
return errors;
};

module.exports.patient_register = async (req, res) => {
  const diseases = Object.values(req.body.diseases);
  const {
    name,
    dob,
    mobile,
    email,
    adharCard,
    bloodGroup,
    address,
    password,
    contactPerson,
  } = req.body;

  const healthID = adharCard;
  try {
    const patient = await Patient.create({
      name,
      healthID,
      dob,
      mobile,
      email,
      adharCard,
      bloodGroup,
      address,
      password,
      diseases,
      contactPerson,
    });
    const token = createToken(patient._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ patient });
  } catch (err) {
    const errors = handleError(err);
    res.status(404).json({ errors });
  }
};

module.exports.patient_login = async (req, res) => {
    const { healthID, password } = req.body;
    try {
      const patient = await Patient.login(healthID, password);
      const token = createToken(patient._id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json({ patient });
    } catch (err) {
      const errors = handleError(err);
      res.status(404).json({ errors });
    }
  };