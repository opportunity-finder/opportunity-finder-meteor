import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, BoolField, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { StudentProfiles } from '../../api/profile/StudentProfile';
import LoadingSpinner from '../components/LoadingSpinner';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  studentID: Number,
  image: String,
  campus: {
    type: String,
    allowedValues: ['Hawai‘i CC', 'Honolulu CC', 'Kapiolani CC', 'Kauai CC', 'Leeward CC', 'Windward CC',
      'UH Hilo', 'UH Mānoa', 'UH Maui College', 'UH West O‘ahu'],
  },
  major: String,
  minor: String,
  isGraduate: { type: Boolean, optional: true, defaultValue: false },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the EditStuff page for editing a single document. */
const EditStudentProfile = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const _id = Meteor.user().username;
  // console.log('EditStuff', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(StudentProfiles.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = StudentProfiles.collection.findOne({ owner: _id });
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditStuff', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const owner = Meteor.user().username;
    const { firstName, lastName, studentID, image, campus, major, minor, isGraduate = false } = data;
    StudentProfiles.collection.update(_id, { $set: { firstName, lastName, studentID, image, campus, major, minor, isGraduate, owner } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2 className="text-white">Edit Student Profile</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <TextField name="firstName" />
                <TextField name="lastName" />
                <NumField name="studentID" decimal={null} />
                <TextField name="image" />
                <SelectField name="campus" allowedValues={['Hawai‘i CC', 'Honolulu CC', 'Kapiolani CC', 'Kauai CC', 'Leeward CC', 'Windward CC', 'UH Hilo', 'UH Mānoa', 'UH Maui College', 'UH West O‘ahu']} />
                <TextField name="major" />
                <TextField name="minor" />
                <BoolField name="isGraduate" transform={value => value || false} />
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditStudentProfile;
