import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Special.css';

const API_KEY = 'ccd49a672e5b303c1963d5d4d53b3c69'; // Replace with your OpenWeatherMap API key
const CITY = 'Jubilee Hills'; // Replace with the desired city name

const Special: React.FC = () => {
  const [weather, setWeather] = useState<string | null>(null);
  const [temperature, setTemperature] = useState<number | null>(null);
  const [foodRecommendation, setFoodRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
        );
        console.log('API Response:', response);
        const temp = response.data.main.temp;
        const weatherCondition = response.data.weather[0].main;

        setTemperature(temp);
        setWeather(weatherCondition);
        recommendFood(weatherCondition);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error fetching weather data:', error.message);
          setError(error.message);
        } else {
          console.error('Error fetching weather data:', error);
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };
    
    fetchWeatherData();
  }, []);

  const recommendFood = (weatherCondition: string) => {
    if (weatherCondition.toLowerCase().includes('clear')) {
      setFoodRecommendation('It\'s sunny! How about going to a cafe and enjoying a cool milkshake?');
    } else if (weatherCondition.toLowerCase().includes('clouds')) {
      setFoodRecommendation('It\'s cloudy! Warm up with some comforting soups and hot beverages.');
    } else if (weatherCondition.toLowerCase().includes('rain')) {
      setFoodRecommendation('It\'s rainy! Enjoy some comfort foods, snacks, and hot drinks.');
    } else if (weatherCondition.toLowerCase().includes('snow') || temperature! < 10) {
      setFoodRecommendation('It\'s cold! Warm up with soups, stews, and spicy dishes.');
    } else if (temperature! > 30) {
      setFoodRecommendation('It\'s hot! Stay cool with salads, cold beverages, and ice creams.');
    } else {
      setFoodRecommendation('Enjoy some grilled items, seafood, or outdoor-friendly dishes.');
    }
  };

  if (loading) {
    return (
      <div className="special-container">
        <h2>Special Weather Update</h2>
        <p>Loading weather data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="special-container">
        <h2>Special Weather Update</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="special-container">
      <h2>Special Weather Update</h2>
      {weather && temperature !== null ? (
        <div className="weather-info">
          <p>Current Weather: {weather}</p>
          <p>Temperature: {temperature}°C</p>
          <p>Recommendation: {foodRecommendation}</p>
        </div>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
};

export default Special;
