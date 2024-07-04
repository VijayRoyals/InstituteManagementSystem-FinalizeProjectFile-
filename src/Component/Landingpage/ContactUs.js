// // import React from 'react';
// // import { Container, Typography, Paper, Box, Grid, TextField, Button } from '@mui/material';

// // const ContactUs = () => {
// //   return (
// //     <Container>
// //       <Box mt={4}>
// //         <Paper elevation={3} style={{ padding: '2rem' }}>
          

// //           <Typography variant="h5" gutterBottom mt={4}>
// //             Get in Touch
// //           </Typography>



// //           <form>
// //             <Grid container spacing={2}>
// //               <Grid item xs={12} sm={6}>
// //                 <TextField
// //                   variant="outlined"
// //                   required
// //                   fullWidth
// //                   id="firstName"
// //                   label="First Name"
// //                   name="firstName"
// //                   autoComplete="fname"
// //                 />
// //               </Grid>
// //               <Grid item xs={12} sm={6}>
// //                 <TextField
// //                   variant="outlined"
// //                   required
// //                   fullWidth
// //                   id="lastName"
// //                   label="Last Name"
// //                   name="lastName"
// //                   autoComplete="lname"
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   variant="outlined"
// //                   required
// //                   fullWidth
// //                   id="email"
// //                   label="Email Address"
// //                   name="email"
// //                   autoComplete="email"
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   variant="outlined"
// //                   required
// //                   fullWidth
// //                   id="subject"
// //                   label="Subject"
// //                   name="subject"
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   variant="outlined"
// //                   required
// //                   fullWidth
// //                   multiline
// //                   rows={4}
// //                   id="message"
// //                   label="Your Message"
// //                   name="message"
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <Button type="submit" variant="contained" color="primary" fullWidth>
// //                   Send Message
// //                 </Button>
// //               </Grid>
// //             </Grid>
// //           </form>

// //           <Typography variant="h6" gutterBottom mt={4}>
// //             Contact Information
// //           </Typography>
// //           <Typography variant="body1">
// //             Tel: 08572 - 246298, 246299<br/>
// //             Tel: 9391848685<br/>
// //             Email: @mit.org, principal@mit.org
// //           </Typography>
// //           <Typography variant="body1" mt={2}>
// //           Massachusetts Institute of Technology<br/>
// //           77 Massachusetts Avenue, Cambridge, MA, USA,<br/>
// //           VisitMap EventsPeople CareersContact PrivacyAccessibility
// //           Social Media Hub 
// //           </Typography>
// //         </Paper>
// //       </Box>
// //     </Container>
// //   );
// // };

// // export default ContactUs;


// import React, { useState } from 'react';
// import { Container, Typography, Paper, Box, Grid, TextField, Button } from '@mui/material';
// import { useNavigate, Link } from 'react-router-dom';
// import axios from 'axios';

// const ContactUs = () => {
//   const nav = useNavigate();
//   const [NewcontactData, setNewcontactData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   // Construct a new contact object
//   //   const newContact = {
//   //     id: new Date().getTime(), // Generate unique ID (for simplicity, using timestamp)
//   //     firstName: formData.firstName,
//   //     lastName: formData.lastName,
//   //     email: formData.email,
//   //     subject: formData.subject,
//   //     message: formData.message,
//   //     timestamp: new Date().toLocaleString() // Include timestamp for reference
//   //   };

//   //   // Store the new contact data in localStorage (for demo purposes)
//   //   let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
//   //   contacts.push(newContact);
//   //   localStorage.setItem('contacts', JSON.stringify(contacts));

//   //   // Clear the form after submission
//   //   setFormData({
//   //     firstName: '',
//   //     lastName: '',
//   //     email: '',
//   //     subject: '',
//   //     message: ''
//   //   });

//   //   // Confirmation message (for demo purposes)
//   //   alert('Message sent successfully!');
//   // };


//   const handleSubmit = (event) =>{
//     event.preventDefault();
//     axios.post(`http://localhost:8888/NewcontactData`,NewcontactData).then(()=>{
//         window.alert("Record Added Successfully");
        
//     }).catch((error)=>{})

// }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewcontactData({
//       ...NewcontactData,
//       [name]: value
//     });
//   };

//   return (
//     <Container>
//       <Box mt={4}>
//         <Paper elevation={3} style={{ padding: '2rem' }}>
//           <Typography variant="h5" gutterBottom mt={4}>
//             Get in Touch
//           </Typography>

//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   name="firstName"
//                   autoComplete="fname"
//                   value={NewcontactData.firstName}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="lname"
//                   value={NewcontactData.lastName}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   value={NewcontactData.email}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="subject"
//                   label="Subject"
//                   name="subject"
//                   value={NewcontactData.subject}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   multiline
//                   rows={4}
//                   id="message"
//                   label="Your Message"
//                   name="message"
//                   value={NewcontactData.message}
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button type="submit" variant="contained" color="primary" fullWidth>
//                   Send Message
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>

//           <Typography variant="h6" gutterBottom mt={4}>
//             Contact Information
//           </Typography>
//           <Typography variant="body1">
//             Tel: 08572 - 246298, 246299<br/>
//             Tel: 9391848685<br/>
//             Email: @mit.org, principal@mit.org
//           </Typography>
//           <Typography variant="body1" mt={2}>
//             Massachusetts Institute of Technology<br/>
//             77 Massachusetts Avenue, Cambridge, MA, USA,<br/>
//             VisitMap EventsPeople CareersContact PrivacyAccessibility
//             Social Media Hub 
//           </Typography>
//         </Paper>
//       </Box>
//     </Container>
//   );
// };

// export default ContactUs;


import React, { useState } from 'react';
import { Container, Typography, Paper, Box, Grid, TextField, Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const ContactUs = () => {
  const nav = useNavigate();
  const [NewcontactData, setNewcontactData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:8888/NewcontactData`, NewcontactData)
      .then(() => {
        window.alert("Thank you our esteemed member, your message has been recorded");
        // Clear the form after successful submission
        setNewcontactData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewcontactData({
      ...NewcontactData,
      [name]: value
    });
  };

  return (
    <Container>
      <Box mt={4}>
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <Typography variant="h5" gutterBottom mt={4}>
            Get in Touch
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="fname"
                  value={NewcontactData.firstName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={NewcontactData.lastName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={NewcontactData.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  name="subject"
                  value={NewcontactData.subject}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  multiline
                  rows={4}
                  id="message"
                  label="Your Message"
                  name="message"
                  value={NewcontactData.message}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>

          <Typography variant="h6" gutterBottom mt={4}>
            Contact Information
          </Typography>
          <Typography variant="body1">
            Tel: 08572 - 246298, 246299<br/>
            Tel: 9391848685<br/>
            Email: @mit.org, principal@mit.org
          </Typography>
          <Typography variant="body1" mt={2}>
            Massachusetts Institute of Technology<br/>
            77 Massachusetts Avenue, Cambridge, MA, USA,<br/>
            VisitMap EventsPeople CareersContact PrivacyAccessibility
            Social Media Hub 
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default ContactUs;
