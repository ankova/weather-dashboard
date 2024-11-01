import React from 'react';
import './WeatherIcon.css';

interface WeatherIconProps {
  icon: string;
  description: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ icon, description }) => {
  return (
    <div className="weather-icon">
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`} // URL to fetch the weather icon
        alt={description} // Set alt text to provide accessibility
        className="icon-image"
      />
    </div>
  );
};

export default WeatherIcon;