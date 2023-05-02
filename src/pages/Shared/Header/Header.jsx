import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContent } from "../../../Providers/AuthProvider";

const Header = () => {
  const {user} = useContext(AuthContent);
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Helium</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link
              style={{
                textDecoration: "none",
                color: "gray",
                margin: "0 10px",
              }}
              to="/"
            >
              Home
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "gray",
                margin: "0 10px",
              }}
              to="/blog"
            >
              Blog
            </Link>
          </Nav>
          <Nav>
            {user && <p>{user.displayUser}</p> }
            {user ? (
              <Button variant="secondary">Logout</Button>
            ) : (
              <Link to="/login">
                <Button variant="secondary">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
