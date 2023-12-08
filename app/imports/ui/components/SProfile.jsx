import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';
/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const SProfile = ({ student }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={student.image} width={75} />
      <Card.Title> {student.firstName} {student.lastName} </Card.Title>
      <Card.Subtitle>Major: {student.major} </Card.Subtitle>
      <Card.Subtitle>Minor: {student.minor} </Card.Subtitle>
      <Card.Subtitle> Campus: {student.campus}   </Card.Subtitle>
      <Card.Subtitle> Graduate: {student.isGraduate.toString()}   </Card.Subtitle>
    </Card.Header>
  </Card>
);

// Require a document to be passed to this component.
SProfile.propTypes = {
  student: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    studentID: PropTypes.number,
    image: PropTypes.string,
    campus: PropTypes.string,
    major: PropTypes.string,
    minor: PropTypes.string,
    isGraduate: PropTypes.bool,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default SProfile;
