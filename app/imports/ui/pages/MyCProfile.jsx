import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import CProfile from '../components/CProfile';
import { CompanyProfiles } from '../../api/profile/CompanyProfile';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListCompany = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, companies } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(CompanyProfiles.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const companyItems = CompanyProfiles.collection.find({ owner: Meteor.user().username });
    return {
      companies: companyItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2 style={{ color: 'white' }}>My Company Profile</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
            {companies.map((company) => (<Col key={company.id}><CProfile company={company} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};
export default ListCompany;
