import React, { useState } from "react";

const PaymentForm = ({ onSubmit, submitBtnTxt }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div id="bil" className="card">
      <div className="card-body">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="cardName">Card Name</label>
            <input
              type="text"
              className="form-control"
              id="cardName"
              name="cardName"
              value={formData.cardName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <div className="d-flex">
              <select
                className="form-control mr-2"
                name="expiryMonth"
                value={formData.expiryMonth}
                onChange={handleInputChange}
                required>
                <option value="" disabled>
                  Month
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
              </select>
              <select
                className="form-control"
                name="expiryYear"
                value={formData.expiryYear}
                onChange={handleInputChange}
                required>
                <option value="" disabled>
                  Year
                </option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            style={{
              position: "relative",
              top: "20px",
              background: "yellow",
              color: "black",
              border: "none",
              fontSize: "15px",
            }}
            type="submit"
            className="btn btn-primary">
            {submitBtnTxt}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
