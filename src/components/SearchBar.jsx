import React from "react";

function SearchBar({ query, onChange }) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search for a city..."
      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}

export default SearchBar;
