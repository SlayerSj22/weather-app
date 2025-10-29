

function SearchBar({ query, onChange, error }) {
  return (
    <div className="w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a city..."
        className={`w-full border ${
          error ? "border-red-400" : "border-gray-300"
        } rounded-xl px-4 py-2 focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-300" : "focus:ring-blue-400"
        } transition`}
      />

      {error && (
        <p className="text-red-500 text-sm mt-2 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}

export default SearchBar;
