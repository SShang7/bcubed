import React from 'react'
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

export default Login
