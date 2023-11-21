import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-3 bg-dark">
    <Container>
      <Row>
        <Col>
          <Image roundedCircle src="/images/OP1.png" width="100px" className="logo py-2" />
        </Col>
        <Col className="fotter-column">
          Department of Information and Computer Sciences
          {' '}
          <br />
          University of Hawaii
          <br />
          Honolulu, HI 96822
          {' '}
        </Col>
        <Col className="footer-column">
          Home
          <br />
          Company
          <br />
          Student
          {' '}
          <br />
          Profile
          <br />
          About Us
          <br />
        </Col>

        <Col className="footer-column">
          Browse Jobs
          <br />
          Post a Job
          <br />
          Upcoming Events
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
