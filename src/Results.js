import React, { useState } from "react";
import axios from "axios";
import "./Results.css";

export default function Results(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: "Mon Aug 2 11:30",
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: "./images/smileysun.png",
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
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
            <div className="col-7">
              <img
                src={weatherData.icon}
                alt="Sunny"
                width="160px"
                className="sun ms-3 me-2"
              ></img>
              <span className="current-temp">
                {Math.round(weatherData.temperature)}
              </span>
              <img
                src="./images/degreec.png"
                className="degree"
                alt="degree"
                width="40px"
              ></img>
            </div>
            <div className="col-5">
              <div className="time-date">{weatherData.date}</div>
              <div className="prepare">{weatherData.description}</div>
              <div className="details-humid">
                humidity:{weatherData.humidity}%
              </div>
              <div className="details-wind">
                wind: {Math.round(weatherData.wind)} km/hr
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "90cc04858e590b27514e091504dac169";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
