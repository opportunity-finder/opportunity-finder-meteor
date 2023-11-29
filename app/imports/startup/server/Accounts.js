import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

/* eslint-disable no-console */

const createUser = (email, password, role) => {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password,
    role: role,
  });
  if (role === 'admin') {
    Roles.createRole(role, { unlessExists: true });
    Roles.addUsersToRoles(userID, 'admin');
  }
  if (role === 'student') {
    Roles.createRole(role, { unlessExists: true });
    Roles.addUsersToRoles(userID, 'student');
  }
  if (role === 'employer') {
    Roles.createRole(role, { unlessExists: true });
    Roles.addUsersToRoles(userID, 'employer');
  }
};

// When running app for first time, pass a settings file to set up a default user account.
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.forEach(({ email, password, role }) => createUser(email, password, role));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}

Accounts.onCreateUser(function (options, muser) {
  // Use provided profile in options, or create an empty object
  const user = muser;
  user.profile = options.profile || {};
  // Assigns first and last names to the newly created user object
  user.profile.firstName = options.firstName;
  user.profile.lastName = options.lastName;
  user.profile.role = options.role;
  // Returns the user object
  if (user.profile.role === 'student') {
    Roles.createRole(user.profile.role, { unlessExists: true });
    Roles.addUsersToRoles(user, 'student');
  }
  if (user.profile.role === 'employer') {
    Roles.createRole(user.profile.role, { unlessExists: true });
    Roles.addUsersToRoles(user, 'employer');
  }
  return user;
});
