import Footer from "../landingPage/Footer";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PatientHistory = (props) => {
  const navigate = useNavigate();
  const [dob, setDob] = useState("01/01/2006");
  const [patient, setPatient] = useState({
    name: {
      firstName: "",
      middleName: "",
      surName: "",
    },
    dob: "",
    mobile: "",
    email: "",
    address: {
      city: "",
      state: ""
    },
    })
  };

  const convertDatetoString = (dateString) => {
    let date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return(
    <div>
        <div className=""> <h1>{`${patient.name.firstName} ${patient.name.surName}`}</h1> </div> 
        <div> <h1>Date</h1> </div>
        <div> <h1>Doctor Name</h1> </div>
        <div> <h1>Diagnosis</h1> </div>
        <div> <h1>Prescription</h1> </div>
        <div> No Record Found </div>
    </div>
)




export default PatientHistory