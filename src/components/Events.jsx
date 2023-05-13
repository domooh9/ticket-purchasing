import React from "react";
import { Link } from "react-router-dom";
import { music, art, comedy } from "../store/EventsData";

function Events() {
  return (
    <div className="container p-4">
      <div className="cont">
        <h4>music</h4>
        <div
          id="row"
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {music.map((e) => (
            <div key={e.id} className="col">
              <div className="card">
                <img src={e.image} className="card-img-top" alt={e.name} />
                <div className="card-body">
                  <h5 className="card-title text-xl font-bold mb-2">
                    {e.name}
                  </h5>
                  <p className="card-text text-gray-600">{e.description}</p>
                  <Link
                    to={e.ticketsPage}
                    className="btn btn-primary mt-4"
                    id="bt">
                    {e.describe}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h4>Art</h4>
        <div
          id="row"
          className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {art.map((e) => (
            <div key={e.id} className="col">
              <div className="card">
                <img src={e.image} className="card-img-top" alt={e.name} />
                <div className="card-body">
                  <h5 className="card-title text-xl font-bold mb-2">
                    {e.name}
                  </h5>
                  <p className="card-text text-gray-600">{e.description}</p>
                  <Link
                    to={e.ticketsPage}
                    className="btn btn-primary mt-4"
                    id="bt">
                    {e.describe}
                  </Link>
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
                  <h5 className="card-title text-xl font-bold mb-2">
                    {e.name}
                  </h5>
                  <p className="card-text text-gray-600">{e.description}</p>

                  <Link
                    to={e.ticketsPage}
                    className="btn btn-primary mt-4"
                    id="bt">
                    {e.describe}
                  </Link>
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
