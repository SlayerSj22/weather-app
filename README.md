🌦️ WeatherWise — React Weather App

WeatherWise is a sleek and responsive weather application built using React, Vite, and TailwindCSS.
It allows users to search for cities, view matching suggestions with country and state, and check real-time weather data powered by the Open-Meteo API.

✨ Features

🔍 Live City Search: Get instant suggestions as you type (city, state, and country).

🌍 Weather Details: Displays real-time temperature and weather conditions.

⚠️ Validation: Prompts users to enter at least 3 characters before searching.

💨 Dynamic Icons: Weather icons change based on the condition (sunny, rain, fog, etc.) using Lucide React.

📱 Fully Responsive: Optimized for mobile, tablet, and desktop screens.

⚡ Blazing Fast: Powered by Vite for ultra-fast builds and hot reloads.

🧩 Tech Stack
Category	Technology
Framework	React

Build Tool	Vite

Styling	TailwindCSS

Icons	Lucide React

APIs	Open-Meteo Weather API
 + Open-Meteo Geocoding API
🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/weatherwise.git
cd weatherwise

2️⃣ Install Dependencies
npm install

3️⃣ Run the App
npm run dev


The app will be available at:
👉 http://localhost:5173

📁 Folder Structure
src/
│
├── components/
│   ├── SearchBar.jsx
│   ├── SuggestionList.jsx
│   ├── Loader.jsx
│   └── WeatherCard.jsx
│
├── utils/
│   └── WeatherUtils.js
│
├── App.jsx
└── main.jsx

🌍 API Details
🗺️ Geocoding API (City Search)

Used to fetch latitude, longitude, and country info of searched cities.

https://geocoding-api.open-meteo.com/v1/search?name={cityName}

🌤️ Weather API (Weather Data)

Fetches current weather data for a given location.

https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,weather_code

💡 App Workflow

User types a city name (minimum 3 characters).

Suggestions (city, state, country) appear dynamically.

On selecting a city, the app fetches its latitude and longitude.

The app calls the Open-Meteo Weather API to display:

🌡️ Temperature

🌥️ Weather Condition

☁️ Dynamic Weather Icon

🖼️ UI Overview
Desktop View	Mobile View

	
⚙️ Troubleshooting

If npx or tailwindcss doesn’t work:

Ensure Node.js ≥ 18 is installed.

Run:

npm install
npm run dev


If icons are missing, ensure lucide-react is installed:

npm install lucide-react

🧑‍💻 Author

Shashwat Jain
Frontend Developer | Passionate about UI/UX and modern web technologies

📧 Email: shashwatmodi11@gmail.com

🪪 License

This project is licensed under the MIT License — you’re free to use, modify, and share it with attribution.