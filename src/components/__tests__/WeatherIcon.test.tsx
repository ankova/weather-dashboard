import { render, screen } from '@testing-library/react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

test('renders weather icon correctly', () => {
    render(<WeatherIcon icon="04d" description="cloudy" />);
    const iconImage = screen.getByAltText(/cloudy/i);
    expect(iconImage).toBeInTheDocument();
    expect(iconImage).toHaveAttribute('src', 'http://openweathermap.org/img/wn/04d.png');
  });