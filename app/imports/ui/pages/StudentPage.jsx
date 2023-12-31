import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
/* A simple static component to render some text for the landing page. */
const StudentPage = () => (
  <Container id="student page" fluid className="py-3">
    <Row className="align-middle text-center">

      <Col className="d-flex flex-column justify-content-center">
        <h1 style={{ color: 'white' }}>Student Home page </h1>
      </Col>
    </Row>

    <Row>
      <Col className="d-flex flex-column justify-content-center">
        <link rel="stylesheet" type="text/css" href="//loading.io/css/loading.css" />
        <link rel="stylesheet" type="text/css" href="//loading.io/css/loading-btn.css" />
        <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />

        <div className="button ld ld-ext-left">
          <a href="https://opportunityfinder.xyz/addstudentprofile">
            <div className="ld ld-ring ld-spin" />
            <h5 style={{ color: 'white' }}>Add Profile</h5>
            <div />
            <i style={{ color: 'white' }} className="fa fa-arrow-right" />
          </a>
        </div>
      </Col>
    </Row>

    <Row>
      <Col className="d-flex flex-column justify-content-center">
        <link rel="stylesheet" type="text/css" href="//loading.io/css/loading.css" />
        <link rel="stylesheet" type="text/css" href="//loading.io/css/loading-btn.css" />
        <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="button ld ld-ext-left">
          <a href="https://opportunityfinder.xyz/editstudentprofile">
            <div className="ld ld-ring ld-spin" />
            <h5 style={{ color: 'white' }}>Edit Profile</h5>
            <div />
            <i style={{ color: 'white' }} className="fa fa-arrow-right" />
          </a>
        </div>
      </Col>
    </Row>

    <Row>
      <Col className="d-flex flex-column justify-content-center">
        <link rel="stylesheet" type="text/css" href="//loading.io/css/loading.css" />
        <link rel="stylesheet" type="text/css" href="//loading.io/css/loading-btn.css" />
        <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="button ld ld-ext-left">
          <a href="https://opportunityfinder.xyz/mysprofile">
            <div className="ld ld-ring ld-spin" />
            <h5 style={{ color: 'white' }}>My Profile</h5>
            <div />
            <i style={{ color: 'white' }} className="fa fa-arrow-right" />
          </a>
        </div>
      </Col>
    </Row>

  </Container>
);

export default StudentPage;
