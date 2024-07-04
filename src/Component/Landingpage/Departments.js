import React from 'react';
import { Container, Typography, Paper, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import cse from "../../shared/Images/cse.jpg"; 
import ece from "../../shared/Images/ece.jpg"; 
import eee from "../../shared/Images/eee.jpg"; 
import me from "../../shared/Images/me.jpg";
import mca from "../../shared/Images/mca.jpg";
import mba from "../../shared/Images/mba.avif"; 
import datascience from "../../shared/Images/datascience.webp"; 
import ai from "../../shared/Images/ai.jpg";
import civil from "../../shared/Images/civil.png";
const departments = [
  {
    name: 'Computer Science and Engineering (CSE)',
    description: 'The CSE department offers courses in programming, algorithms, data structures, and computer systems, preparing students for careers in software development, IT, and research.',
    image: cse// Replace with actual image path
  },
  {
    name: 'Electronics and Communication Engineering (ECE)',
    description: 'The ECE department focuses on electronic circuits, communication systems, and signal processing, equipping students with skills for careers in telecommunications, electronics, and embedded systems.',
    image: ece // Replace with actual image path
  },
  {
    name: 'Electrical and Electronics Engineering (EEE)',
    description: 'The EEE department provides knowledge in electrical circuits, power systems, and control engineering, preparing students for roles in power generation, distribution, and automation.',
    image: eee // Replace with actual image path
  },
  {
    name: 'Mechanical Engineering',
    description: 'The Mechanical Engineering department covers topics such as thermodynamics, fluid mechanics, and manufacturing, preparing students for careers in automotive, aerospace, and industrial engineering.',
    image: me // Replace with actual image path
  },
  {
    name: 'Civil Engineering',
    description: 'The Civil Engineering department focuses on structural engineering, construction materials, and geotechnical engineering, preparing students for roles in construction, infrastructure development, and urban planning.',
    image:civil  // Replace with actual image path
  },
  {
    name: 'Artificial Intelligence and Machine Learning (AI & ML)',
    description: 'The AI & ML department specializes in machine learning algorithms, neural networks, and AI applications, preparing students for careers in AI research, data science, and software development.',
    image: ai // Replace with actual image path
  },
  {
    name: 'Data Science (DS)',
    description: 'The DS department focuses on data analysis, statistical modeling, and big data technologies, equipping students with skills for careers in data analytics, business intelligence, and research.',
    image: datascience // Replace with actual image path
  },
  {
    name: 'MBA',
    description: 'The MBA department offers courses in management, finance, marketing, and entrepreneurship, preparing students for leadership roles in business and industry.',
    image: mba // Replace with actual image path
  },
  {
    name: 'MCA',
    description: 'The MCA department provides knowledge in computer applications, software development, and information systems, preparing students for careers in IT, software engineering, and database management.',
    image: mca // Replace with actual image path
  },
];

const Departments = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Departments
        </Typography>
        <Grid container spacing={4}>
          {departments.map((dept, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={dept.image} // Ensure these images are in the public folder or imported correctly
                  alt={dept.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {dept.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {dept.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Departments;
