// Interfaces del endpoint forecast

export interface ForecastWeather {
  description: string;
  icon: string;
}

export interface ForecastMain {
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

export interface ForecastWind {
  speed: number;
}

export interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: ForecastMain;
  weather: ForecastWeather[];
  wind: ForecastWind;
}

export interface ForecastCity {
  name: string;
  country: string;
}

export interface WeatherForecastResponse {
  list: ForecastItem[];
  city: ForecastCity;
}
