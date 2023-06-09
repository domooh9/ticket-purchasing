import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Events from "./components/Events";
import TicketList from "./store/billing/quantinty";
import { ticket } from "./store/tickets";
import Payment from "./store/billing/prices";
import Billingform from "./store/billing/billingform";

const tick = ticket;

function Routs() {
  const [selectedTicketType, setSelectedTicketType] = useState("");
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (type, e) => {
    const value = parseInt(e.target.value);
    setQuantities((prevState) => ({ ...prevState, [type]: value }));
    setSelectedTicketType(type);
  };

  const handlePaymentPrompt = (type) => {
    setSelectedTicketType(type);
  };

  if (!quantities[selectedTicketType]) {
    setQuantities((prevState) => ({ ...prevState, [selectedTicketType]: 1 }));
  }

  return (
    <div className="event">
      <Routes>
        <Route path="/" element={<Events />} />
        <Route
          path="/ticket"
          element={
            <TicketList
              handlePaymentPrompt={handlePaymentPrompt}
              handleQuantityChange={handleQuantityChange}
              tickets={tick}
              quantities={quantities}
            />
          }
        />
        <Route
          path="/payment"
          element={
            selectedTicketType && (
              <Payment
                key={selectedTicketType}
                ticketType={selectedTicketType}
                quantity={quantities[selectedTicketType]}
                price={
                  tick.find((ticket) => ticket.type === selectedTicketType)
                    ?.price
                }
              />
            )
          }
        />
        <Route
          path="/bill"
          element={
            selectedTicketType && (
              <Billingform
                quantity={quantities[selectedTicketType]}
                price={
                  tick.find((ticket) => ticket.type === selectedTicketType)
                    ?.price
                }
                ticketType={selectedTicketType}
              />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default Routs;
