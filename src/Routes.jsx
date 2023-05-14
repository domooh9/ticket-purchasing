import React from "react";
import { Route, Routes } from "react-router-dom";
import Events from "./components/Events";
import BillingForm from "./store/billing/billingform";
import TicketList from "./store/billing/quantinty";

function Routs() {
  return (
    <div className="event">
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/billing" element={<BillingForm />} />
        <Route path="/ticket" element={<TicketList />} />
      </Routes>
    </div>
  );
}

export default Routs;
