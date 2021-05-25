import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Trends.css";
import { Link } from "react-router-dom"

export default function Trends() {
  const [ticker, setTicker] = useState("");

  function validateForm() {
    return ticker.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="TrendSubmit" align="center">
      <Form onSubmit={handleSubmit}>
        <div className="trendintro">
          <h1>This is the trends page!</h1>
          <h2>Select a ticker:</h2>
        </div>
        <div className="Ticker">
          <Form.Group size="lg" controlId="ticker">
            <Form.Control
              autoFocus
              type="ticker"
              value={ticker}
              onChange={(e) => setTicker(e.target.value)} //e.target.value holds username
            />
          </Form.Group>
          <Button block size="sm" type="submit" disabled={!validateForm()}>
            Go
          </Button>
        </div>
      </Form>
    </div>
  );
}