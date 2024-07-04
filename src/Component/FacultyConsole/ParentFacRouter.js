import React from 'react';
import NavbarFaculty from '../FacultyConsole/NavbarFacultys';
import FacSideNavLayout from './FacSideNavLayout';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ParentRouter = () => {
  return (
    <div>
      
      <NavbarFaculty />
      <FacSideNavLayout />
      <Navbar/>
      <Footer/>

    </div>
  );
}

export default ParentRouter;