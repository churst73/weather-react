import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div>
      <div className="col-2 pb-2 pt-3">
        <p className="forecast-day">
          Mon <br />
          <img
            className="weather"
            src="./images/clear.png"
            alt="clear"
            width="80px"
          ></img>
          <br />
          <div className="high-temp pt-2" id="max">
            8°
          </div>
          <div className="low-temp" id="min">
            2°
          </div>
        </p>
      </div>
    </div>
  );
}
