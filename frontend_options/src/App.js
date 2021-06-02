import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import HomeHS from './components/pages/HomeHS'
import Trends from './components/pages/Trends';
import OPC from './components/pages/OPC';
import AboutUs from './components/pages/AboutUs';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Watchlist from './components/pages/Watchlist';
import Dashboard from './components/pages/Dashboard';
import ForgotPassword from './components/pages/ForgotPassword';
import UpdateProfile from './components/pages/UpdateProfile';
import PrivateRoute from './components/pages/PrivateRoute';
import ToWatch from './components/pages/ToWatch';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AuthProvider>
        <Switch>
          <Route path='/' exact component={HomeHS}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/trends' component={Trends} />
          <Route path='/opc' component={OPC} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path='/watchlist' component={Watchlist} />
          <Route path='/towatch' component={ToWatch} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
        </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;