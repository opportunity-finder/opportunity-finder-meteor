import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/Footer';

const Landing = () => (
  <Container id="root" fluid className="py-3 flex-column d-flex"> {/* Add flex-column and d-flex */}
    <Row className="justify-content-md-center text-center flex-grow-1"> {/* Add flex-grow-1 */}
      <Col md={6}>
        <h1>Welcome to Opportunity Finder</h1>
        <h3>A bright future awaits!</h3>
      </Col>
    </Row>
    <Footer />
  </Container>
);

export default Landing;
