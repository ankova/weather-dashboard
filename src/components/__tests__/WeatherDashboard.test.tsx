import { render, screen, fireEvent } from '@testing-library/react';
import WeatherDashboard from '../../components/WeatherDashboard/WeatherDashboard';

test('displays error message when API key is missing', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 401,
      })
    ) as jest.Mock;
  
    render(<WeatherDashboard />);
    const inputElement = screen.getByPlaceholderText('Enter city name');
    fireEvent.change(inputElement, { target: { value: 'London' } });
    const buttonElement = screen.getByText('Search');
    fireEvent.click(buttonElement);
    const errorMessage = await screen.findByText((content, element) => 
      element && content.includes('API key not found') && element.tagName.toLowerCase() === 'div' ? true : false
    );
    expect(errorMessage).toBeInTheDocument();
  });
  test('displays error message when city is not found', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as jest.Mock;
  
    render(<WeatherDashboard />);
    const inputElement = screen.getByPlaceholderText('Enter city name');
    fireEvent.change(inputElement, { target: { value: 'InvalidCity' } });
    const buttonElement = screen.getByText('Search');
    fireEvent.click(buttonElement);
    const errorMessage = await screen.findByText(/City not found/i);
    expect(errorMessage).toBeInTheDocument();
  });
  
  test('displays weather information when a valid city is searched', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            name: 'London',
            main: { temp: 15, humidity: 80 },
            wind: { speed: 5 },
            weather: [{ icon: '04d', description: 'cloudy' }],
          }),
      })
    ) as jest.Mock;
  
    render(<WeatherDashboard />);
    const inputElement = screen.getByPlaceholderText('Enter city name');
    fireEvent.change(inputElement, { target: { value: 'London' } });
    const buttonElement = screen.getByText('Search');
    fireEvent.click(buttonElement);
    const cityName = await screen.findByText(/London/i);
    expect(cityName).toBeInTheDocument();
    const temperature = await screen.findByText(/Temperature: 15°C/i);
    expect(temperature).toBeInTheDocument();
  });