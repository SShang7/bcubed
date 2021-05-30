import React, { useState } from 'react'
import { Card, Alert, Button } from 'react-bootstrap' 
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom' 
import './Dashboard.css'

export default function Dashboard() {
    // eslint-disable-next-line
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    async function handleLogout() {
        setError('')

        try{
            await logout()
            history.pushState('/login')
        }catch{
            setError('Failed to log out')
        }
    }
    return (
        <>
         <Card className="card1">
             <Card.Body className="cardbody">
             <h2 className="headtext">Profile</h2>
             {error && <Alert className="error" variant="danger">{error}</Alert>}
             <strong className="strong1">Email: </strong>{currentUser.email}
            </Card.Body>
            <Link to="/update-profile" className="button0">
                 Update Profile
             </Link>
         <div className="button1">
            <Button variant="link" onClick={handleLogout}>Log Out</Button>
        </div>
         </Card>
        </>
    )
}