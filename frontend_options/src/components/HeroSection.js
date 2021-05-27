import React from 'react'
import Button from "react-bootstrap/Button";
import '../App.css'
import './HeroSection.css'
import { Link } from "react-router-dom"


function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>welcome!</h1>
            <p>ready to make some money?</p>
            <div className="hero-btns">
            <Link to='/login' className='homelink'>
                <Button block size="lg">
                    sign in
                </Button>
                </Link>
                <Link to='/trends' className='homelink'>
                <Button block size="lg">
                    enter
                </Button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection
