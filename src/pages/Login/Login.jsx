import React, { useContext } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContent } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

export default function Login() {
  const { signInUser, googleLogin, githubLogin } = useContext(AuthContent);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        navigate(from, { replace: true });
        toast.success("Login successful!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
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
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="registration-form-background">
      <Container>
        <Form onSubmit={handleLogin} className="registration-form">
          <h1 className="register-heading">Login Your Account</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
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
              Login
            </button>
          </div>

          <hr />

          <div className="googleGithub">
            <Button variant="primary" onClick={handleGoogleLogin}>
              Google Login
            </Button>

            <Button variant="primary" onClick={handleGithubLogin}>
              Github Login
            </Button>
          </div>

          <hr />

          <p>
            Dont't have an account? <a href="/register">Register here</a>.
          </p>
        </Form>
      </Container>
    </div>
  );
}
