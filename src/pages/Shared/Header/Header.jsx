import React, { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContent } from "../../../Providers/AuthProvider";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContent);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  

  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Link style={{textDecoration: 'none'}} to='/'><Navbar.Brand
          style={{ color: "#34BF49", fontWeight: "bold", fontSize: "25px" }}
        >
          Helium
        </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink
              className={({isActive}) =>isActive ? 'text-primary': ''}
              style={{
                textDecoration: "none",
                color: "gray",
                margin: "0 10px",
                fontWeight: "bold"
              }}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
            className={({isActive}) =>isActive ? 'text-primary': ''}
              style={{
                textDecoration: "none",
                color: "gray",
                margin: "0 10px",
                fontWeight: 'bold'
              }}
              to="/blog"
            >
              Blog
            </NavLink>
          </Nav>
          <Nav>
            {user?.uid && (
              <img
                style={{ height: "40px", width: "40px" }}
                src={user.photoURL}
                alt="Profile Picture"
                data-toggle="tooltip"
                title={user.displayName}
              />
            )}

            {user ? (
              <Button onClick={handleLogOut} variant="secondary">
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <button className="button">Login</button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
