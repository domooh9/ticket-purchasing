import React from "react";
import Art from "./Art";

function Artickets() {
  const arts = [
    {
      title: "Art 1 Tickets",
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
      title: "Art 2 Tickets",
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
      title: "Art 3 Tickets",
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
      {arts.map((art, index) => (
        <div key={index}>
          <h2>{art.title}</h2>
          <Art art={art.tickets} />
        </div>
      ))}
    </div>
  );
}

export default Artickets;
