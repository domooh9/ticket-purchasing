import React from "react";
import { Route, Routes } from "react-router-dom";
import Events from "./components/Events";
import BillingForm from "./store/billing/billingform";
import TicketList from "./store/billing/quantinty";
import Artickets from "./store/tickets/art/Tickets";
import Musictickets from "./store/tickets/music/Tickets";
import Comedytickets from "./store/tickets/comedy/Comedytickets";

function Routs() {
  return (
    <div className="event">
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/billing" element={<BillingForm />} />
        <Route path="/ticket" element={<TicketList />} />
        <Route path="/tick" element={<Artickets />} />
        <Route path="/musictickets" element={<Musictickets />} />
        <Route path="/comedies" element={<Comedytickets />} />
      </Routes>
    </div>
  );
}

export default Routs;
