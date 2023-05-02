import React, { useContext } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContent } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {

  const { signInUser, googleLogin, githubLogin } = useContext(AuthContent);
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

    signInUser(email,password)
    .then((result) => {
      const loggedInUser = result.user ;
      navigate(from, {replace: true})
      toast.success('Login successful!');

    })
    .catch(error => {
      console.log(error);
    })

  }

  const handleGoogleLogin = () =>{
    googleLogin()
    .then(result => {
      const user = result.user
      navigate(from, {replace: true})
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    })
  }

  const handleGithubLogin = () => {
    githubLogin()
    .then(result => {
      const user =result.user;
      navigate(from, {replace: true})
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className='bg'>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h3 className="fw-bold mb-2 text-center text-uppercase ">
                    Login Your Account
                  </h3>
                  <div className="mb-3">
                    <Form onSubmit={handleLogin}>
                      
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control required name='email' type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control required name='password' type="password" placeholder="Password" />
                      </Form.Group>
                      
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                        <div className='mx-auto mt-3'>
                            <button onClick={handleGoogleLogin} className='btn btn-primary'><FaGoogle/> Login With Google</button>
                            <button onClick={handleGithubLogin} className='btn btn-primary'><FaGithub/> Login With Github</button>
                        </div>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account??{' '}
                        <Link to='/register' className="text-primary fw-bold">
                          Registration
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
              <ToastContainer />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

