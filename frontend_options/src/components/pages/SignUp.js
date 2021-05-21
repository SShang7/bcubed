import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0 && email.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login" align="center">
      <Form onSubmit={handleSubmit}>
        <div classname="Email">
            <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} //e.target.value holds email
            />
            </Form.Group>
        </div>
        <div className="UserName">
            <Form.Group size="lg" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
                autoFocus
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} //e.target.value holds username
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
            Create Account
            </Button>
        </div>
      </Form>
    </div>
  );
}

