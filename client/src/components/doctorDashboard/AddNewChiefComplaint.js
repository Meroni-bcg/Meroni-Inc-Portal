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
NavigationPreloadManager('/patientHistory'); //takes you to Patient History page ** COMEBACK MAKE SURE WE HAVE THIS PAGE SET UP
    
};
}

// Returning the form with input fields for doctor name and medicine name, as well as a submit button that shows either "Loading..." or "Save Complaint" depending on the value of isLoading vvvvv

return (
    <form onSubmit={handleSubmit}>
      <label>
        Doctor Name:
        <input
          type="text"
          value={doctor.name}
          onChange={(event) =>
            setDoctor((prevState) => ({
              ...prevState,
              name: event.target.value,
            }))
          }
        />
      </label>
      <label>
        Prescription Name:
        <input
          type="text"
          value={prescriptionList[0].prescriptionName}
          onChange={(event) =>
            setPrescriptionName((prevState) => [
              {
                ...prevState[0],
                prescriptionName: event.target.value,
              },
            ])
          }
        />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Save Cief Complaint"}
      </button>
    </form>
  );
