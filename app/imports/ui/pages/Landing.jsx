import React from 'react';
import { Col, Row } from 'react-bootstrap';
import BottomFooter from '../components/BottomFooter';
import Footer from '../components/Footer';
/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <div className="d-flex flex-column min-vh-100">
    <Row className="justify-content-md-center text-center">
      <Col md={6}>
        <h1 className="text-white">Welcome to Opportunity Finder</h1>
        <h3 className="text-white">A bright future awaits!</h3>
      </Col>
    </Row>
    <BottomFooter className="fixed-bottom"/>
    <Footer className="fixed-bottom" />
  </div>

);

export default Landing;
