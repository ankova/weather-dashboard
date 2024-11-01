import React, { useState } from 'react';
import { SearchBar, WeatherDisplay, WeatherIcon, ErrorMessage } from '..';
import './WeatherDashboard.css';

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

const WeatherDashboard: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Function to handle the search operation
  const handleSearch = async (city: string) => {
    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY; // Get API key from environment variables
    if (!apiKey) {
      setError('API key not found'); // Set error if API key is missing
      return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Construct API URL

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('City not found'); // Throw an error if city is not found
      }
      const data: WeatherData = await response.json(); // Parse the response JSON
      setWeatherData(data); // Set weather data state
      setError(null); // Clear any previous error
    } catch (err: any) {
      setError(err.message); // Set error message in case of failure
      setWeatherData(null); // Clear weather data if the request fails
    }
  };


  return (
    <div className="weather-dashboard">
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />} {/* Display error message if there's an error */}
      {weatherData && (
        <div className="weather-container">
          <WeatherDisplay weatherData={weatherData} />
          <WeatherIcon
            icon={weatherData.weather[0].icon}
            description={weatherData.weather[0].description}
          />
        </div>
      )} {/* Display weather data if available */}
    </div>
  );
};

export default WeatherDashboard;