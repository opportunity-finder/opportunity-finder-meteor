import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const AboutUs = () => (
  <Container id="aboutus-page" fluid className="py-3 no-side-padding">
    <Row className="justify-content-md-center text-center ">
      <Col md={6} className="d-flex flex-column justify-content-center">
        <h1 style={{ color: 'white' }}>About Us Home page</h1>
      </Col>
    </Row>

    <Row>
      <Col className="no-side-padding">
        <div className="card bg-white text-white ">
          <Image src="/images/aboutus1.jpg" className="card-img" alt="Descriptive alt text" fluid />
          <div className="card-img-overlay">

            <h5 className="text-center">Who We Are</h5>
            {/* eslint-disable-next-line max-len,react/no-unescaped-entities */}
            <p className="card-text">Welcome to Opportunity Finder, the innovative platform bridging the gap between ambitious students and forward-thinking companies. Born from the desire to streamline the connection process, our web application serves as a dynamic nexus for University of Hawaii's computer science and engineering talents and the companies eager to harness their potential.</p>

            <h5 className="text-center">What We Do</h5>
            <p className="card-text">At Opportunity Finder, we revolutionize how students and employers discover each other:
              <ul>
                {/* eslint-disable-next-line max-len,react/no-unescaped-entities */}
                <li><strong>For Students:</strong> Create a profile showcasing your skills, interests, and professional aspirations. Browse through a myriad of opportunities, tailor-made to align with your career goals. Whether you're seeking an internship or a full-time position, our platform brings the opportunities to your fingertips.</li>
                {/* eslint-disable-next-line max-len */}
                <li><strong>For Companies:</strong> Say goodbye to the traditional recruitment hurdles. Our platform allows you to create a comprehensive company profile, highlighting your mission, location, and the roles you frequently recruit for. Share details about internships, permanent positions, desired skills, hiring numbers, and salary ranges. Reach out directly to the talent that resonates with your company’s vision.</li>
                <li><strong>For Administrators:</strong> Keep the platform a safe and professional space. Monitor content, ensure appropriateness, and update categories to reflect evolving skill sets and geographic preferences.</li>
              </ul>
            </p>

            <h5 className="text-center">Our Vision</h5>
            {/* eslint-disable-next-line max-len */}
            <p className="card-text">At Opportunity Finder, we envision a world where opportunities are not limited by physical boundaries or delayed announcements. We are committed to creating a vibrant community where the next generation of professionals and industry leaders can connect, grow, and succeed together.</p>

          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default AboutUs;
