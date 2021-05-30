import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import './ForgotPassword.css'

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    // eslint-disable-next-line
    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            setMessage('')
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError("Failed to reset password")
          }
        setLoading(false)
    }

    return (
        <>
        <Card className="card1">
            <Card.Body>
                <h2 color="white" className="headtext">Reset Password</h2>
                {error && <Alert className="error" variant="danger">{error}</Alert>}
                {message && <Alert className="error1" variant="success">{message}</Alert>}
                <Form onSubmit = {handleSubmit}>
                    <Form.Group id="email">
                        <Form.Control placeholder="email" type="email" ref={emailRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="resetbutton" type="submit">Reset Password</Button>
                </Form>
                <div className="loglink">
                    <Link className="login" to="/login">Login</Link>
                </div>
            </Card.Body>
        </Card>
        <div className="needacct">
            Need an account? <Link className="signup" to="/signup">sign up</Link>
        </div>
        </>
    )
}