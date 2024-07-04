import React from "react";
import { Dropdown } from "react-bootstrap";
import Logo from "../assets/Images/HeaderLogo.png";

const Navbar = () => {
  console.log("Before rendering Navbar");

  return (
    <div className="container-fluid px-5 header sticky-top" style={{backgroundColor:'white'}}>
      {/* <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-0">
        <div className="col-md-3 d-flex align-items-center justify-content-end">
       
          <i className="bi bi-person fs-3 ms-3"></i>
        </div>
      </header> */}
    </div>
  );
};

export default Navbar;
