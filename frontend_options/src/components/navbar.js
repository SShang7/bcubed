import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './navbar.css';
import Button from "react-bootstrap/Button";
import { useAuth } from '../contexts/AuthContext'
import { AuthProvider } from '../contexts/AuthContext';


export default function Navbar() {
    const currentUser = useAuth();
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

        return (
            <>
            <AuthProvider>
                <nav className="navbar">
                    <div className="navbar-container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <h1>bcubed / b<span>&#179;</span></h1>
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                                    home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/trends' className='nav-links' onClick={closeMobileMenu}>
                                    trends
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/opc' className='nav-links' onClick={closeMobileMenu}>
                                    options profit calc
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/watchlist' className='nav-links' onClick={closeMobileMenu}>
                                    watchlist
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
                                    about us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                                    Login
                                </Link>
                            </li>
                        </ul>
                        <Link to='/dashboard'>
                        {button && <button class="btn btn-primary">
                            profile
                        </button>}
                        </Link>
                    </div>
                </nav>
                </AuthProvider>
            </>
        )

}

