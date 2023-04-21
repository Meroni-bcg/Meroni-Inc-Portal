const PatientDetails = ({patient}) => {
    return (
        <div className="patientdetails">
            <h4>{patient.firstName.lastName}</h4>
            <p><strong> Last Name: </strong>{patient.lastName} </p>
            <p><strong> DOB: </strong>{patient.dob} </p>
            <p><strong> Mobile: </strong>{patient.mobile} </p>
            <p><strong> City: </strong>{patient.city} </p>
            <p><strong> State: </strong>{patient.state} </p>
            <p>{patient.createAt}</p>
        </div>
    )
}

export default PatientDetails