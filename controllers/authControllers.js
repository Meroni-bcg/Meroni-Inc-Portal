// DEPENDENCIES
const Admin = require("../models/admin");
const Doctor = require("../models/doctor");
const Patient = require("../models/patient");
const jwt = require("jsonwebtoken");
const maxAge = 3 * 24 * 60 * 60;
const { createToken } = require("../utils/createToken");

//EXPORT