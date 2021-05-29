//<p> My token = {window.token}</p>

import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Trends from './components/pages/Trends';
import OPC from './components/pages/OPC';
import AboutUs from './components/pages/AboutUs';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Watchlist from './components/pages/Watchlist';
import React from "react";
import firebase from "firebase";

export default function App() {
  const firebaseApp = firebase.apps[0];
  return (
    <div>
      <h1>React & Firebase</h1>
      <h2>By @farazamiruddin</h2>
      <code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/trends' component={Trends} />
          <Route path='/opc' component={OPC} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/watchlist' component={Watchlist} />
        </Switch>
      </Router>
    </>
  );
}

export default App;