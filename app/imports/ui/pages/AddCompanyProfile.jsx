import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, LongTextField, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { CompanyProfiles } from '../../api/profile/CompanyProfile.js';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  name: String,
  description: String,
  island: {
    type: String,
    allowedValues: ['Hawai‘i', 'Kaua‘i', 'Lana‘i', 'Maui', 'Moloka‘i', 'O‘ahu'],
  },
  city: String,
  address: String,
  zipCode: Number,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddCompanyProfile = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const owner = Meteor.user().username;
    const { name, description, island, city, address, zipCode } = data;
    CompanyProfiles.collection.insert(
      { name, description, island, city, address, zipCode, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Add Company Profile</h2></Col>
          <Col className="text-center"><h2 className="text-white">Add Profile</h2></Col>

          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="name" />
                <LongTextField name="description" />
                <SelectField name="island" allowedValues={['Hawai‘i', 'Kaua‘i', 'Lana‘i', 'Maui', 'Moloka‘i', 'O‘ahu']} />
                <TextField name="city" />
                <TextField name="address" />
                <NumField name="zipCode" />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddCompanyProfile;
