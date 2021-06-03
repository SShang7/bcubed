import React from 'react'
import './Home.css'

function Home () {
    return (
    <body className="Home" class=".bg-light">
    <nav>
    <h1 id="spinner">b<span>&#179;</span></h1>
    <p id="introtext">welcome to bearish/bullish/beyond</p>
        <div className="container1">
        <img src="/static/bearfinal-removebg-preview.png" alt="bear" id="bearimage"></img>
        <img src="/static/bull1-removebg-preview.png" alt="bull" id="bullimage"></img>
        <h1 className="title1">we tell you the best times to invest</h1>
            <p className="p1">
            With our algorithms, we can detect the ideal times for users 
            to buy options or to short them. We can do this all using the magic of 
            bullish and bearish divergence
            </p>
        </div>
        <div className="container2">
        <h1 className="title1">bullish and bearish what?</h1>
            <p className="p1">
            Bullish Divergence: A sudden reversal from a bearish trend (stock price is going downwards).
            Bearish Divergence: A sudden reversal from a bullish trend (stock price is going upwards).
            We use the MACD (moving average convergence divergence) indicator to detect for bullish and 
            bearish divergences.
            </p>
        </div>
    </nav>
    </body>
    )
}

export default Home;
//watchlist
//login
//options profit calculator
//bullish and bearish divergence
//how images are sent to frontend/ticker stuff
//intro and overview