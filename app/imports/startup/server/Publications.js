import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { Stuffs } from '../../api/stuff/Stuff';
import { StudentProfiles } from '../../api/profile/StudentProfile';
import { CompanyProfiles } from '../../api/profile/CompanyProfile';

Meteor.startup(() => {
  // Create users if they don't already exist
  const users = [
    { email: 'admin@foo.com', password: 'changeme', role: 'admin' },
    { email: 'john@foo.com', password: 'changeme', role: 'student' },
    { email: 'ethan@foo.com', password: 'changeme', role: 'employer' },
  ];

  users.forEach(({ email, password, role }) => {
    const user = Accounts.findUserByEmail(email);
    if (!user) {
      const userId = Accounts.createUser({ email, username: email, password });
      if (role) {
        Roles.addUsersToRoles(userId, [role]);
      }
    }
  });

  // ... other startup code ...
});

// User-level publication for Stuffs
Meteor.publish(Stuffs.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.collection.find({ owner: username });
  }
  return this.ready();
});

// Admin-level publication for Stuffs
Meteor.publish(Stuffs.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Stuffs.collection.find();
  }
  return this.ready();
});

// Publish roles for each user
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});

// User-level publication for StudentProfiles
Meteor.publish(StudentProfiles.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return StudentProfiles.collection.find({ owner: username });
  }
  return this.ready();
});

// Admin-level publication for StudentProfiles
Meteor.publish(StudentProfiles.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return StudentProfiles.collection.find();
  }
  return this.ready();
});

// User-level publication for CompanyProfiles
Meteor.publish(CompanyProfiles.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return CompanyProfiles.collection.find({ owner: username });
  }
  return this.ready();
});

// Admin-level publication for CompanyProfiles
Meteor.publish(CompanyProfiles.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return CompanyProfiles.collection.find();
  }
  return this.ready();
});
