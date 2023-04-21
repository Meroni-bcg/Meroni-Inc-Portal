import logo from "";
import add_doctor from "";
import patient_list from "";
import doctor_list from "";
import logoutimg from "";
import { Link, Outlet, useNavigate } from "";
import { useState } from "react";
import dashboard from "";
  
// defines a AdminSidebar component with a logout function that logs the user out, shows a toast notification to show successful logout, and redirects user to the home page 
  const AdminSidebar = (props) => {
    const navigate = useNAvigate();
    const logout = async () => {
        const res = await fetch('/logout')
        props.setToastCondition({
            status: 'success',
            message: 'Log Out Successful!',
        });
        props.setToastShow(true);
        navigate('/');
}};