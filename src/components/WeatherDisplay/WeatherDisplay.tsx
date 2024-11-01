import React from 'react';
import './WeatherDisplay.css';
import { WeatherIcon } from '..';

interface WeatherDisplayProps {
  weatherData: WeatherData | null;
}

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  return (
<div className="weather-display">
      <h2 className="city-name">{weatherData.name}</h2>
      <WeatherIcon icon={weatherData.weather[0].icon} description={weatherData.weather[0].description} />
      <p className="weather-info">
        Temperature: <span>{weatherData.main.temp}</span>°C
      </p>
      <p className="weather-info">
        Humidity: <span>{weatherData.main.humidity}</span>%
      </p>
      <p className="weather-info">
        Wind Speed: <span>{weatherData.wind.speed}</span> m/s
      </p>
    </div>
  );
};

export default WeatherDisplay;
