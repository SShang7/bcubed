import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import "./login.css";


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    // eslint-disable-next-line
    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/dashboard")
        } catch {
            setError("Failed to sign in")
          }
        setLoading(false)
    }

    return (
        <>
        <Card className="card1">
            <Card.Body>
                <h2 className="headtext">Log in</h2>
                {error && <Alert className="alert" variant="danger">{error}</Alert>}
                <Form onSubmit = {handleSubmit}>
                    <Form.Group id="email">
                        <Form.Control placeholder="email" type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Control placeholder="password" type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="logbutton" type="submit">Login</Button>
                </Form>
                <div className = "forgotLink">
                    <Link className="forgot" to="/forgot-password">Forgot Password?</Link>
                </div>
            </Card.Body>
        </Card>
        <div className="needacct">
            Need an account? <Link className="signlink" to="/signup">sign up</Link>
        </div>
        </>
    )
}
