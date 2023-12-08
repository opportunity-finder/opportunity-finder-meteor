import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
// eslint-disable-next-line no-unused-vars
import { StudentProfiles } from '../../api/profile/StudentProfile.js';
import { CompanyProfiles } from '../../api/profile/CompanyProfile';
/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }

  const addStudent = (student) => {
    console.log(`  Adding: ${student.lastName} (${student.owner})`);
    StudentProfiles.collection.insert(student);
  };

  if (StudentProfiles.collection.find().count() === 0) {
    if (Meteor.settings.defaultStudents) {
      console.log('Creating student data.');
      Meteor.settings.defaultStudent.forEach(student => addStudent(student));
    }
  }

  const addCompany = (company) => {
    console.log(`  Adding: ${company.lastName} (${company.owner})`);
    StudentProfiles.collection.insert(company);
  };

  if (CompanyProfiles.collection.find().count() === 0) {
    if (Meteor.settings.defaultCompany) {
      console.log('Creating comapany data.');
      Meteor.settings.defaultStudent.forEach(company => addCompany(company));
    }
  }
}
