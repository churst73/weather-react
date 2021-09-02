import React from "react";

export default function WeatherForecastDay(props) {
  let icon = `./images/${props.data.weather[0].main}.png`;

  function max() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }

  function min() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <p className="forecast-day">
        {day()}
        <br />
        <img className="weather" src={icon} alt="clear" width="80px"></img>
        <br />
        <div className="high-temp pt-2" id="max">
          {max()}
        </div>
        <div className="low-temp" id="min">
          {min()}
        </div>
      </p>
    </div>
  );
}
