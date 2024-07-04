import React from 'react';
import { Outlet } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Departments from './Departments';
import Header from './Header';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Placement from './Placement';
import RegistrationPage from './RegistrationPage';


const ParentLP = () => {
  return (
    <div>
    <div>
        <Header/> 
        </div>
        <div>
        
        <Outlet />
    </div>
    </div>


  )
}

export default ParentLP