import React from "react";
import "./Results.css";

export default function Results() {
  let weatherData = {
    city: "London",
    date: "Mon Aug 2 11:30",
    temp: 17,
    description: "Sunny",
    humidity: 20,
    wind: 4,
    imgUrl: "smileysun-01.png",
  };
  return (
    <div className="Results">
      <div className="hello-there">
        <h3>
          Hello there, {weatherData.city}
          <span className="current-city"></span>!
        </h3>
      </div>
      <div>
        <div className="row">
          <div className="col-6">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              width="160px"
              className="sun ms-3 me-2"
            ></img>
            <span className="current-temp">{weatherData.temp}</span>
            <img
              src="degreec.png"
              className="degree"
              alt="degree"
              width="40px"
            ></img>
          </div>
          <div className="col-6">
            <div className="time-date">{weatherData.date}</div>
            <div className="prepare">{weatherData.description}</div>
            <div className="details-humid">
              humidity: {weatherData.humidity}%
            </div>
            <div className="details-wind">wind: {weatherData.wind} km/hr</div>
          </div>
        </div>
      </div>
    </div>
  );
}
