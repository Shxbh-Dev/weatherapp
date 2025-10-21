import React from "react";

function WeatherDisplay({ weather }) {
  let weatherIconScr = "";
  const weatherCondition = weather.weather[0].main.toLowerCase();

  if (weatherCondition.includes("clouds")) {
    weatherIconScr = "/clouds.png";
  } else if (weatherCondition.includes("clear")) {
    weatherIconScr = "/clear.png";
  } else if (weatherCondition.includes("rain")) {
    weatherIconScr = "/rain.png";
  } else if (weatherCondition.includes("mist")) {
    weatherIconScr = "/mist.png";
  } else if (weatherCondition.includes("snow")) {
    weatherIconScr = "/snow.png";
  } else if (weatherCondition.includes("drizzle")) {
    weatherIconScr = "/drizzle.png";
  } else {
    weatherIconScr = "/default.png";
  }

  const weatherCal = (weather.main.temp - 273.15).toFixed(1);

  return (
    <div className="weather">
      <img
        src={weatherIconScr}
        className="weather-icon"
        alt={weather.description}
      />
      <h1 className="temp">Temperature : {weatherCal}°C</h1>
      <h2 className="city">{weather.name}</h2>
    </div>
  );
}

export default WeatherDisplay;
