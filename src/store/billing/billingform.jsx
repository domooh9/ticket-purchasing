// import React from "react";

// import { PaystackConsumer } from "react-paystack";

// const config = {
//   reference: new Date().getTime().toString(),
//   email: "user@example.com",
// amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
//   publicKey: "pk_test_eac1a77f9abb85371b714756626d9f4faad3fa74",
// };

// you can call this function anything
// const handleSuccess = (reference) => {
// Implementation for whatever you want to do with reference and after success call.
//   console.log(reference);
// };

// you can call this function anything
// const handleClose = () => {
// implementation for  whatever you want to do when the Paystack dialog closed.
//   console.log("closed");
// };
// function BillingForm() {
// const componentProps = {
//   ...config,
//   text: "Paystack Button Implementation",
//   onSuccess: (reference) => handleSuccess(reference),
//   onClose: handleClose,
// };
//   pay = (e, data) => {
//     console.log(data);

// };
//   return (
//     <div className="App">
// <header className="App-header">
{
  /* <img src={logo} className="App-logo" alt="logo" /> */
}
{
  /* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <PaystackConsumer {...componentProps}>
        {({ initializePayment }) => (
          <button onClick={() => initializePayment(handleSuccess, handleClose)}>
            Paystack Consumer Implementation
          </button>
        )}
      </PaystackConsumer>
    </div>
  );
}

export default BillingForm; */
}
