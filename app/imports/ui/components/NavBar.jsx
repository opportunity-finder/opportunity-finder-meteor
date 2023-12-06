import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar expand="md" bg="light" variant="light"> {/* Added expand="lg" */}
      <Container>
        {/* <Navbar.Brand as={NavLink} to="/" className="margin-change"> */}
        <Navbar.Brand as={NavLink} to="/">
          <Image roundedCircle src="/images/OP1.png" width="150px" className="ms-5" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" /> {/* Updated aria-controls */}
        <Navbar.Collapse id="responsive-navbar-nav"> {/* Updated id */}
          <Nav className="me-auto justify-content-start">
            {Roles.userIsInRole(Meteor.userId(), 'student') && ([
              <Nav.Link as={NavLink} to="/addstudentprofile" key="add">Add Student Profile</Nav.Link>,
              <Nav.Link as={NavLink} to="/editstudentprofile" key="list">Edit Student Profile</Nav.Link>,
            ])}
            {Roles.userIsInRole(Meteor.userId(), 'employer') && ([

              <Nav.Link as={NavLink} to="/addcompanyprofile" key="add-company">Add Company Profile</Nav.Link>,
              <Nav.Link as={NavLink} to="/editstudentprofile" key="list">Edit Company Profile</Nav.Link>,

            ])}
            {Roles.userIsInRole(Meteor.userId(), 'admin') && (
              <Nav.Link as={NavLink} to="/admin" key="admin">Admin</Nav.Link>
            )}
          </Nav>

          <Nav className="justify-content-end">
            <Nav.Link as={NavLink} to="/" key="home">Home</Nav.Link>
            {currentUser && (
              <>
                <Nav.Link as={NavLink} to="/addstudentprofile" key="asp">My Profile</Nav.Link>
                <Nav.Link as={NavLink} to="/adminsearch" key="search">Search</Nav.Link>
              </>
            )}
            {Roles.userIsInRole(Meteor.userId(), 'student') && (
              <Nav.Link as={NavLink} to="/studentpage" key="sp">Student</Nav.Link>
            )}
            {Roles.userIsInRole(Meteor.userId(), 'employer') && (
              <Nav.Link as={NavLink} to="/companypage" key="cp">Company</Nav.Link>
            )}

            <Nav.Link as={NavLink} to="/aboutus" key="au">About Us</Nav.Link>
            {currentUser === '' ? (
              <NavDropdown title="Login" id="login-dropdown">
                <NavDropdown.Item as={NavLink} to="/signin">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/signup">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown title={currentUser} id="navbar-current-user">
                <NavDropdown.Item as={NavLink} to="/signout">
                  <BoxArrowRight />
                  Sign out
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
