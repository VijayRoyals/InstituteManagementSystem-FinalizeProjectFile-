import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const MainContent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography variant="h4" gutterBottom>
      Welcome to Fees Management!
    </Typography>
    <Card style={{ maxWidth: 400, margin: '16px' }}>
      <CardMedia
        component="img"
        alt="Institute Image"
        height="140"
        image=""
      />
      <CardContent>
        <Typography variant="h6" component="div">
          Card 1 Content
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is some information for Card 1.
        </Typography>
      </CardContent>
    </Card>
    <Card style={{ maxWidth: 400, margin: '16px' }}>
      <CardMedia
        component="img"
        alt="Institute Image"
        height="140"
        image=""
      />
      <CardContent>
        <Typography variant="h6" component="div">
          Card 2 Content
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is some information for Card 2.
        </Typography>
      </CardContent>
    </Card>
    {/* Add more cards as needed */}
  </div>
);

export default MainContent;