import axios from 'axios';
import { WeatherForecastResponse } from '../types/weather';

// Variables de entorno 

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL;

//  Servicio de petición HTTP 

export const fetchWeatherForecast = async (
  query: string,
  lang: string
): Promise<WeatherForecastResponse> => {
  const response = await axios.get<WeatherForecastResponse>(BASE_URL, {
    params: {
      q: query,
      appid: API_KEY,
      units: 'metric',
      lang,
    },
  });

  return response.data;
};