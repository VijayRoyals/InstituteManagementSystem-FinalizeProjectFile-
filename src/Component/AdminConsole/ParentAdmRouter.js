import React from 'react';
import NavbarAdmin from './NavbarAdmin';
import AdmSideNav from './AdmSideNav';
import AdmSideNavLayout from './AmdSideNavlayout';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ParentRouter = () => {
  return (
    <div>
      
      <NavbarAdmin />
      <AdmSideNavLayout />
      <Navbar/>
      <Footer/>

    </div>
  );
}

export default ParentRouter;