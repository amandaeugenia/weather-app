import axios from 'axios';
import { useState, useEffect } from 'react';

const Forecast = ({ latitude, longitude }) => {
  const [hourlyData, setHourlyData] = useState([]);
  const API_KEY = '565bfae80ca5d1e6f1f566c9d0de80d3';

  useEffect(() => {
    const fetchHourlyForecast = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );

        const hourlyForecast = response.data.list;
        setHourlyData(hourlyForecast);
      } catch (error) {
        console.error('Error finding data:', error.response ? error.response.data : error.message);
      }
    };

    if (latitude && longitude) {
      fetchHourlyForecast();
    }
  }, [latitude, longitude]);

  return (
    <div className="container w-full p-4 bg-white shadow-lg rounded-lg h-[500px] min-h-[350px] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Next Hours</h2>
      <div className="space-y-4">
        {hourlyData.slice(0, 5).map((forecast, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center bg-gray-300 p-3 rounded-lg">
            <p className="text-lg w-full sm:w-20 text-center">
              {new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
            <p className="text-sm flex-1 text-center">{forecast.weather[0].description}</p>
            <p className="font-semibold w-24 text-center">{forecast.main.temp.toFixed()} °C</p>
            <div className="flex-shrink-0">
              <img
                src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                className="w-10 h-10"
                alt="Weather icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
