import { API_BASE_URL } from "../constants";

/**
 * Fetch weather data from OpenWeatherMap API
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @param {string} apiKey - API key
 * @returns {Promise<Object>} Weather data
 * @throws {Error} If the fetch fails
 */
export const fetchWeatherData = async (lat, lon, apiKey) => {
  if (!apiKey) {
    throw new Error("مفتاح API غير متوفر");
  }

  const url = `${API_BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&lang=ar`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`فشل في جلب بيانات الطقس: ${response.status}`);
  }

  return response.json();
};

/**
 * Get weather icon URL
 * @param {string} icon - Icon code
 * @returns {string} Icon URL
 */
export const getWeatherIconUrl = (icon) => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`;
};
