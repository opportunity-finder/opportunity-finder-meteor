import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="justify-content-md-center text-center">

      <Col md={6}>
        <h1 className="text-white">Welcome to Opportunity Finder</h1>
        <h3 className="text-white">A bright future awaits!</h3>
      </Col>

    </Row>

  </Container>

);

export default Landing;
