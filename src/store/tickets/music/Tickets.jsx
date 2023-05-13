import React from "react";
import Music from "./Music";

function Musictickets() {
  const music = [
    {
      title: "Music 1 Tickets",
      tickets: [
        {
          date: "2023-07-14",
          time: "7:00 PM",
          venue: "The mega Arena Kasarani",
        },
        {
          date: "2023-05-15",
          time: "8:00 PM",
          venue: "The Apollo Theater",
        },
        {
          date: "2023-05-17",
          time: "10:00 AM",
          venue: "Modern club east coast",
        },
      ],
    },
    {
      title: "Music 2 Tickets",
      tickets: [
        {
          date: "2023-08-14",
          time: "7:00 PM",
          venue: "The O2 Arena",
        },
        {
          date: "2023-08-15",
          time: "8:00 PM",
          venue: "Kogony 003 music arena",
        },
        {
          date: "2023-08-17",
          time: "10:00 AM",
          venue: "West con resort",
        },
      ],
    },
    {
      title: "Music 3 Tickets",
      tickets: [
        {
          date: "2023-06-18",
          time: "7:00 PM",
          venue: "Kisumu west park",
        },
        {
          date: "2023-06-15",
          time: "8:00 PM",
          venue: "Modern Northen location arena",
        },
        {
          date: "2023-06-17",
          time: "10:00 AM",
          venue: "Mamboleo mega colosium",
        },
      ],
    },
  ];

  return (
    <div>
      {music.map((musics, index) => (
        <div key={index}>
          <h2>{music.title}</h2>
          <Music music={musics.tickets} />
        </div>
      ))}
    </div>
  );
}

export default Musictickets;
