import React from 'react'
import { Button } from './Button';
import '../App.css'
import './HeroSection.css'
import { Link } from "react-router-dom"


function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>welcome!</h1>
            <p>ready to make some money?</p>
            <div className="hero-btns">
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    sign in
                </Button>
                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                <Link to='/trends' className='homelink'>
                    enter
                </Link>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
