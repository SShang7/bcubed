import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import "./SignUp.css";


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    // eslint-disable-next-line
    async function handleSubmit(e) {
        e.preventDefault()
        
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/dashboard")
        } catch {
            setError("Failed to create an account")
          }
        setLoading(false)
    }

    return (
        <>
        <Card className="card1">
            <Card.Body>
                <h2 className="headertext">Sign up</h2>
                {error && <Alert className="error" variant="danger">{error}</Alert>}
                <Form onSubmit = {handleSubmit}>
                    <Form.Group id="email" className="form1">
                        <Form.Control placeholder="email" type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Control placeholder="password" type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Control placeholder="password confirmation" type="password" ref={passwordConfirmRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="button1" type="submit">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="linktext">
            Already have an account? <Link className="loglink" to='/login'>login</Link>
        </div>
        </>
    )
}