import React, { useState } from "react";
import PaymentForm from "./addcard";
import { Card } from "react-bootstrap";
import { VisaCreditCard as VisaCard } from "react-fancy-visa-card";
import { image, tick } from "../../assets/image";
import { Link } from "react-router-dom";

const Payment = ({ quantity, price }) => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [showVisaCard, setShowVisaCard] = useState(false);
  const [transactionSuccessful, setTransactionSuccessful] = useState(false);

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const totalAmount = quantity ? quantity * price : 0;
  const Service = 44.2 * quantity;
  const deduct = totalAmount - Service + 2.95;
  let deduc = deduct.toFixed(2);
  const other = deduc / 2;
  let others = other.toFixed(2);

  const handlePayment = () => {
    if (checkboxChecked) {
      setTimeout(() => {
        setTransactionSuccessful(true);
        alert("Your ticket is ready for download");
      }, 2000);
    }
  };

  const pay = (e, data) => {
    e.preventDefault();
    const creditCardData = e.target;
    const elements = Object.values(creditCardData.elements).filter(
      (element) => element.tagName === "INPUT"
    );
    const isAllFilled = elements.every(
      (element) => element.value && element.value.trim().length > 0
    );
    if (isAllFilled) {
      console.log(data);
      setTransactionSuccessful(true);
      alert(
        "Your payment has been successful! you can cancel the transaction before Proceeding to place Order, once you Place Order no refund will be accepted"
      );
    } else {
      alert("Please fill in all the required fields.");
    }
  };
  const handleCheckBoxChange = (event) => {
    if (event.target.checked) {
      setShowVisaCard(true);
      setCheckboxChecked(false);
    } else {
      setShowVisaCard(false);
    }
  };

  const cancelTransaction = () => {
    setTransactionSuccessful(false);
    alert(
      "Your order has been cancelled, we will process your refund in two business days"
    );
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
                  Delivery
                  <img
                    style={{ width: "37px", height: "30px" }}
                    src={tick}
                    alt="visa"
                  />
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
                  <a style={{ marginLeft: "-160px" }}>
                    Payment
                    <img
                      style={{ width: "37px", height: "30px" }}
                      src={tick}
                      alt="visa"
                    />
                  </a>
                  <i className="bi bi-check"></i>
                </Card.Title>
                <div className="payment-container">
                  <h5 style={{ marginLeft: "-150px", fontSize: "15px" }}>
                    Use Credit/Debit
                  </h5>
                  <form id="for" className="payment-form">
                    <div id="pay" className="form-group">
                      <label id="lab">
                        <input
                          style={{
                            width: "17px",
                            height: "18px",
                          }}
                          type="checkbox"
                          onChange={handleCheckBoxChange}
                          checked={showVisaCard}
                        />{" "}
                        <img
                          style={{ width: "37px", height: "30px" }}
                          src={image}
                          alt="visa"
                        />
                      </label>
                      <label id="lab">
                        <input
                          style={{
                            width: "17px",
                            height: "18px",
                          }}
                          type="checkbox"
                          onChange={handleCheckboxChange}
                          checked={!showVisaCard && checkboxChecked}
                        />{" "}
                        <a style={{ fontSize: "30px", color: "blue" }}>+</a>{" "}
                        <a style={{ color: "blue" }}>Add a New Card</a>
                      </label>
                      {showVisaCard && !checkboxChecked && (
                        <VisaCard
                          onSubmit={pay}
                          frontCardColor="red"
                          backCardColor="black"
                          submitBtnColor="black"
                          submitBtnTxt={totalAmount}
                          height="20px"
                        />
                      )}
                      {!showVisaCard && checkboxChecked && (
                        <PaymentForm
                          onSubmit={pay}
                          submitBtnTxt={totalAmount}
                        />
                      )}
                    </div>
                  </form>
                  <div
                    style={{
                      position: "relative",
                      right: "155px",
                      marginTop: "10px",
                      fontFamily: "monospace",
                      fontSize: "14px",
                    }}>
                    <a>
                      Or Pay with<br></br>
                    </a>
                    <a>
                      By using digital wallet and contiuning past this page, you
                      have read and are accepting{" "}
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
                    </a>
                  </div>
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
          <div className="all">
            <a style={{ position: "relative", top: " 30px" }}>
              <label>
                <b>Tickets</b>
              </label>
              {/* {quantity && <p>Quantity: {quantity}</p>}{" "} */}
              {/* <p>Price per ticket: ${price}</p> */}
              <p style={{ fontStyle: "normal" }}>
                Resale Tickets: ${others} * 2{" "}
                <a style={{ position: "relative", left: " 180px" }}>${deduc}</a>
              </p>
            </a>
            <a style={{ position: "relative", top: " 50px" }}>
              <label>
                <b>Notes From Seller</b>
              </label>
              <br></br>
              <a>
                xfr proof of atleast COVID-19 vaccination for ages 5 to 15 and
                guests ages 12 and up will be required to proof of two covid-19
                doses of Johnson and Johson Vaccine. Mask must be worn <br></br>
              </a>
            </a>
            <a
              style={{
                position: "relative",
                top: " 75px",
                marginBottom: "10px",
              }}>
              <label>
                <b>Fees</b>
              </label>
              <br></br>
              <a>
                Servive Fees: $44.2 * {quantity}{" "}
                <a style={{ position: "relative", left: " 200px" }}>
                  ${Service}
                </a>
              </a>
              <br></br>
              <a>
                Order Processing Fees:{" "}
                <a style={{ position: "relative", left: " 200px" }}>$2.95</a>
              </a>
            </a>
            <br></br>
            <a style={{ position: "relative", top: " 100px" }}>
              <label>
                <b>Delivery</b>
              </label>
              <br></br>
              <a>
                Moble Delivery:{" "}
                <a style={{ position: "relative", left: " 250px" }}>Free</a>
              </a>
            </a>
            <br></br>
            <button
              style={{
                position: "relative",
                top: "140px",
                background: "white",
                color: "blue",
                border: "none",
                fontSize: "15px",
              }}
              onClick={cancelTransaction}>
              Cancel Order
            </button>
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
          </div>
          <p>
            <input
              style={{ position: "relative", top: "180px" }}
              type="checkbox"
              name="termsCheckbox"
              // checked={checkboxChecked}
              // onChange={handleCheckboxChange}
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
          <div id="footer" className="card-footer">
            {transactionSuccessful && (
              <Link
                to="/bill"
                style={{ position: "relative", left: "100px" }}
                id="bt"
                className="btn btn-primary"
                onClick={handlePayment}
                disabled={!checkboxChecked}>
                Place Order
              </Link>
            )}
            <a
              style={{
                position: "relative",
                top: "30px",
                right: "110px",
                fontSize: "12px",
              }}>
              *Exceptions may apply see our terms of use
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Payment;
