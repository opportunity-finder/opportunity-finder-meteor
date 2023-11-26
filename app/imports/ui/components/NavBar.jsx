import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar>
      <Image roundedCircle src="/images/OP1.png" width="150px" className="ms-5" />
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="margin-change" />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser ? ([
              <Nav.Link id="add-stuff-nav" as={NavLink} to="/addstudentprofile" key="add">Add Student Profile</Nav.Link>,
              <Nav.Link id="edit-stuff-nav" as={NavLink} to="/editstudentprofile" key="list">Edit Student Profile</Nav.Link>,
            ]) : ''}
            {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
              <Nav.Link id="list-stuff-admin-nav" as={NavLink} to="/admin" key="admin">Admin</Nav.Link>
            ) : ''}
          </Nav>

          <Nav className="justify-content-end">
            <Nav.Link id="home-nav" as={NavLink} to="/" key="home">Home</Nav.Link>,
            {currentUser ? ([
              <Nav.Link id="student-nav" as={NavLink} to="/companypage" key="cp">Company</Nav.Link>,
              <Nav.Link id="student-nav" as={NavLink} to="/studentpage" key="sp">Student</Nav.Link>,
              <Nav.Link id="student-nav" as={NavLink} to="/addstudentprofile" key="asp">My Profile</Nav.Link>,
            ]) : ''}
            <Nav.Link id="student-nav" as={NavLink} to="/aboutus" key="au">About Us</Nav.Link>,
            {currentUser === '' ? (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                  <PersonFill />
                  Sign
                  in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                  <PersonPlusFill />
                  Sign
                  up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="navbar-current-user" title={currentUser}>
                <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                  <BoxArrowRight />
                  {' '}
                  Sign
                  out
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
