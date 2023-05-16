import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function TicketList({
  tickets,
  quantities,
  handleQuantityChange,
  handlePaymentPrompt,
}) {
  return (
    <div className="div">
      <h4 id="dd" style={{ color: "white" }}>
        Ticket List
      </h4>
      <Card id="dd">
        <ListGroup variant="flush">
          {tickets.map((ticket, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center">
              <div>
                <h5>{ticket.type}</h5>
                <p className="ticket-price">Price: ${ticket.price}</p>
              </div>

              <div>
                <div id="br">
                  <label htmlFor={`quantity-${index}`}>Quantity:</label>
                  <input
                    className="quantity-input"
                    id={`quantity-${index}`}
                    type="number"
                    min="1"
                    value={quantities[ticket.type] || 1}
                    onChange={(e) => handleQuantityChange(ticket.type, e)}
                  />
                </div>
                <Link
                  style={{ position: "relative", left: "50px" }}
                  id="bt"
                  className="btn mt-4"
                  to="/payment"
                  onClick={() => handlePaymentPrompt(ticket.type)}
                  disabled={!quantities[ticket.type]}>
                  Book
                </Link>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}

export default TicketList;
