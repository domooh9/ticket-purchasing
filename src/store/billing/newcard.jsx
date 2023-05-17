import React, { useState, useEffect } from "react";

const Newcard = (props) => {
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardHolderName, setCreditCardHolderName] = useState("");
  const [creditCardExpMonth, setCreditCardExpMonth] = useState("");
  const [creditCardExpYear, setCreditCardExpYear] = useState("");
  const [creditCardCvv, setCreditCardCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const [creditCardYearRangeArr, setCreditCardYearRangeArr] = useState([]);
  const [shouldFlipCreditCardOnCvv, setShouldFlipCreditCardOnCvv] =
    useState(false);

  useEffect(() => {
    getExpYearRange();
  }, []);

  const handleSubmit = (eventOfSubmission) => {
    eventOfSubmission.stopPropagation();
    eventOfSubmission.preventDefault();

    let creditCardData = {
      cardName,
      creditCardNumber,
      creditCardHolderName,
      creditCardExpMonth,
      creditCardExpYear,
      creditCardCvv,
    };

    if (props.onSubmit) {
      props.onSubmit(eventOfSubmission, creditCardData);
    }
  };

  const getExpYearRange = () => {
    let currentYear = new Date().getUTCFullYear();
    let yearRangeArr = [currentYear];

    for (let i = 1; i <= 10; i++) {
      yearRangeArr[i] = currentYear + i;
    }

    setCreditCardYearRangeArr(yearRangeArr);
  };

  const cardNameOnChange = (eventCreditCardNumberChangeEvent) => {
    let cardName = eventCreditCardNumberChangeEvent.target.value || "";
    setCardName(cardName);
  };

  const cardNumberOnChange = (eventCreditCardNumberChangeEvent) => {
    let creditCardNumber = eventCreditCardNumberChangeEvent.target.value || "";
    setCreditCardNumber(creditCardNumber);
  };

  const cardHolderNameOnChange = (eventCreditCardHolderNameChangeEvent) => {
    let creditCardHolderName =
      eventCreditCardHolderNameChangeEvent.target.value || "";
    setCreditCardHolderName(creditCardHolderName);
  };

  const monthOnChange = (eventCreditCardMonthChangeEvent) => {
    let creditCardExpMonth = eventCreditCardMonthChangeEvent.target.value || "";
    setCreditCardExpMonth(creditCardExpMonth);
  };

  const yearOnChange = (eventCreditCardYearChangeEvent) => {
    let creditCardExpYear = eventCreditCardYearChangeEvent.target.value || "";
    setCreditCardExpYear(creditCardExpYear);
  };

  const cvvOnChange = (eventCreditCardCvvChangeEvent) => {
    let creditCardCvv = eventCreditCardCvvChangeEvent.target.value || "";
    setCreditCardCvv(creditCardCvv);
    setShouldFlipCreditCardOnCvv(true);
  };

  const cvvOnBlur = (eventCreditCardCvvBlurEvent) => {
    setShouldFlipCreditCardOnCvv(false);
  };

  return (
    <div id="fom" className="checkout react-fancy-visa-card">
      <div id="fomm">
        <form
          className="form"
          autoComplete="off"
          noValidate
          onSubmitCapture={handleSubmit}>
          <fieldset>
            <label htmlFor="card-number">Card Name</label>
            <input
              onChange={cardNameOnChange}
              type="text"
              placeholder="eg mastercard"
              id="card-number"
              className="input-cart-number"
              maxLength="16"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="card-number">Card Number</label>
            <input
              onChange={cardNumberOnChange}
              type="text"
              id="card-number"
              className="input-cart-number"
              maxLength="16"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="card-holder">Card holder's name</label>
            <input
              onChange={cardHolderNameOnChange}
              type="text"
              id="card-holder"
            />
          </fieldset>
          <fieldset className="fieldset-expiration">
            <label className="expiration" htmlFor="card-expiration-month">
              Expiration Month / Year
            </label>
            <div className="select">
              <select onChange={monthOnChange} id="card-expiration-month">
                <option></option>
                {[...Array(12).keys()].map((month) => (
                  <option key={month + 1}>
                    {String(month + 1).padStart(2, "0")}
                  </option>
                ))}
              </select>
            </div>
            <div className="select">
              <select onChange={yearOnChange} id="card-expiration-year">
                <option key={0}></option>
                {creditCardYearRangeArr.map((year, index) => (
                  <option key={index}>{year}</option>
                ))}
              </select>
            </div>
          </fieldset>
          <fieldset className="fieldset-ccv">
            <label htmlFor="card-ccv">CCV</label>
            <input
              onChange={cvvOnChange}
              onBlur={cvvOnBlur}
              type="text"
              id="card-ccv"
              maxLength="3"
            />
          </fieldset>
          <button
            className="btn"
            style={{
              background: props.submitBtnColor,
              color: props.submitColor,
            }}>
            <i className="fa fa-lock"></i>
            {props.submitBtnTxt !== "" ? props.submitBtnTxt : "Pay now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newcard;
