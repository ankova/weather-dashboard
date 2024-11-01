import React from 'react';
import './WeatherDisplay.css';

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
      <p className="weather-info">Temperature: {weatherData.main.temp}°C</p>
      <p className="weather-info">Humidity: {weatherData.main.humidity}%</p>
      <p className="weather-info">Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
