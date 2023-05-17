import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";

function Billingform({ quantity, price, ticketType }) {
  const totalAmount = quantity ? quantity * price : 0;
  const generateTicket = () => {
    const input = document.getElementById("ticket");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("event_ticket.pdf");
    });
  };

  return (
    <div id="billl" className="card">
      <div className="card-body">
        <div id="ticket">
          <h2>Event Ticket</h2>
          <p>
            <b>Total Amount Paid:</b>
            <a
              style={{
                position: "relative",
                left: " 190px",
                fontWeight: "normal",
              }}>
              ${totalAmount}
            </a>
          </p>
          <p>
            <b>Ticket type: </b>
            <a
              style={{
                position: "relative",
                left: " 230px",
                fontWeight: "normal",
              }}>
              {ticketType}
            </a>
          </p>
          <p>
            <b>Number of Tickets:</b>{" "}
            <a
              style={{
                position: "relative",
                left: " 200px",
                fontWeight: "normal",
              }}>
              {quantity}
            </a>
          </p>
          <p></p>
        </div>
        <button id="bt" className="btn btn-primary" onClick={generateTicket}>
          Download Ticket
        </button>
      </div>
    </div>
  );
}

export default Billingform;
