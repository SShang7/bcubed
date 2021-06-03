import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./Trends.css";
import firebase from "firebase/app";


export default function Trends() {
  const [ticker, setTicker] = useState("");
  const [button, setButton] = useState(false);
  const [success, setSuccess] = useState(true);
  const [loading, setLoading] = useState(true);
  const [url, setURL] = useState('');

  const config = {
    apiKey: "AIzaSyCMdjEwurne0SvBdLzsN4MUnOFuDwah-vo",
    authDomain: "auth-development-1e056.firebaseapp.com",
    databaseURL: "https://auth-development-1e056-default-rtdb.firebaseio.com/",
    projectId: "auth-development-1e056",
    storageBucket: "auth-development-1e056.appspot.com",
    messagingSenderId: "729954982605",
    appId: "1:729954982605:web:d523efc16e31ce0164e784"
  }
  
  const storage = firebase.storage().ref()

  function Image (image) {
    storage.child(`${image}.png`).getDownloadURL().then((url) => {
      setURL(url);
    })
  }

  function validateForm() {
    return ticker.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function clicked() {
    setButton(true);
    fetch("/images", {ticker: ticker.current.value})
      .then((response) => {
        setLoading(false);
        if (response.ok) {
          Image(ticker.current.value);
        } else {
        setSuccess(false);
        }
      })/*
      .catch((error) => {
        console.log("Something went wrong.", error);
      });*/
  };

  function clicked2() {
    setButton(false);
    setTicker("")
    setSuccess(true);
    setLoading(true);
    setURL('');
  };

  function clicked3() {

  }

  return (
    button ?
      (loading ? (<div className="loading">
        <h1 style={{ color: 'white' }}>Loading...</h1>
        <Button block onClick={() => clicked2()} size="sm" type="submit">
          Back
          </Button>
      </div>) :
        (success ?
          (<div align="center">
            <div className="trendinfo">
              <h1 style={{ color: 'white' }}>Trends for {ticker}:</h1>
            </div>
            <div className="image">
              <img src={url} alt="test" />
            </div>
            <Form>
              <Form.Row className="justify-content-md-center">
                <Col xs="auto">
                  <Button block onClick={() => clicked2()}>
                    Back
                  </Button>
                  <Button block onClick={() => clicked3()}>
                    Add to Watchlist
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </div>) :
          (<div align="center">
              <h2>Could not fetch data on trends for {ticker}:</h2>
              <Form>
                <Form.Row className="justify-content-md-center">
                  <Col xs="auto">
                    <Button block onClick={() => clicked2()}>
                      Back
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
            </div>)
        )
      ) : (
        <div align="center">
          <h2>This is the trends page!</h2>
          <h3>Select a ticker:</h3>
          <Form>
            <Form.Row className="justify-content-md-center">
              <Col sm={1}>
                <Form.Control
                  autoFocus
                  type="ticker"
                  value={ticker}
                  onChange={(e) => setTicker(e.target.value)}
                  placeholder="ticker"
                />
              </Col>
              <Col xs="auto">
                <Button block onClick={() => clicked()} type="submit" disabled={!validateForm()}>
                  Go
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
      ));
}

/*
<div align="center">
  <h2>This is the trends page!</h2>
  <h3>Select a ticker:</h3>
  <Form>
    <Form.Row className="justify-content-md-center">
      <Col sm={1}>
        <Form.Control
          autoFocus
          type="ticker"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          placeholder="ticker"
        />
      </Col>
      <Col xs="auto">
        <Button block onClick={() => clicked()} type="submit" disabled={!validateForm()}>
          Go
        </Button>
      </Col>
    </Form.Row>
  </Form>
</div>
*/

/*
<div align="center">
  <h1>Could not fetch data on trends for {ticker}:</h1>
  <Form>
    <Form.Row className="justify-content-md-center">
      <Col xs="auto">
        <Button block onClick={() => clicked2()}>
          Back
        </Button>
      </Col>
    </Form.Row>
  </Form>
</div>
*/
