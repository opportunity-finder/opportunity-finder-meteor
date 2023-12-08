import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import SProfile from '../components/SProfile';
import { StudentProfiles } from '../../api/profile/StudentProfile';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListStudents = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, students } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(StudentProfiles.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const studentItems = StudentProfiles.collection.find({ owner: Meteor.user().username });
    return {
      students: studentItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2 style={{ color: 'white' }}>My Profile</h2>
          </Col>
          <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
            {students.map((student) => (<Col key={student.id}><SProfile student={student} /></Col>))}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};
export default ListStudents;
