import logo from './logo.svg';
import './App.css';
import FeesDetails from './Fees/FeesDetails';
import GetDeatils from './Fees/GetDeatils';

import FormDetails from './Fees/StudentFormComponent';
import React from 'react';
import StudentFormComponent from './Fees/StudentFormComponent';
import MainContent from './Component/MainContent';
import ExamFees from './Fees/ExamFees';
import net from './Fees/NetBankingForm';
import NetbankingForm from './Fees/NetBankingForm';
import CardDetails from './Fees/CardDetails';
import PaymentPage from './Fees/PaymentPage';
import UpiPaymentForm from './Fees/UpiPaymentForm';
import CourseTable from './Fees/CourseTable';
import Navbar from './Component/Navbar';
import NavbarAdmin from './Component/AdminConsole/NavbarAdmin'

import AdmSideNavRoute from './Component/AdminConsole/AmdSideNavlayout'
import Footer from './Component/Footer'
import StdSideNav from './Component/StudentConsole/StdSideNav';
import StdSideNavRoute from './Component/StudentConsole/StdSideNavLayout';
import router from './Routing/routing'; 
import Dashboard from './Component/dashboard';



const App = () => {
  return (
    <div className="App">


       {/* <Navbar></Navbar>
      <NavbarAdmin></NavbarAdmin>
      <AdmSideNavRoute></AdmSideNavRoute>
      <Footer></Footer> */}

      
     <router/>
     {/* <Dashboard/> */}




    </div>
  );
};


export default App;
