import React, { useState } from 'react';
import { Button, Form, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../hooks';
import { loginUser } from '../store/authSlice';
import Spinner from '../components/Spinner';
import Message from '../components/Message';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const dispatch = useAppDispatch();
  const { loading, error, message } = useAppSelector((state) => state.auth ?? {});

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h2 className="form-title">Log in with</h2>
          <p className="separator"><span>or</span></p>
    
          {/* Show Success/Error Messages */}
          {message && <Message message={message} type="success" />}
          {error && <Message message={error} type="error" />}

          {/* Login Form */}
          <Form className="login-form" onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                name="username"
                value={credentials.username}
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                type="password"
                placeholder="Password"
                aria-label="Password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </InputGroup>

            <a href="#" className="forgot-password-link">Forgot password?</a>

            <Button type="submit" className="login-button" variant="primary" block>
              {loading ? <Spinner /> : 'Log In'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
