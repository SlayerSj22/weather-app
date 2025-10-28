import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudFog,
  CloudLightning,
} from "lucide-react";

const weatherConditions = {
  0: { text: "Clear sky", icon: <Sun className="text-yellow-400" size={64} /> },
  1: { text: "Mainly clear", icon: <Sun className="text-yellow-400" size={64} /> },
  2: { text: "Partly cloudy", icon: <Cloud className="text-gray-400" size={64} /> },
  3: { text: "Overcast", icon: <Cloud className="text-gray-500" size={64} /> },
  45: { text: "Fog", icon: <CloudFog className="text-gray-400" size={64} /> },
  51: { text: "Light drizzle", icon: <CloudRain className="text-blue-400" size={64} /> },
  61: { text: "Rain", icon: <CloudRain className="text-blue-500" size={64} /> },
  71: { text: "Snow", icon: <CloudSnow className="text-blue-300" size={64} /> },
  80: { text: "Rain showers", icon: <CloudRain className="text-blue-600" size={64} /> },
  95: { text: "Thunderstorm", icon: <CloudLightning className="text-yellow-500" size={64} /> },
};

export const getWeatherDescription = (code) =>
  weatherConditions[code]?.text || "Unknown";

export const getWeatherIcon = (code) =>
  weatherConditions[code]?.icon || <Cloud />;
