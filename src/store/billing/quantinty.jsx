import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import Payment from "./prices";

function TicketList() {
  const tickets = [
    { type: "VVIP", price: 300 },
    { type: "VIP", price: 250 },
    { type: "Regular", price: 180 },
    { type: "Economy", price: 100 },
  ];

  const [quantities, setQuantities] = useState({});
  const [selectedTicketType, setSelectedTicketType] = useState("");

  const handleQuantityChange = (type, e) => {
    const value = parseInt(e.target.value);
    setQuantities((prevState) => ({ ...prevState, [type]: value }));
    setSelectedTicketType(type);
  };

  const handlePaymentPrompt = (type) => {
    setSelectedTicketType(type);
  };

  return (
    <div>
      <h4>Ticket List</h4>
      <Card>
        <ListGroup variant="flush">
          {tickets.map((ticket, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center">
              <div>
                <h5>{ticket.type}</h5>
                <p>Price: ${ticket.price}</p>
              </div>

              <div>
                <label htmlFor={`quantity-${index}`}>Quantity:</label>
                <input
                  id={`quantity-${index}`}
                  type="number"
                  min="1"
                  value={quantities[ticket.type] || 1}
                  onChange={(e) => handleQuantityChange(ticket.type, e)}
                />
                <button
                  className="btn btn-primary mt-4"
                  onClick={() => handlePaymentPrompt(ticket.type)}
                  disabled={!quantities[ticket.type]}>
                  Book
                </button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>

      {selectedTicketType && (
        <Payment
          key={selectedTicketType}
          ticketType={selectedTicketType}
          quantity={quantities[selectedTicketType]}
          price={
            tickets.find((ticket) => ticket.type === selectedTicketType).price
          }
        />
      )}
    </div>
  );
}

export default TicketList;
