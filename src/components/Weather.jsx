const Weather = ({ weatherData }) => {
  return (
    <div>
      {weatherData.weather ? (
        <div className="w-[500px] h-[500px] bg-white shadow-lg rounded-xl m-auto relative px-6 top-[10%] flex flex-col items-center">
          <div className="my-4 text-center">
            <p className="text-2xl font-bold flex items-center justify-center">
              {weatherData.name}, {weatherData.sys.country}
              <img
                src={`https://flagsapi.com/${weatherData.sys.country}/flat/32.png`}
                alt={`${weatherData.sys.country}`}
                className="ml-2"
              />
            </p>
            <p className="text-sm">
              {weatherData.weather[0].description}
            </p>
          </div>
          <div className="my-4">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              className="mx-auto"
            />
            <h1 className="text-6xl font-semibold text-center">
              {weatherData.main.temp.toFixed()} °C
            </h1>
          </div>

          {weatherData.name !== undefined ? (
            <div className="flex flex-col items-center justify-evenly gap-y-4 my-4 mx-auto text-xs w-full">
              <div className="flex justify-between w-full px-6">
                <p className="flex-1 text-center">Feels like</p>
                <p className="font-bold flex-1 text-center">
                  {weatherData.main.feels_like.toFixed()} °C
                </p>
              </div>

              <div className="flex justify-between w-full px-6">
                <p className="flex-1 text-center">Humidity</p>
                <p className="font-bold flex-1 text-center">
                  {weatherData.main.humidity} %
                </p>
              </div>

              <div className="flex justify-between w-full px-6">
                <p className="flex-1 text-center">Wind Speed</p>
                <p className="font-bold flex-1 text-center">
                  {weatherData.wind.speed} KPH
                </p>
              </div>

              <div className="flex justify-between w-full px-6">
                <p className="flex-1 text-center">Pressure</p>
                <p className="font-bold flex-1 text-center">
                  {weatherData.main.pressure} hPa
                </p>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
