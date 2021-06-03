import React from 'react'
import { useRef } from 'react'
import firebase from "firebase"
import { useHistory } from 'react-router-dom'

export default function ToWatch() {
    const history = useHistory()
    const tickerRef = useRef()
    async function sendTicker(e) { 
        e.preventDefault()
        var data = {
            ticker: tickerRef.current.value
        }
        await firebase.database().ref('users/' + firebase.auth().currentUser.uid).push(data);
        history.go(0)
    }


    return (
        <>
            <form onSubmit = {sendTicker}>
                <div>
                    <label for="exampleInputEmail1">Enter some tickers you'd like to favorite</label>
                    <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ticker" ref={tickerRef}></input>
                </div>
            </form>
        </>
    )
    /*const tickerRef = useRef()
    const { currentUser } = useAuth()
    async function sendTicker(e) {
        var firebaseConfig = {
            apiKey: "AIzaSyCMdjEwurne0SvBdLzsN4MUnOFuDwah-vo",
            authDomain: "auth-development-1e056.firebaseapp.com",
            databaseURL: "https://auth-development-1e056-default-rtdb.firebaseio.com",
            projectId: "auth-development-1e056",
            storageBucket: "auth-development-1e056.appspot.com",
            messagingSenderId: "729954982605",
            appId: "1:729954982605:web:d523efc16e31ce0164e784"
          };
          // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        var database = firebase.database();
        var ref = database.ref('usertickers')
        e.preventDefault()
        var data = {
            email: currentUser.email,
            ticker: tickerRef.current.value
        }
        ref.push(data)
    }

    return (
        <>
            <form onSubmit = {sendTicker}>
                <div>
                    <label for="exampleInputEmail1">Enter some tickers you'd like to favorite</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ticker" ref={tickerRef}></input>
                </div>
            </form>
        </>
    )*/
}
