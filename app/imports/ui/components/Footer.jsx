import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-lg-5 bg-white">
    <Container>
      <Row>

        <Col className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center footer-text-color">Get Started</h1>
          <p className="text-center footer-text-color">Not sure where to stare? Here are some popular pages that may help you find what you are looking for!</p>
        </Col>

      </Row>

      <Row className="py-5">
        <Col xs={4}>
          <button type="button" className="btn  btn-lg custom-btn custom-color">Part time/Full time employment</button>
        </Col>

        <Col xs={4}>
          <button type="button" className="btn  btn-lg custom-btn custom-color">Internships</button>

        </Col>

        <Col xs={4}>
          <button type="button" className="btn  btn-lg custom-btn custom-color ">Apprenticeships</button>
        </Col>
      </Row>

    </Container>
  </footer>
);

export default Footer;
