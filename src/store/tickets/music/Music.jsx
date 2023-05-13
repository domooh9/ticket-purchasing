import React from "react";
import { Card, Button } from "react-bootstrap";

function Music({ music }) {
  return (
    <div>
      {music.map((ticket, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Title>Date: {ticket.date}</Card.Title>
            <Card.Text>
              Time: {ticket.time}
              <br />
              <div className="text-center">
                <span id="font" className="font-weight-normal">
                  {ticket.venue}
                </span>
              </div>
            </Card.Text>
            <div className="d-flex justify-content-end">
              <Button variant="primary" id="bt">
                See Tickets
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Music;
