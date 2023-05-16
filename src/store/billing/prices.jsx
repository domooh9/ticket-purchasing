import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { VisaCreditCard as VisaCard } from "react-fancy-visa-card";

const Payment = ({ quantity, price, ticketType }) => {
  const [showPayment, setShowPayment] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const totalAmount = quantity ? quantity * price : 0;

  const handlePayment = () => {
    if (checkboxChecked) {
      setShowPayment(true);
    }
  };
  const pay = (e, data) => {
    console.log(data);
  };

  return (
    <div className="card-container">
      <div className="card-row">
        <Card id="ca" style={{ width: "30rem" }}>
          <div className="row no-gutters">
            <div className="col-md-4"></div>
            <div id="co" className="col-md-8">
              <Card.Body>
                <b>
                  Delivery <i class="bi bi-check"></i>
                </b>
                <a
                  style={{
                    fontSize: "14px",
                    fontFamily: "Tajawal",
                  }}>
                  <p
                    style={{
                      fontStyle: "normal",
                      fontWeight: "bold",
                      position: "relative",
                      top: "17px",
                    }}>
                    Mobile Entry-Free
                  </p>
                  Tickets available by Sun, 03-june, 2023 These Mobile Tickets
                  will be transfered to you directly from a trusted seller.
                </a>
              </Card.Body>
            </div>
          </div>
        </Card>
        <Card id="ca" style={{ width: "30rem", height: "24rem" }}>
          <div className="row no-gutters">
            <div className="col-md-4"></div>
            <div className="col-md-8">
              <Card.Body>
                <Card.Title>
                  <a style={{ marginLeft: "-160px" }}>Payment</a>
                  <i class="bi bi-check"></i>
                </Card.Title>
                <div className="payment-container">
                  <h5 style={{ marginLeft: "-150px", fontSize: "15px" }}>
                    Use Credit/Debit
                  </h5>
                  <form id="for" className="payment-form">
                    <div id="pay" className="form-group">
                      <VisaCard
                        onSubmit={pay}
                        frontCardColor="red"
                        backCardColor="black"
                        submitBtnColor="white"
                        submitBtnTxt="Pay $350"
                        height="20px"
                      />
                    </div>
                  </form>
                </div>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
      <Card id="ca" style={{ width: "30rem" }}>
        <Card.Img />
        <Card.Body>
          <Card.Title>
            Total <a style={{ marginLeft: "300px" }}>${totalAmount}</a>
          </Card.Title>
          <Card.Text>
            <label>Tickets</label>
            {quantity && <p>Quantity: {quantity}</p>}{" "}
            {/* Only show quantity if it's selected */}
            <p>Price per ticket: ${price}</p>
            <p
              style={{
                fontStyle: "normal",
                fontWeight: "bold",
                letterSpacing: "1px",
                position: "relative",
                top: "170px",
              }}>
              *All Sales Final - No Refund
            </p>
            <p>
              <input
                style={{ position: "relative", top: "180px" }}
                type="checkbox"
                name="termsCheckbox"
                checked={checkboxChecked}
                onChange={handleCheckboxChange}
              />
              <label
                style={{
                  fontStyle: "normal",
                  marginLeft: "4px",
                  position: "relative",
                  top: "180px",
                }}
                htmlFor="termsCheckbox"
                className="ml-2 block text-sm text-gray-900">
                I have read and Agree to current
                <a
                  style={{
                    fontStyle: "normal",
                    marginLeft: "4px",
                  }}
                  href="https://www.example.com/terms-of-use"
                  target="_blank"
                  rel="noopener noreferrer">
                  Terms of Use
                </a>
              </label>
            </p>
          </Card.Text>
          <div className="card-footer">
            <button
              id="bt"
              className="btn btn-primary"
              onClick={handlePayment}
              disabled={!checkboxChecked}>
              Proceed to Payment
            </button>
          </div>
          {/* <a>*Exceptions may apply see our terms of use</a> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Payment;
