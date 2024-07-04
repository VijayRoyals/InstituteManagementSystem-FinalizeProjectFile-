import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, MenuItem, Button, Paper, Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


const RegistrationPage = () => {
    const nav = useNavigate();
    const[productData,setProductData] = useState({
        pname:"",
        price:"",
        company:""
    });

    const inputChange = (events) =>{
        
        const{type,name,value} = events.target;
    setProductData({...productData,[name]:value})
    }

    
    const addProduct = (event) =>{
        event.preventDefault();
        axios.post(`http://localhost:8888/products`,productData).then(()=>{
            window.alert("Dear Student Your Record Has Been Added Successfully");
            nav('../LoginPage')
        }).catch((error)=>{})

    }

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <Typography variant="h4" gutterBottom>Student Registration Form</Typography>
          <form onSubmit={addProduct}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Roll-No"
                  name="RollNo"
                  value={productData.RollNo}
                  onChange={inputChange}
                  fullWidth
                  required
                  />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="FullName"
                  name="Name"
                  value={productData.Name}
                  onChange={inputChange}
                  fullWidth
                  required
                  
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Department"
                  name="Dept"
                  value={productData.Dept}
                  onChange={inputChange}
                  fullWidth
                  required
                  
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Contact-No"
                  name="Contact"
                  value={productData.Contact}
                  onChange={inputChange}
                  fullWidth
                  required
                  
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  name="Email"
                  value={productData.Email}
                  onChange={inputChange}
                  fullWidth
                  required
                  
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Gender"
                  name="Gender"
                  value={productData.Gender}
                  onChange={inputChange}
                  select
                  fullWidth
                  required
                  
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Date of Birth"
                  name="DOB"
                  value={productData.Dob}
                  onChange={inputChange}
                  type="date"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Address"
                  name="Address"
                  value={productData.Address}
                  onChange={inputChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={productData.Password}
                  onChange={inputChange}
                  fullWidth
                  required
                 />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Register
                </Button>      
                

              </Grid>
            </Grid>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default RegistrationPage;


