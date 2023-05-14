import React, { useState } from "react";
import { Card } from "react-bootstrap";

const Payment = ({ quantity, price, ticketType }) => {
  const totalAmount = quantity * price;
  const [showPayment, setShowPayment] = useState(false);

  const handlePayment = () => {
    setShowPayment(true);
  };

  return (
    <div className="card-container">
      <div className="card-row">
        <Card id="ca" style={{ width: "30rem" }}>
          <div className="row no-gutters">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title>Delivery</Card.Title>
                <Card.Text>
                  <b>Mobile Entry-Free</b>
                </Card.Text>
              </Card.Body>
            </div>
          </div>
        </Card>
        <Card id="ca" style={{ width: "30rem", height: "28rem" }}>
          <div className="row no-gutters">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title>Delivery</Card.Title>
                <Card.Text>
                  <b>Mobile Entry-Free</b>
                </Card.Text>
                <a href="#" id="bt" className="btn btn-primary">
                  Learn More
                </a>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
      <Card id="ca" style={{ width: "30rem" }}>
        <Card.Img />
        <Card.Body>
          <Card.Title>Payment Details</Card.Title>
          <Card.Text>
            <p>Total: {totalAmount}</p>
            <p>Type: {ticketType} </p>
            <p>Quantity: {quantity}</p>
            <p>Price per ticket: ${price}</p>
            <button id="bt" className="btn btn-primary" onClick={handlePayment}>
              Proceed to Payment
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Payment;
