import React from "react";

function WeatherDisplay({ weather }) {
  let weatherIconScr = "";
  const weatherCondition = weather.weather[0].main.toLowerCase();

  if (weatherCondition.includes("clouds")) {
    weatherIconScr = "/hero_weather2.png";
  } else if (weatherCondition.includes("clear")) {
    weatherIconScr = "/hero_weather2.png";
  } else if (weatherCondition.includes("rain")) {
    weatherIconScr = "/hero_weather2.png";
  } else if (weatherCondition.includes("mist")) {
    weatherIconScr = "/hero_weather2.png";
  } else if (weatherCondition.includes("snow")) {
    weatherIconScr = "/hero_weather2.png";
  } else if (weatherCondition.includes("drizzle")) {
    weatherIconScr = "/hero_weather2.png";
  } else {
    weatherIconScr = "/hero_weather2.png";
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
