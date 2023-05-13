import React from "react";
import Comedy from "./Comedy";

function Comedytickets() {
  const comedies = [
    {
      title: "Music 1 Tickets",
      tickets: [
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
      ],
    },
    {
      title: "Music 2 Tickets",
      tickets: [
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
      ],
    },
    {
      title: "Music 3 Tickets",
      tickets: [
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
      ],
    },
  ];

  return (
    <div>
      {comedies.map((comedy, index) => (
        <div key={index}>
          <h2>{comedies.title}</h2>
          <Comedy comedy={comedy.tickets} />
        </div>
      ))}
    </div>
  );
}

export default Comedytickets;
