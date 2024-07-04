/* eslint-disable jsx-a11y/iframe-has-title */
// src/AboutUs.js
import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <Container>
      <Box mt={4}>
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            About Massachusetts Institute of Technology
          </Typography>
          <Typography variant="body1" paragraph>
          At MIT, pushing the boundaries of knowledge and possibility is our joyful obsession, and we celebrate fundamental discoveries and practical applications alike. As educators, we also value research as a potent form of learning by doing.
          </Typography>
          <Typography variant="body1" paragraph>
          Research flourishes in our 30 departments across five schools and one college, as well as in dozens of centers, labs, and programs that convene experts across disciplines to explore new intellectual frontiers and solve important societal problems. Our on-campus research capabilities are enhanced through the work of MIT Lincoln Laboratory, the Woods Hole Oceanographic Institution, active research relationships with industry, and a wide range of global collaborations.
          </Typography>
          <Typography variant="h4" gutterBottom>
          Centers, Labs & Programs
          </Typography>
          <Typography variant="body1" paragraph>
          MIT continually develops organizations and partnerships that foster interdisciplinary work. Listed here are just some of the MIT labs, centers, and programs where groundbreaking research is happening every day.


          </Typography>
          <Typography variant="h4" gutterBottom>
          Collaborating Institutions
          </Typography>
          <Typography variant="body1" paragraph>
          MIT researchers collaborate with many leading local, national, and international organizations to further drive exploration.
          </Typography>
          <Typography variant="body1" paragraph>
          Massachusetts Institute of Technology




          </Typography>
          <Typography variant="body1" paragraph>
          77 Massachusetts Avenue, Cambridge, MA, USA
          </Typography>
          <Typography variant="body1" paragraph>
          VisitMap EventsPeople Careers Contact PrivacyAccessibility Social Media Hub MIT@SocialMedia
          </Typography>
          <Box mt={2} style={{ textAlign: 'center' }}>
            <FaFacebook size={30} style={{ margin: '0 10px' }} />
            <FaYoutube size={30} style={{ margin: '0 10px' }} />
            <FaInstagram size={30} style={{ margin: '0 10px' }} />
          </Box>
          <Box mt={4} style={{ textAlign: 'center' }}>
          
            <iframe
              src="https://whereis.mit.edu/?zoom=16&lat=42.36031&lng=-71.092&maptype=mit&open=-1" width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default AboutUs;
