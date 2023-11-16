import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { StudentProfiles } from '../../api/profile/StudentProfile';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  studentID: Number,
  campus: String,
  campusCondition: {
    type: String,
    allowedValues: ['Hawai‘i CC', 'Honolulu CC', 'Kapiolani CC', 'Kauai CC', 'Leeward CC', 'Windward CC',
      'UH Hilo', 'UH Mānoa', 'UH Maui College', 'UH West O‘ahu'],
    defaultValue: 'UH Mānoa',
  },
  major: String,
  minor: String,
  isGraduate: Boolean,
  owner: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddStudentProfile = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { firstName, lastName, studentID, campus, major, minor, isGraduate } = data;
    const owner = Meteor.user().username;
    StudentProfiles.collection.insert(
      { firstName, lastName, studentID, campus, major, minor, isGraduate, owner },
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
          <Col className="text-center"><h2>Add Stuff</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="firstName" />
                <TextField name="lastName" />
                <NumField name="studentID" decimal={null} />
                <SelectField name="campus" />
                <TextField name="major" />
                <TextField name="minor" />
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

export default AddStudentProfile;
