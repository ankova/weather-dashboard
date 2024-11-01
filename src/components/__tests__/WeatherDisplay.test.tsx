import { render, screen } from '@testing-library/react';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';

const mockData = {
    name: 'London',
    main: { temp: 15, humidity: 80 },
    wind: { speed: 5 },
    weather: [{ icon: '10d', description: 'light rain' }],
};

test('renders WeatherDisplay with weather data', () => {
    render(<WeatherDisplay weatherData={mockData} />);

    expect(screen.getByText(/London/i)).toBeInTheDocument();
    expect(screen.getByText(/Temperature: 15 °C/i)).toBeInTheDocument();
    expect(screen.getByText(/Humidity: 80 %/i)).toBeInTheDocument();
    expect(screen.getByText(/Wind Speed: 5 m\/s/i)).toBeInTheDocument();
});

test('renders weather information correctly', () => {
    const weatherData = {
      name: 'London',
      main: { temp: 15, humidity: 80 },
      wind: { speed: 5 },
      weather: [{ icon: '04d', description: 'cloudy' }],
    };
    render(<WeatherDisplay weatherData={weatherData} />);
    const cityName = screen.getByText(/London/i);
    const temperature = screen.getByText((content, element) =>
      element?.textContent === 'Temperature: 15°C'
    );
    const humidity = screen.getByText(/Humidity: 80%/i);
    const windSpeed = screen.getByText(/Wind Speed: 5 m\/s/i);
    expect(cityName).toBeInTheDocument();
    expect(temperature).toBeInTheDocument();
    expect(humidity).toBeInTheDocument();
    expect(windSpeed).toBeInTheDocument();
  });
  