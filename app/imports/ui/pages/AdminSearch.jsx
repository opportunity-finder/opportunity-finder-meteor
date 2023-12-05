import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { StudentProfiles } from '../../api/profile/StudentProfile';

const AdminSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchField, setSearchField] = useState('firstName');

  const { searchResults } = useTracker(() => {
    // eslint-disable-next-line no-unused-vars
    const subscription = Meteor.subscribe(StudentProfiles.userPublicationName);
    const results = StudentProfiles.collection.find({ [searchField]: searchQuery }).fetch();
    return { searchResults: results };
  }, [searchQuery, searchField]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Logic to update searchQuery based on form input
  };

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSearch}>
                <Form.Group as={Row}>
                  <Col sm={8}>
                    <Form.Control type="text" placeholder="Search..." onChange={e => setSearchQuery(e.target.value)} />
                  </Col>
                  <Col sm={4}>
                    <Form.Select onChange={e => setSearchField(e.target.value)}>
                      <option value="firstName">First Name</option>
                      <option value="lastName">Last Name</option>
                      <option value="studentID">Student ID</option>

                    </Form.Select>
                  </Col>
                </Form.Group>
                <Button type="submit" variant="primary">Search</Button>
              </Form>

              <hr />
              {/* Display search results here */}
              {searchResults.map((profile) => (
                <div key={profile._id}>
                  {profile.firstName} {profile.lastName} - {profile.studentID}
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminSearch;
