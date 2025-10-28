import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SuggestionList from "./components/SuggestionLists";
import Loader from "./components/Loader";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔍 Search city using Open Meteo Geocoding API
  const searchCity = async (cityName) => {
    setQuery(cityName);
    setError("");
    setWeather(null);

    if (cityName.length < 3) {
      setResults([]);
      setError("⚠️ Please enter at least 3 characters");
      return;
    }

    try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
      );
      const data = await res.json();

      if (data.results) setResults(data.results);
      else setError("❌ No city found");
    } catch (err) {
      console.error(err);
      setError("Network error while fetching cities.");
    }
  };

  // ☁️ Fetch weather data for selected city
  const getWeather = async (city) => {
    setLoading(true);
    setWeather(null);
    setResults([]);
    setError("");
    setQuery(city.name); // don’t append state/country to search box

    try {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,weather_code`
      );
      const data = await res.json();

      setWeather({
        city: city.name,
        state: city.admin1 || "",
        country: city.country,
        temperature: data.current.temperature_2m,
        code: data.current.weather_code,
      });
    } catch (err) {
      console.error(err);
      setError("Error fetching weather data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-sky-200 to-blue-400 flex flex-col items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl w-full max-w-md transition-all duration-300 ease-in-out">
        <h1 className="text-3xl font-bold text-center mb-5 text-blue-800 drop-shadow-sm">
          🌤️ Weather Finder
        </h1>

        {/* 🔍 Search Bar */}
        <SearchBar query={query} onChange={searchCity} error={error} />

        {/* 📋 Suggestions */}
        {!loading && results.length > 0 && (
          <SuggestionList results={results} onSelect={getWeather} />
        )}

        {/* ⏳ Loader */}
        {loading && <Loader />}

        {/* ☁️ Weather */}
        {weather && !loading && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
