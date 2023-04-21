//Exponents
const Doctor = require("../models/doctor");
const { createToken } = require("../utils/createToken");

const maxAge = 3 * 24 * 60 * 60;
module.exports.doctor_register = async (req, res) => {
  const education = Object.values(req.body.education);
  const specialization = Object.values(req.body.specialization);
  const {
    name,
      dob,
      mobile,
      email,
  } = req.body;
  try {
    const doctor = await Doctor.create({
      name,
      dob,
      mobile,
      email,
    });

    res.status(200).json({ doctor });
  } catch (err) {
    res.status(404).json({ err });
  }
};

module.exports.doctor_login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const doctor = await Doctor.login(email, password);
    const token = createToken(doctor._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ doctor });
  } catch (err) {
    res.status(404).json({ err });
  }
};