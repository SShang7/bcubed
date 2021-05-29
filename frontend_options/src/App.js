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
import firebase from "firebase/app";
import "firebase/auth";

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
export const App = () => {
  const [uuser, setUser] = React.useState(null);

   retun user ? (
     <AuthenticatedApp user={user} />
   ) : (
     <SignupForm onSuccess={setUser} />
  );
};

export const SignupForm = ({onSuccess}) => {
  const [email, setEmail] = React.useState("");
  const [pasword, setPasswoed] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    onSuccess(user);
    return;
  };
  return(
    <form onSubmit={handleSubmit}>
      <div className="flex flex-column">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="passwoord"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
         
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

 export const AuthenticatedApp = ({ user }) => {
   return (
     <div>
       <h1>You're logged In.</h1>
       <code>
         <pre>{JSON.stringify(user, null, 2)}</pre>
       </code>
     </div>
   );
 };


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