const PatientDetails = ({patient}) => {
    return (
        <div className="patientdetails">
            <h4>{patient.firstName}</h4>
            <p><strong> Age: </strong>{patient.age} </p>
            <p><strong> Mobile: </strong>{patient.mobile} </p>
            <p>{patient.createAt}</p>
        </div>
    )
}

export default PatientDetails