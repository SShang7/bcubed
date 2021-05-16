//<p> My token = {window.token}</p>

import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Trends from './components/pages/Trends';
import OPC from './components/pages/OPC';
import AboutUs from './components/pages/AboutUs';

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
        </Switch>
      </Router>
    </>
  );
}

export default App;