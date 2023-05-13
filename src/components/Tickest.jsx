import React from "react";
import { Table } from 'react-bootstrap';

function Tickets() {
  const comedy1 = [
    {
      date: "2023-05-14",
      time: "7:00 PM",
      venue: "The O2 Arena",
    },
    {
      date: "2023-05-15",
      time: "8:00 PM",
      venue: "The Apollo Theater",
    },
    {
      date: "2023-05-17",
      time: "10:00 AM",
      venue: "The Museum of Modern Art",
    },
  ];

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Venue</th>
          <th>Tickets</th>
        </tr>
      </thead>
      <tbody>
        {comedy1.map((ticket, index) => (
          <tr key={index}>
            <td>{ticket.date}</td>
            <td>{ticket.time}</td>
            <td>{ticket.venue}</td>
            <td>
              <button className="btn btn-primary">See Tickets</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Tickets;