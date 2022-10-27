import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../../Genius-Car_Images/logo.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import { signOut } from 'firebase/auth';

const Header2 = () => {

  const [user] = useAuthState(auth);

  const signOutMethod=()=>{

    signOut(auth);
  }


  return (
    
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img height="30" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link href="home#experts">Experts</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {user?
              <Nav.Link onClick={
              signOutMethod
            } as={Link} to="/home">
              SignOut
            </Nav.Link>
            :
            <Nav.Link as={Link} to="/login">
              LogIn
            </Nav.Link>}
            {user&& <>
              <Nav.Link as={Link} to="/addservice">AddService</Nav.Link>
            
            <Nav.Link as={Link} to="/manage">ManageService</Nav.Link>
            </>
            
          }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default Header2;
