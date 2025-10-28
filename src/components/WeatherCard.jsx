
import { getWeatherDescription, getWeatherIcon } from "../utils/WeatherUtils.jsx";

function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="mt-6 bg-gradient-to-br from-blue-50 to-sky-100 p-6 rounded-3xl shadow-lg flex flex-col items-center text-center">
      {getWeatherIcon(weather.code)}
      <h2 className="text-2xl font-semibold text-gray-800 mt-3">
        {weather.city}
      </h2>
      <p className="text-sm text-gray-500">
        {weather.state ? `${weather.state}, ` : ""}
        {weather.country}
      </p>
      <p className="text-5xl font-bold text-blue-600 mt-2">
        {weather.temperature}°C
      </p>
      <p className="text-gray-600 mt-1">
        {getWeatherDescription(weather.code)}
      </p>
    </div>
  );
}

export default WeatherCard;
