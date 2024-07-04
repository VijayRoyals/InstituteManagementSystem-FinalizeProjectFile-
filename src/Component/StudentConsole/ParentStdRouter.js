import React from 'react';
import NavbarStudent from '../StudentConsole/NavbarStudent';
import StdSideNavLayout from './StdSideNavLayout';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ParentRouter = () => {
  return (
    <div>
      
      <NavbarStudent />
      <StdSideNavLayout />
      <Navbar/>
      <Footer/>

    </div>
  );
}

export default ParentRouter;