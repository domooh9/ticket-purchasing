import React, { useState } from "react";
import { Card, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function TicketList() {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const tickets = [
    { type: "VVIP", price: 300 },
    { type: "VIP", price: 250 },
    { type: "Regular", price: 180 },
    { type: "Economy", price: 100 },
  ];
  const history = useNavigate();

  const handleBookClick = (ticket) => {
    setSelectedTicket(ticket);
    push('/billing');
  };

  return (
    <div>
      <h4>Ticket List</h4>
      <Card>
        <ListGroup variant="flush">
          {tickets.map((ticket, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              <div>
                <h5>{ticket.type}</h5>
                <p>Price: ${ticket.price}</p>
              </div>
              <Button variant="primary" onClick={() => handleBookClick(ticket)}>Book</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
}

export default TicketList;