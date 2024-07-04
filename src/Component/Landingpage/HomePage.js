import React from 'react';
import { Container, Carousel, Card, Row, Col } from 'react-bootstrap';

import carouselimage1 from "../../shared/Images/image-55.webp"
import carouselimage2 from "../../shared/Images/145.jpg"
import carouselimage3 from "../../shared/Images/image-asset.jpeg"
const HomePage = () => {
  return (
    <div class="container-fluid m-auto mt-3">
      <Card class="mt-5 " >
                <Card.Body >
                  <Card.Title><strong>About MIT/Massachusetts Institute of Technology:</strong></Card.Title>
                  <Card.Text>
                  <strong>The MIT community is driven by a shared purpose:</strong> to make a better world through education, research, and innovation. We are fun and quirky, elite but not elitist, 
                  inventive and artistic, obsessed with numbers, and welcoming to talented people regardless of where they come from.
                  Founded to accelerate the nation’s industrial revolution, MIT is profoundly American. With ingenuity and drive, our graduates have invented fundamental technologies, launched new industries, and created millions of American jobs. At the same time, and without the slightest sense of contradiction, MIT is profoundly global. Our community gains tremendous strength as a magnet for talent from around the world. Through teaching, research, and innovation, MIT’s exceptional community pursues its mission of service to the nation and the world.
                  </Card.Text>
                </Card.Body>
              </Card>
      <main>
     
        <Container class="m-5">
        <div class="m-5">
          <Carousel class="carouselproperties">
            <Carousel.Item>
              <img
                className="d-block w-120"
                src={carouselimage1}// Replace with your image path
                alt="First slide"
              />
              <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-120"
                src={carouselimage2} // Replace with your image path
                alt="Second slide"
              />
              <Carousel.Caption>
                {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-120"
                src={carouselimage3} // Replace with your image path
                alt="Third slide"
              />
              <Carousel.Caption>
                {/* <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
          

          <Row className="mt-4">
            <Col md={12}>
              
            </Col>
            <Col md={4}>
              
            </Col>
            <Col md={12}>
              
            </Col>
          </Row>
        </Container>
      </main>

      <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
          <div className="text-center p-3">
          ©2024 <b>MIT Institute</b> - All rights reserved by <b>admin@Changepond-Technology </b>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
