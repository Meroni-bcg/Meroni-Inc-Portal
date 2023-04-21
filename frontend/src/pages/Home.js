import { useEffect, useState } from 'react'

//components
import PatientDetails from '../components/patientDetails';


const Home = () => {
    const [patients, setPatients] = useState(null)

    useEffect(() => {
        const fetchPatients = async () => {
            const response = await fetch('/api/patients')
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
                    <PatientDetails key={patient._id} patient={patient}></PatientDetails>
                ) )}
            </div>
        </div>
    )
}

export default Home