# 🌦️ Simple Weather App – Jerusalem Weather

## 🎯 Objective

Build a simple website interface using **React.js** that displays the weather in Jerusalem using the **OpenWeatherMap API**.
The interface should display:

- The current date and time (in Arabic).
- Current temperature from the API.
- Weather description (e.g., cloudy, clear, etc.) from the API.
- Minimum and maximum temperatures from the API.

## 👤 User Stories

As a user:

- I want to open the website and instantly see the weather in Jerusalem.
- I want to see the current date and time.
- I want to view the current temperature and weather description.
- I want a smooth and responsive experience even if data fetching fails.

## 🔑 Acceptance Criteria

- The project must be built using **React.js**.
- Weather data should be fetched from the following API:

  ```
  https://api.openweathermap.org/data/2.5/weather?lat=31.77&lon=35.21&appid=YOUR_API_KEY

  ```
### Getting Your API Key :

To obtain your **YOUR_API_KEY**, log in to the official [OpenWeatherMap](https://openweathermap.org/) website,  
then go to [My API Keys](https://home.openweathermap.org/api_keys) to generate your personal key.

- The interface should display:
  - The current date and time
  - The current temperature.
  - The weather description.
  - The minimum and maximum temperatures.
- The temperature should be displayed in a user-friendly format (note: OpenWeatherMap returns values in Kelvin by default, so they must be converted to °C).
- A **Loading…** message should appear while fetching data.
- A friendly error message should appear if fetching fails (e.g., due to network or API issues).
- The interface should be simple, responsive (works on both mobile and desktop), and fully in Arabic.

## 🧩 Requirements

- Use **React (with Vite)**.
- Use **fetch API** or **axios** to retrieve data.
- Use **useEffect** and **useState** hooks to manage data fetching and state updates.
- Convert temperature values to **Celsius (°C)**.
- Display the local time dynamically.

## 🌐 API Used

**Current Weather Data (OpenWeatherMap)**

Example request :

```
  https://api.openweathermap.org/data/2.5/weather?lat=31.77&lon=35.21&appid=YOUR_API_KEY
```

## 🖥️ Suggested UI Design

- A main card titled **“Jerusalem Weather”**.
- A top section showing the current date and time (updates every minute).
- A large central section showing the current temperature.
- Below it, a description (e.g., “scattered clouds”).
- A bottom section showing min/max temperatures, e.g. **Min 18° | Max 28°**.

### States

- **Loading…** during data fetching.
- **Error fetching data** message when something goes wrong.

## ✅ Deliverables

The project folder should include:

- `src/App.jsx`
- `src/index.jsx`
- `package.json`
- `README.md`

Run the project locally using:

```bash
npm install
npm run dev
```

## 💡 Notes & Recommendations

- Use **React Hooks**.
- Implement proper error handling.
- Update the time every 60 seconds using `setInterval` inside `useEffect`.
- Keep the design simple, responsive, and visually appealing.
