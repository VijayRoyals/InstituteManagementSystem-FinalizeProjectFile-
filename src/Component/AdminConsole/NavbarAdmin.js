import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, MenuItem, Button, Paper, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AdminConsole from './AmdSideNavlayout'; // Import the AdminConsole component

const NavbarAdmin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const alertMsg = () => {
    if (window.confirm("Dear Admin, are you sure you want to logout?")) {
      sessionStorage.clear();
      navigate('/'); // Navigating to '/Login' on logout
    }
  };

  return (
    <div>
    <header className="p-3" style={{ backgroundColor: '#3d0060', color: 'white' }}>
      <div className="container-fluid" style={{ backgroundColor: '#3d0060' }}>
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <h3>Dear Admin Welcomeback</h3>
          <div>
            {/* <button type="button" className="btn btn-outline-light  me-2" >
              Admin Management Console
            </button> */}
            {/* <Button type="button" component={Link} to= {`/`}  color="warning">Logout</Button> */}

            <Link to="#" onClick={alertMsg} className="btn btn-outline-warning" >  Logout  </Link>

          </div>


        </div>
        {isVisible && <AdminConsole />}
      </div>
    </header>
    </div>
  );
};

export default NavbarAdmin;
