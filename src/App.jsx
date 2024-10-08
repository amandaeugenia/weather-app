import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = '565bfae80ca5d1e6f1f566c9d0de80d3';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        });
      setLocation("");
    }
  };

  return (
    <div className='w-full h-full relative flex flex-col items-center'>
      <div className='my-4'>
        <h2 className="text-lg font-semibold text-white">Weather App</h2>
        <p className="text-sm text-white">Enter a city name to get the current weather and hourly forecast.</p>
      </div>
      
      <div className='text-center p-4'>
        <div className="relative">
          <input 
            type="text" 
            className='py-3 px-6 w-[600px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white shadow-md'
            placeholder='Enter location'
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDownCapture={searchLocation}
          />
          <img 
            src={`https://img.icons8.com/?size=100&id=132&format=png&color=000000`} 
            alt="search icon" 
            className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6"
          />
        </div>
      </div>

      {/* Responsividade ajustada */}
      <div className="flex flex-col lg:flex-row justify-center w-full max-w-4xl p-4 space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Componente Weather */}
        <div className="flex-1">
          <Weather weatherData={data} />
        </div>
        {data.coord && (
          <div className="flex-1">
            <Forecast latitude={data.coord.lat} longitude={data.coord.lon} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
