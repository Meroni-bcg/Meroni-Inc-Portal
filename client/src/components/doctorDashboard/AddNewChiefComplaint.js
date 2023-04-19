//Import necessary dependencies from react and react-router-dom
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Create a functional component name 
const AddNewChiefComplaint = (props) => {

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
    },
]);

 // Function handleSubmit prevents the default form submission action, sets isLoading to true, and navigates to the diagnosis page when done
const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    //Code to submit chief complaint data goes here

setIsLoading(false);
NavigationPreloadManager('/diagnosis'); //takes you to diagnosis page ** COMEBACK MAKE SURE WE HAVE THIS PAGE SET UP
    
};
}