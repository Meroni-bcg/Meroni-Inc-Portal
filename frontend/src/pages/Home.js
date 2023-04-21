import { useEffect, useState } from 'react'

//components
import patientDetails from '../components/patientDetails';


const Home = () => {
    const [patients, setPatients] = useState(null)

    useEffect(() => {
        const fetchPatients = async () => {
            const response = await fetch('http://localhost:4000/api/patients')
            const json = await response.json()

            if(response.ok) {
                setPatients(json)
            }
        }

        fetchPatients()
    }, [])

    return(
        <div className="home">
            <div className='patients'>
                {patients && patients.map((patient) => (
                   /* <p key={patient._id}>{patient.lasttName}</p>*/
                    <patientDetails key={patient._id} patient={patient}></patientDetails>
                ) )}
            </div>
        </div>
    )
}

export default Home