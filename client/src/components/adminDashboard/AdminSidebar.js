
import { useState } from "react";
import { usenavigate } from 'react-router-dom';
  
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

const [Toggle, setToggle] = useState('Dashboard')


return (
  <div className="h-screen overflow-y-hidden w-screen grid grid-cols-12">
    <div className="side_bar bg-white shadow col-span-2">
      <div className="flex m-2 mt-4  ">
        <div className="logo m-2  ">
          <img src={logo} className="w-16" alt="logo"></img>
        </div>
        <div className="heading font-poppins font-bold text-xl  ">
          <Link to="/">
            <h1>Public health Record System</h1>
          </Link>
        </div>
      </div>
      <nav>
        <Link
          to="/admin/dashboard"
          onClick={() => setToggle("Dashboard")}
          className={
            Toggle === "Dashboard" ? "text-gray-900" : "text-gray-400"
          }
          >