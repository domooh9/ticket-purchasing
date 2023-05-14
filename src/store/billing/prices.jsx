import React, { useState } from "react";

const Payment = ({ quantity, price, ticketType }) => {
  const totalAmount = quantity * price;

  const [showPayment, setShowPayment] = useState(false);

  const handlePayment = () => {
    setShowPayment(true);
  };

  return (
    <div>
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
    </div>
  );
};

export default Payment;
