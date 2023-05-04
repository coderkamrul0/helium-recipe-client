import React, { useContext, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContent } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Registration.css'

export default function Registration() {
  const { createPasswordUser, googleLogin, githubLogin, updateUserProfile} =
    useContext(AuthContent);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    // Validate input
    if (!password || !name || !email || !photo) {
      setErrors("Please fill the from");
    }
    if (!email.trim()) {
      setErrors("Eamil is required");
    }
    if (!password.trim()) {
      setErrors("password is required");
    }
    if (password.trim().length < 6) {
      setErrors("Password must be at least 6 characters");
    }

    createPasswordUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        updateUserProfile(user,name,photo)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="registration-form-background">
      <Container>
        <Form onSubmit={handleRegister} className="registration-form">
          <h1 className="register-heading">Create Your Account</h1>
          <p className="error-message"><small>{errors}</small></p>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhotoUrl">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter photo URL"
              name="photo"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>

         <div className="register-btn">
         <button className="register" type="submit">
            Register
          </button>
         </div>

          <hr />

          <div className="googleGithub">
          <Button variant="primary" onClick={handleGoogleLogin}>
            <FaGoogle/>Google Login
          </Button>

          <Button variant="primary" onClick={handleGithubLogin}>
            <FaGithub/>Github Login
          </Button>
          </div>

          <hr />

          <p>
            Already have an account? <Link to="/login">Log in here</Link>.
          </p>
        </Form>
      </Container>
    </div>
  );
}
