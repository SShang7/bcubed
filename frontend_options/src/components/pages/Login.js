/*import React from 'react'
import PasswordBox from '../PasswordBox' 
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <PasswordBox>
            </PasswordBox>
            <Link to='/signup'>
                new here? sign up!
            </Link>  
        </div>
    )
}

export default Login*/

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import { Link } from "react-router-dom"

export default function Login() {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login" align="center">
      <Form onSubmit={handleSubmit}>
          <div className = "UserName">
          <Form.Group size="lg" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
                autoFocus
                type="username"
                value={username}
                onChange={(e) => setEmail(e.target.value)} //e.target.value holds username
                />
            </Form.Group>
            </div>
    <div className="PW">
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} //e.target.value holds password
          />
        </Form.Group>
    </div>
    <div className="loginbutton">
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
    </div>
    <div className="registerbutton">
    <Link to='/signup'>
    <Button >
            Register        
    </Button>
    </Link>         
    </div>
      </Form>
    </div>
  );
}

