import axios from 'axios';

export interface WeatherInfo {
  weather: Array<{ description: string; icon: string }>;
  main: { temp: number; temp_min: number; temp_max: number; humidity: number };
  wind: { speed: number };
}

//  variables de entorno
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

export const fetchWeatherData = async (query: string, lang: string): Promise<WeatherInfo> => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      appid: API_KEY,
      units: 'metric',
      lang: lang
    }
  });
  
  return response.data;
};