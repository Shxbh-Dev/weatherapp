import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import Footer from './components/Footer';

function App() {

  const API_URL = "https://api.openweathermap.org/data/2.5/weather?&q=";
  const API_Key = "ad0db6e492ec30d728dac7315053cb88";

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const checkWeather = async (city) => {
    setError('');
    try {
      const response = await fetch(`${API_URL}${city}&appid=${API_Key}`);
      if(!response.ok){
        if(response.status === 404){
          setError('City not found. Please try again')
        }else{
          setError('Something went wrong. please try again later')
        }

        setWeatherData(null);
        return;
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      console.log(err)
      console.error('Fetch Error',err);
      setError('Failed to fetch weather data, Check your internet connection! try again later');
      setWeatherData(null);
    }
  };
  return (
    <div className="box">
      <Header />
      <SearchBar onSearch={checkWeather}/>
      {error && <p className='error-message' >{error}</p>}
      {weatherData && <WeatherDisplay weather={weatherData} />}
      <Footer /> 
    </div>
  );
}

export default App;
