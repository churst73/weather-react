import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";
import WeatherForecast from "./WeatherForecast";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `./images/${response.data.weather[0].main}.png`,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "90cc04858e590b27514e091504dac169";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit} className="prompt">
          <input
            onChange={handleCity}
            type="text"
            placeholder="I wonder what the weather is in . . ."
          />
          <button type="submit" className="button-search">
            Search
          </button>
          <a href="https://www.google.com/">
            <i className="fas fa-map-marker-alt"></i>
          </a>
        </form>
        <Results data={weatherData} />
        <WeatherForecast coords={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
