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
                <Button block size="lg" className="btn">
                    sign in
                </Button>
                </Link>
                <Link to='/home' className='homelink'>
                <Button block size="lg" color="#3500d3">
                    enter
                </Button>
                </Link>
            </div>
            <div>
            <img src="/static/bearfinal-removebg-preview.png" alt="bear" id="bearimage1"></img>
            <img src="/static/bull1-removebg-preview.png" alt="bull" id="bullimage1"></img>                
            </div>
        </div>
    )
}

export default HeroSection
