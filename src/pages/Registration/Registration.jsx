import React, { useContext, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContent } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Registration() {

  const { createPasswordUser } = useContext(AuthContent);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();


  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;


    

    // Validate input
    if(!password || !name || !email || !photo){
      setErrors('Please fill the from')
    }
    if (!email.trim()) {
      setErrors('Eamil is required')
    }
    if (!password.trim()) {
      setErrors('password is required');
    }
    if (password.trim().length < 6) {
      setErrors('Password must be at least 6 characters');
    }
    
    

    createPasswordUser(email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigate('/')
      toast.success('Registration successful!');
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  }

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h3 className="fw-bold mb-2 text-center text-uppercase ">
                    Create Your Account
                  </h3>
                  <p className='text-center text-danger'><small>{errors}</small></p>
                  <div className="mb-3">
                    <Form onSubmit={handleRegister}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter Name" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name='photo' type="text" placeholder="Photo url" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                        <div className='d-flex justify-content-between pt-3'>
                            <button className='btn btn-primary'><FaGoogle/> Login With Google</button>
                            <button className='btn btn-primary'><FaGithub/> Login With Github</button>
                        </div>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                        <Link to='/login' className="text-primary fw-bold">
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
              <ToastContainer/>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}