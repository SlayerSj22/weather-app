import React from "react";
import { MapPin } from "lucide-react";

function SuggestionsList({ results, onSelect }) {
  if (!results.length) return null;

  return (
    <ul className="border border-gray-200 rounded-xl mt-3 max-h-48 overflow-y-auto shadow-sm">
      {results.map((city, i) => (
        <li
          key={i}
          onClick={() => onSelect(city)}
          className="px-4 py-2 hover:bg-blue-100 cursor-pointer flex items-center gap-2 text-gray-700"
        >
          <MapPin size={16} className="text-blue-500" />
          {city.name}, {city.admin1 ? `${city.admin1}, ` : ""}
          {city.country}
        </li>
      ))}
    </ul>
  );
}

export default SuggestionsList;
