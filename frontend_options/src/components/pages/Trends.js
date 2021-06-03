import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./Trends.css";

export default function Trends() {
  const [ticker, setTicker] = useState("");
  const [button, setButton] = useState(false);
  const [success, setSuccess] = useState(true);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  function validateForm() {
    return ticker.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function clicked() {
    const myRequest = new Request({ ticker }, { //fetched url TBD
      /*
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
      */
      //pretty sure this isn't necessary
    });
    setButton(true);
    fetch(myRequest)
      .then((response) => {
        setLoading(false);
        if (response.ok) {
          return response.json();
        }
        setSuccess(false);
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("Something went wrong.", error);
      });
  };

  function clicked2() {
    setButton(false);
    setTicker("")
    setSuccess(true);
    setLoading(true);
    setData(null);
  };

  function clicked3() {

  }

  return (
    button ?
      (loading ? (<div className="loading">
        <h1>Loading...</h1>
      </div>) :
        (success ?
          (<div align="center">
            <div className="trendinfo">
              <h1>Trends for {ticker}:</h1>
            </div>
            <div className="image">
              <img src="" alt="test" />
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
          (
            <div align="center">
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
            </div>
          ))
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