import { LOCALE, DATE_FORMAT_OPTIONS, TIME_FORMAT_OPTIONS } from "../constants";

/**
 * Format date in Arabic
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
export const formatArabicDate = (date) => {
  return new Intl.DateTimeFormat(LOCALE, DATE_FORMAT_OPTIONS).format(date);
};

/**
 * Format time in Arabic
 * @param {Date} date - The date to format
 * @returns {string} Formatted time string
 */
export const formatArabicTime = (date) => {
  return new Intl.DateTimeFormat(LOCALE, TIME_FORMAT_OPTIONS).format(date);
};
