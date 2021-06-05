import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import { useHistory } from 'react-router-dom'
import { useRef } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default function Trends() {
  const [ticker, setTicker] = useState("");
  const [button, setButton] = useState(false);
  const [success, setSuccess] = useState(true);
  const [loading, setLoading] = useState(true);
  const [url, setURL] = useState('');

  const history = useHistory()
  const tickerRef = useRef()

  const storage = firebase.database().ref()

  function Image (image) {
    storage.child('image.png').getDownloadURL().then((url) => {
      setURL(url);
    })
  }
  function validateForm() {
    return ticker.length > 0;
  }

  async function clicked(e) {
    e.preventDefault()
    var data = {
      ticker: tickerRef.current.value,
    }
    await firebase.database().ref('image/ticker').set(data)
    fetch('/imageees')
    .then((response) => {
      if (response.ok) {
        firebase.storage().ref('image.png').getDownloadURL().then((url) => {
          setURL(url);
        });
        firebase.database().ref().once('value').then(snapshot => {setSuccess(snapshot.child('report').val())});
      } else {
      setSuccess(false);
      }
      setButton(true);
      setLoading(false);
    });
    
  }

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
              <h1>Trends for {ticker}:</h1>
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
          <form onSubmit={clicked}>
            <Form.Row className="justify-content-md-center">
              <Col sm={1}>
                <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ticker" ref={tickerRef}></input>
              </Col>
              <Col xs="auto">
                <button type="submit" class="btn btn-primary">Go</button>
              </Col>
            </Form.Row>
          </form>
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
