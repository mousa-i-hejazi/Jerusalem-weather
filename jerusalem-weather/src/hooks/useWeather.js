import { useState, useEffect } from "react";
import { fetchWeatherData } from "../utils/weatherUtils";

/**
 * Custom hook to fetch and manage weather data
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @param {string} apiKey - API key
 * @returns {Object} Weather data, loading state, and error
 */
export const useWeather = (lat, lon, apiKey) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchWeatherData(lat, lon, apiKey);
        setWeather(data);
      } catch (err) {
        console.error("Error fetching weather:", err);
        setError(err.message || "حدث خطأ في جلب بيانات الطقس");
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, [lat, lon, apiKey]);

  return { weather, loading, error };
};
