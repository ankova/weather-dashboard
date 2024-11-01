# Weather Dashboard App

## Description

The Weather Dashboard App is a React application that allows users to search for and view the current weather conditions of any city.

## Features

- Search for a city to view the weather conditions.
- Display temperature, humidity, wind speed, and weather icon.
- Handle errors gracefully (e.g., city not found).
- Responsive and user-friendly interface.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd weather-dashboard
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) and replace `YOUR_OPENWEATHERMAP_API_KEY` in `src/components/WeatherDashboard.tsx`.

5. Start the app:
   ```
   npm start
      ```

## Running Tests

To run the unit tests using Jest:

```bash
npm test
```

## Dependencies

- React
- Jest (for unit testing)
- OpenWeatherMap API

## License

This project is licensed under the MIT License.