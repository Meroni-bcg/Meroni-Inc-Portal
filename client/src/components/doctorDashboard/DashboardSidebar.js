//Import necessary dependencies from react and react-router-dom
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardSidebar = (props) => {
    const navigate = useNavigate();
    const logout = async () => {
      const res = await fetch("/logout");
      props.settoastCondition({
        status: "success",
        message: "You are now signed off! Goodbye",
      });
      props.setToastShow(true);
      navigate("/");
    }; 
}