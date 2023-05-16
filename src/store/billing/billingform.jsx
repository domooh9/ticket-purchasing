import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";

function Billingform({ quantity, price }) {
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
          <p>Join us for an amazing event!</p>
          <p>Quantity: {quantity}</p>
          <p>Price: {price}</p>
          {/* Add more elements as needed */}
        </div>
        <button id="bt" className="btn btn-primary" onClick={generateTicket}>
          Download Ticket
        </button>
      </div>
    </div>
  );
}

export default Billingform;
