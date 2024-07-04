import React, { useState } from 'react';
import { TextField, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const backgroundImageUrl = 'https://img.freepik.com/free-vector/digital-money-transfer-technology-background_1017-17454.jpg?w=740&t=st=1705571568~exp=1705572168~hmac=0aedfa73049df10cedc977b95ce5125b32c55726023f01799aaf9f25befd44e4';

const backgroundStyle = {
  background: `url(${backgroundImageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
};

const formContainerStyle = {
  background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background for the form container
  padding: '20px',
  borderRadius: '8px',
};

const NetbankingForm = () => {
  const [formData, setFormData] = useState({
    accountNumber: '',
    bankName: '',
    userName: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input (you may want to perform more thorough validation)
    
    
    if (formData.accountNumber && formData.bankName && formData.userName && formData.password) {
      // Process the collected details (you may want to send them to a server or perform other actions)
      console.log('Netbanking details collected:', formData);

      // You can perform additional actions here, such as sending the details to a server
    } else {
      // Handle invalid or incomplete input
      console.log('Invalid or incomplete input. Please try again.');
    }
    
  
  };

  return (
    <div style={backgroundStyle}>
      <Container component="main" maxWidth="xs" style={formContainerStyle}>
        <div>
          <Typography component="h1" variant="h5">
            Netbanking Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Account Number"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Bank Name"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default NetbankingForm;
