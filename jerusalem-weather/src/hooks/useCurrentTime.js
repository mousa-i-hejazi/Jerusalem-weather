import { useState, useEffect } from "react";

/**
 * Custom hook to get current time updated every second
 * @returns {Date} Current time
 */
export const useCurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return time;
};
