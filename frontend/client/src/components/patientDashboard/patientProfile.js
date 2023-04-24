import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PatientProfile = (props) => {
  const navigate = useNavigate();
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
      building: "",
      city: "",
      state: "",
    },
    })
};
  useEffect(() => {
    async function getpatient() {
      const res = await fetch("/getpatient");
      const data = await res.json();
      if (data.AuthError) {
        props.settoastCondition({
          status: "info",
          message: "Please Login to proceed!!!",
        });
        props.setToastShow(true);
        navigate("/");
      } else {
        getpatient(data.patient);
      }
    }
    getpatient();
  }, []);

  const convertDatetoString = (dateString) => {
    let date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

export default PatientProfile;