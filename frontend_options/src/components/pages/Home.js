import React from 'react'
import './Home.css'

function Home () {
    return (
    <body className="Home">
    <nav>
    <h1 id="spinner">b<span>&#179;</span></h1>
    <p id="introtext">welcome to bearish/bullish/beyond</p>
        <div className="container1">
        <img src="bearfinal-removebg-preview.png" alt="bear" id="bearimage"></img>
        <img src="bull1-removebg-preview.png" alt="bull" id="bullimage"></img>
        <h1 className="title1">This is the Home Page</h1>
            <p className="p1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Architecto, illum qui? Repudiandae sed aliquid ab qui fuga 
            numquam, reprehenderit voluptate aspernatur alias nesciunt, 
            s quia fugiat. Laboriosam tempora similique laudantium?
            </p>
        </div>
        <div className="container2">
        <h1 className="title1">This is the Home Page</h1>
            <p className="p1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Architecto, illum qui? Repudiandae sed aliquid ab qui fuga 
            numquam, reprehenderit voluptate aspernatur alias nesciunt, 
            s quia fugiat. Laboriosam tempora similique laudantium?
            </p>
        </div>
        <div className="container3">
        <h1 className="title1">This is the Home Page</h1>
            <p className="p1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Architecto, illum qui? Repudiandae sed aliquid ab qui fuga 
            numquam, reprehenderit voluptate aspernatur alias nesciunt, 
            s quia fugiat. Laboriosam tempora similique laudantium?
            </p>
        </div>
    </nav>
    </body>
    )
}

export default Home;