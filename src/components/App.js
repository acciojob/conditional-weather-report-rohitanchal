// App.js
import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";
import "./styles/App.css";

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      {/* Do not remove the main div */}
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default App;

// WeatherDisplay.js
import React from "react";

const WeatherDisplay = ({ weather }) => {
  const temperatureColor = weather.temperature > 20 ? "red" : "blue";

  return (
    <div>
      <p>Temperature: {weather.temperature}</p>
      <span style={{ color: temperatureColor }}>●</span>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;

// styles/App.css
div {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}

p {
  font-size: 18px;
  margin: 5px 0;
}
