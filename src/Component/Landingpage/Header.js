import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';


import HomePage from './HomePage';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Departments from './Departments';
import LoginPage from './LoginPage';
import Placement from './Placement';
import RegistrationPage from './RegistrationPage';



import logoimage from "../../shared/Images/imagelogowhite.jpg";
import logo1image from "../../shared/Images/MIT-logo-lightgray-white.png";


const Header = () => {
  return (
    <div style={{ width: '100%' }} className="container-fluid" >
      <AppBar position="static" sx={{ backgroundColor: '#750014', padding: '10px',borderRadius:'8px' }}>
        <Toolbar>
          <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
            <Box
              component="img"
              src={logoimage}
              alt="Institute Logo"
              sx={{
                marginRight: { xs: 1, sm: 2 },
              //   height: { xs: 60, sm: 80, md: 100 },
              //   width: { xs: 60, sm: 80, md: 100 },
                padding: { xs: 1, sm: 2 },
                margin: { xs: 1, sm: 2 }
                
              }}
              height={150}
              width={150}
            />
            <Box
              component="img"
              src={logo1image}
              alt="logo"
              sx={{
                marginRight: { xs: 1, sm: 2 },
                // height: { xs: 80, sm: 100, md: 120 },
                // width: { xs: 100, sm: 130, md: 150 },
                padding: { xs: 1, sm: 2 },
                margin: { xs: 1, sm: 2 }
              }}
              height={150}
              width={220}
            />
            <Typography variant="h4" color="white" 
            sx={{ 
              marginLeft: { xs: 1, sm: 2 }, 
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' ,lg:'50' },
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bold'
            }}
      >
              Massachusetts Institute of Technology
              
            </Typography>
          </Box>
          <Button 
            color="inherit"
            component={Link}
            to={`./LoginPage`}
            sx={{
              backgroundColor: 'white',
              color: '#750014',
              borderRadius: '20px',
              padding: '8px 16px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              }
            }}
          
          >Login</Button>
         </Toolbar>
        <Box bgcolor="#d4d4d4" borderRadius="20px">
          <Toolbar>
            <Button 
              color="inherit" 
              component={Link} to = "/"
              sx={{ color: '#000', fontWeight: 'bold', '&:hover': { backgroundColor: '#ccc' } }}
            >
              Home
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to= {`./AboutUs`}
              sx={{ color: '#000', fontWeight: 'bold', '&:hover': { backgroundColor: '#ccc' } }}
            >
              About Us
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to={`./Placement`}
              sx={{ color: '#000', fontWeight: 'bold', '&:hover': { backgroundColor: '#ccc' } }}
            >
              Placements
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to={`./Departments`}
              sx={{ color: '#000', fontWeight: 'bold', '&:hover': { backgroundColor: '#ccc' } }}
            >
              Departments
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to={`./ContactUs`}
              sx={{ color: '#000', fontWeight: 'bold', '&:hover': { backgroundColor: '#ccc' } }}
            >
              Contact Us
            </Button>
          </Toolbar>
        </Box>
      </AppBar>
    </div>
  );
};

export default Header;
