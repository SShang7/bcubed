import React, { useState } from 'react'
import firebase from '../../firebase'
import 'firebase/database'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function Watchlist() {
  const { currentUser } = useAuth()

  class Watchlist extends React.Component {
    constructor(props) {

      super(props);

      this.state = { studentslist: [] }
    }

    componentDidMount() {
      firebase.database().ref('users/' + firebase.auth().currentUser.uid).on("value", snapshot => {
        let studentlist = [];
        snapshot.forEach(snap => {
          // snap.val() is the dictionary with all your keys/values from the 'students-list' path
          studentlist.push(snap.val());
        });
        this.setState({ studentslist: studentlist });
      });
      fetch('/tickers', {"uid": firebase.auth().currentUser.uid, "tickers": this.state.studentslist}).then(res => res.json()).then(data => {
        
      });
    }

    render() {
      return (
        <div className="MainDiv">
          <div class="jumbotron text-center bg-sky">
            <h3>{currentUser.email}'s tickers</h3>
          </div>

          <div className="container">
            <table id="example" class="display table">
              <thead class="thead-dark">
                <tr>
                  <th>favorites</th>
                </tr>
              </thead>
              <tbody>
                {this.state.studentslist.map(data => {

                  return (
                    <tr>
                      <td>{data.ticker}</td>
                    </tr>

                  );

                })}


              </tbody>

            </table>

          </div>
          <Link className="loglink" to='/towatch'>add more favorites?</Link>
        </div>
      );
    }
  }
  if (currentUser) {
    return (
      <Watchlist>

      </Watchlist>
    )
  }
  else {
    return (
      <div>
        <h2>The watchlist feature is for users!</h2>
        <Link className="new" to="/signup">Create an Account?</Link>
      </div>
    )
  }
}

