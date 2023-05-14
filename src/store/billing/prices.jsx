import React, { useState } from "react";
import { Card } from "react-bootstrap";

const Payment = ({ quantity, price, ticketType }) => {
  const totalAmount = quantity * price;
  const [showPayment, setShowPayment] = useState(false);

  const handlePayment = () => {
    setShowPayment(true);
  };

  return (
    <>
      {/* <div>
        <h4>Payment Details</h4>
        <p>Type: {ticketType} </p>
        <p>Quantity: {quantity}</p>
        <p>Price per ticket: ${price}</p>

        {!showPayment ? (
          <button className="btn btn-primary" onClick={handlePayment}>
            Proceed to Payment
          </button>
        ) : (
          <p>Total amount to be paid: ${totalAmount}</p>
        )}
      </div> */}
      <Card style={{ width: "18rem" }}>
        <Card.Img
        // variant="top"
        // src="https://example.com/image.jpg"
        // alt="Card image"
        />
        <Card.Body>
          <Card.Title>Payment Details</Card.Title>
          <Card.Text>
            <p>Total: {totalAmount}</p>
            <p>Type: {ticketType} </p>
            <p>Quantity: {quantity}</p>
            <p>Price per ticket: ${price}</p>
            <button className="btn btn-primary" onClick={handlePayment}>
              Proceed to Payment
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            {/* <Card.Img src="https://example.com/image.jpg" alt="Card image" /> */}
          </div>
          <div className="col-md-8">
            <Card.Body>
              <Card.Title>Delivery</Card.Title>
              <Card.Text>
                <b>Mobile Entry-Free</b>
              </Card.Text>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>
            </Card.Body>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Payment;
