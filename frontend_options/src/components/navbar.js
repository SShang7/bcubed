import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import './navbar.css';
import { Button } from './Button';
import { AiOutlineStock } from "react-icons/ai"


function Navbar() {
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
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        bcubed
                        <AiOutlineStock />
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
                            <Link to='/Watchlist' className='nav-links' onClick={closeMobileMenu}>
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
                    {button && <Button buttonStyle='btn--outline'>sign up</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
