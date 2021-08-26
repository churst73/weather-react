import React from "react";
import "./Results.css";
import FormattedDate from "./FormattedDate.js";

export default function Results(props) {
  return (
    <div className="Results">
      <div className="hello-there">
        <h3>
          Hello there, <span className="current-city">{props.data.city}</span>!
        </h3>
      </div>
      <div>
        <div className="row">
          <div className="col-7">
            <img
              src={props.data.icon}
              alt="Sunny"
              width="160px"
              className="sun ms-3 me-2"
            ></img>
            <span className="current-temp">
              {Math.round(props.data.temperature)}
            </span>
            <img
              src="./images/degreec.png"
              className="degree"
              alt="degree"
              width="40px"
            ></img>
          </div>
          <div className="col-5">
            <div className="time-date">
              <FormattedDate date={props.data.date} />
            </div>
            <div className="prepare">{props.data.description}</div>
            <div className="details-humid">humidity:{props.data.humidity}%</div>
            <div className="details-wind">
              wind: {Math.round(props.data.wind)} km/hr
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
