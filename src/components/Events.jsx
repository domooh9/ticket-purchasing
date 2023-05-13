import React from "react";
import events from "../store/Music";
import art from "../store/Art";
import comedy from "../store/comedy";

function Events() {
  return (
    <div className="container p-4">
      {/* <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1> */}
      <div className="cont">
        <h2>Upcoming events</h2>
      <h4>music</h4>
      <div id="row" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {events.map((e) => (
          <div key={e.id} className="col">
            <div className="card">
            <img src={e.image} className="card-img-top" alt={e.name} />
              <div className="card-body">
                <h5 className="card-title text-xl font-bold mb-2">{e.name}</h5>
                <p className="card-text text-gray-600">{e.description}</p>
                <button
                  className="btn btn-primary mt-4"
                >
                  view upcoming events in Texas
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4>Art</h4>
      <div id="row" className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {art.map((e) => (
          <div key={e.id} className="col">
            <div className="card">
            <img src={e.image} className="card-img-top" alt={e.name} />
             <div className="card-body">
                <h5 className="card-title text-xl font-bold mb-2">{e.name}</h5>
                <p className="card-text text-gray-600">{e.description}</p>
                <button
                  className="btn btn-primary mt-4"
                >
                 5 events
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4>comedy</h4>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {comedy.map((e) => (
          <div key={e.id} className="col">
            <div className="card">
            <img src={e.image} className="card-img-top" alt={e.name} />
              <div className="card-body">
                <h5 className="card-title text-xl font-bold mb-2">{e.name}</h5>
                <p className="card-text text-gray-600">{e.description}</p>
                <button
                  
                  className="btn btn-primary mt-4"
                >
                  {e.describe}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
);
}

export default Events;
