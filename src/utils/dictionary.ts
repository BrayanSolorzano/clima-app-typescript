export interface DictionaryItem {
  title: string;
  searchPlaceholder: string;
  searchBtn: string;
  humidity: string; // <-- Nueva
  wind: string;     // <-- Nueva
}

// 2. Agregamos las traducciones a cada idioma
export const dictionary: Record<string, DictionaryItem> = {
  es: {
    title: 'Aplicación del Clima',
    searchPlaceholder: 'Buscar ciudad...',
    searchBtn: 'Buscar',
    humidity: 'Humedad', // <-- Nueva
    wind: 'Viento',      // <-- Nueva
  },
  en: {
    title: 'Weather App',
    searchPlaceholder: 'Search city...',
    searchBtn: 'Search',
    humidity: 'Humidity', // <-- Nueva
    wind: 'Wind',         // <-- Nueva
  },
};