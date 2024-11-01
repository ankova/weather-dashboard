import React from 'react';
import './App.css';
import {WeatherDashboard} from './components';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="app-title">Weather Dashboard</h1>
      <WeatherDashboard />
    </div>
  );
};

export default App;