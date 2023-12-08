import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';
/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const CProfile = ({ company }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={company.image} width={75} />
      <Card.Title> {company.name} </Card.Title>
      <Card.Subtitle> Island: {company.island} </Card.Subtitle>
      <Card.Subtitle> City: {company.city} </Card.Subtitle>
      <Card.Subtitle> Address: {company.address}   </Card.Subtitle>
      <Card.Subtitle> Zipcode: {company.zipCode}   </Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{company.description}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
CProfile.propTypes = {
  company: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    island: PropTypes.string,
    city: PropTypes.string,
    address: PropTypes.number,
    zipCode: PropTypes.string,
    owner: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default CProfile;
