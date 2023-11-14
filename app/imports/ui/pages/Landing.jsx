import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="justify-content-md-center text-center">

      <Col md={6}>
        <h1>Welcome to Opportunity Finder</h1>
        <h3>Now get to work and find your future!</h3>
      </Col>

    </Row>

  <Row className="py-5">
    <Col xs={4}>
      <Image roundedCircle src="/images/OP1.png" width="150px" />
    </Col>

    <Col xs={4} className="d-flex flex-column justify-content-center">
      <h1>Welcome to Opportunity Finder</h1>
      <h3>Now get to work and find your future!</h3>
    </Col>

    <Col xs={4}>
      <Image roundedCircle src="/images/OP1.png" width="150px" />
    </Col>
  </Row>


  </Container>




);

export default Landing;
