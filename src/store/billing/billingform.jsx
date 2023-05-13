import React from "react";
import { Form, Button } from 'react-bootstrap';

function BillingForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and PayPal integration
  };

  return (
    <div>
      <h4>Billing Form</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" required />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter your city" required />
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control type="text" placeholder="Enter your postal code" required />
        </Form.Group>

        <Button variant="primary" type="submit">Pay with PayPal</Button>
      </Form>
    </div>
  );
}

export default BillingForm;