import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
    setTicker("");
    setButton(false);
    setSuccess(true);
    setLoading(true);
    setData(null);
  };

  return (
    button ?
      (loading ? (<div className="loading">
        <h1 style={{ color: 'white' }}>Loading...</h1>
        <Button block onClick={() => clicked2()} size="sm" type="submit">
          Back
          </Button>
      </div>) :
        (success ?
          (<div>
            <div className="trendinfo">
              <h1 style={{ color: 'white' }}>Trends for {ticker}:</h1>
            </div>
            <div className="image">
              <img src="" alt="test" />
            </div>
            <Button block onClick={() => clicked2()} size="sm" type="submit">
              Back
          </Button>
          </div>) :
          (<div className="failure">
            <h1 style={{ color: 'white' }}>Could not fetch data on trends for {ticker}:</h1>
            <Button block onClick={() => clicked2()} size="sm" type="submit">
              Back
          </Button>
          </div>)))
      :
      (<div className="TrendSubmit" align="center">
        <Form onSubmit={handleSubmit}>
          <div className="trendintro">
            <h1 style={{ color: 'white' }}>This is the trends page!</h1>
            <h2 style={{ color: 'white' }}>Select a ticker:</h2>
          </div>
          <div className="Ticker">
            <Form.Group size="lg" controlId="ticker">
              <Form.Control
                autoFocus
                type="ticker"
                value={ticker}
                onChange={(e) => setTicker(e.target.value)}
              />
            </Form.Group>
            <Button block onClick={() => clicked()} size="sm" type="submit" disabled={!validateForm()}>
              Go
          </Button>
          </div>
        </Form>
      </div>)
  );
}