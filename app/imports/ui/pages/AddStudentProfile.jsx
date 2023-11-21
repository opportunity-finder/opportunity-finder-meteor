import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, BoolField, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
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
<<<<<<< HEAD
  campus: {
=======
  campus: String,
  campusCondition: {
>>>>>>> origin/main
    type: String,
    allowedValues: ['Hawai‘i CC', 'Honolulu CC', 'Kapiolani CC', 'Kauai CC', 'Leeward CC', 'Windward CC',
      'UH Hilo', 'UH Mānoa', 'UH Maui College', 'UH West O‘ahu'],
  },
  major: String,
  minor: String,
  isGraduate: { type: Boolean, optional: true, defaultValue: false },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddStudentProfile = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const owner = Meteor.user().username;
    const { firstName, lastName, studentID, campus, major, minor, isGraduate = false } = data;
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
<<<<<<< HEAD
          <Col className="text-center"><h2>Add Student Profile</h2></Col>
=======
          <Col className="text-center"><h2 className="text-white">Add Profile</h2></Col>
>>>>>>> origin/main
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="firstName" />
                <TextField name="lastName" />
                <NumField name="studentID" decimal={null} />
                <SelectField name="campus" allowedValues={['Hawai‘i CC', 'Honolulu CC', 'Kapiolani CC', 'Kauai CC', 'Leeward CC', 'Windward CC', 'UH Hilo', 'UH Mānoa', 'UH Maui College', 'UH West O‘ahu']} />
                <TextField name="major" />
                <TextField name="minor" />
                <BoolField name="isGraduate" />
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
