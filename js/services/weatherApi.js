import { request } from './apiClient.js';

const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast';

export const CAMBODIAN_DESTINATIONS = Object.freeze({
  'phnom-penh': { name: 'Phnom Penh', latitude: 11.5564, longitude: 104.9282 },
  'siem-reap': { name: 'Siem Reap', latitude: 13.3633, longitude: 103.8564 },
  kampot: { name: 'Kampot', latitude: 10.6104, longitude: 104.1815 },
  'koh-rong': { name: 'Koh Rong', latitude: 10.7167, longitude: 103.2333 },
});

function getDestination(destinationId) {
  const destination = CAMBODIAN_DESTINATIONS[destinationId];

  if (!destination) {
    throw new Error(`Unsupported destination: ${destinationId}.`);
  }

  return destination;
}

/**
 * Gets current weather for one of the supported Cambodian destinations.
 * @param {'phnom-penh' | 'siem-reap' | 'kampot' | 'koh-rong'} destinationId
 */
export async function getCurrentWeather(destinationId) {
  const destination = getDestination(destinationId);
  const parameters = new URLSearchParams({
    latitude: destination.latitude,
    longitude: destination.longitude,
    current: 'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code',
    timezone: 'auto',
  });
  const data = await request(`${WEATHER_API_URL}?${parameters}`);

  return {
    destinationId,
    destination: destination.name,
    temperature: data.current.temperature_2m,
    temperatureUnit: data.current_units.temperature_2m,
    humidity: data.current.relative_humidity_2m,
    humidityUnit: data.current_units.relative_humidity_2m,
    windSpeed: data.current.wind_speed_10m,
    windSpeedUnit: data.current_units.wind_speed_10m,
    weatherCode: data.current.weather_code,
    observedAt: data.current.time,
    timezone: data.timezone,
  };
}
