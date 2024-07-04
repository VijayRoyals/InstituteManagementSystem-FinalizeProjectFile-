import React from 'react';
import { Container, Typography, Paper, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';

import placementDriveImage from '../../shared/Images/placementdrive.jpg';
import trainingSessionImage from '../../shared/Images/TrainingSession.jpg';
import interviewPreparationImage from '../../shared/Images/interview prepration.jfif';
const Placement = () => {
  const images = [
    {
      title: 'Placement Drive',
      description: 'Our students participating in a placement drive.',
      image: placementDriveImage // Replace with the actual path to your image
    },
    {
      title: 'Training Session',
      description: 'Students attending a training session.',
      image: trainingSessionImage// Replace with the actual path to your image
    },
    {
      title: 'Interview Preparation',
      description: 'Interview preparation workshop in progress.',
      image: interviewPreparationImage // Replace with the actual path to your image
    }
  ];

  return (
    <Container>
      <Box mt={4}>
        <Paper elevation={3} style={{ padding: '2rem' }}>
          <Typography variant="h4" gutterBottom>
            MIT Placement Cell
          </Typography>
          <Typography variant="body1" paragraph>
          At MIT, we revel in a culture of learning by doing. In 30 departments across five schools and one college, our students combine analytical rigor with curiosity, playful imagination, and an appetite for solving the hardest problems in service to society. From science and engineering to the arts, humanities, social sciences, and interdisciplinary programs, we offer excellence across the board. 
          </Typography>
          <Typography variant="body1" paragraph>
           MIT’s collaborative, hands-on, curiosity-driven ethos extends across our campus — and beyond. On the stage or field, in makerspaces and living communities, MIT is where brilliant, committed, creative people come together to learn, work, live, and play. All the elements are here to cultivate students’ personal and intellectual growth, fostering the whole student.
          </Typography>
          <Typography variant="body1" paragraph>
            Placement training plays a major role in shaping up the career goals of students. It is the dream of every engineering student to get placed in a top organization visiting their campus for recruitment. Keeping this key aspect into consideration, it is realized that training is important for engineering students to enhance their employability skills and achieve good placement in various Industries.
          </Typography>
          <Typography variant="body1" paragraph>
            At present, the competition for employment is increasing every day and placement has become a challenging task. Training of students and equipping them with life skills has become an important responsibility of the institution. Along with technical expertise, development of a holistic personality is also necessary. To meet out these requirements, a fully fledged training cell is operating in our college to enhance the capabilities of engineering graduates on par with the industry standards.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Gallery
          </Typography>
          <Grid container spacing={4}>
            {images.map((image, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={image.title}
                    height="140"
                    image={image.image}
                    title={image.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {image.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {image.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h6" gutterBottom>
            Quicklinks
          </Typography>
          <Typography variant="body2" paragraph>
            Placement Record
          </Typography>
          <Typography variant="body2" paragraph>
            Team Members
          </Typography>
          <Typography variant="body2" paragraph>
            Policies
          </Typography>
          <Typography variant="body2" paragraph>
            Training Activities
          </Typography>
          <Typography variant="body1" paragraph>
            Tel: 08572 - 246298, 246299
          </Typography>
          <Typography variant="body1" paragraph>
            Tel: 9391848685
          </Typography>
          <Typography variant="body1" paragraph>
            Email: ao@mit.org
          </Typography>
          <Typography variant="body1" paragraph>
            Email: @mit.org
          </Typography>
          <Typography variant="body1" paragraph>
          Massachusetts Institute of Technology
          77 Massachusetts Avenue, Cambridge, MA, USA
          VisitMap EventsPeople Careers ContactPrivacy Accessibility
          Social Media Hub
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Placement;
