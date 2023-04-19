//Import necessary dependencies from react and react-router-dom
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Create a functional component name 
const AddNewPrescription = (props) => {

//declare state variables
const [isLoading, setIsLoading] = useState(false);
const [physician, setPhysician] = useState({});
const [prescriptionList, setPrescriptionList] = useState ([
    {
        prescriptionName: '',
        dosage: {
            morning: {quantity: '', comment: ''},
            afternoon: {quantity: '', comment: ''},
            evening: {quantity: '', comment: ''},
        }
    }
])

}