export interface DictionaryItem {
  title: string;
  searchPlaceholder: string;
  searchBtn: string;
  humidity: string;
  wind: string;
  cityNotFound: string; 
  defaultError: string; 
}

export const dictionary: Record<string, DictionaryItem> = {
  es: {
    title: 'Aplicación del Clima',
    searchPlaceholder: 'Buscar ciudad...',
    searchBtn: 'Buscar',
    humidity: 'Humedad',
    wind: 'Viento',
    cityNotFound: 'No se encontró información para esta ciudad. Verifica el nombre y vuelve a intentar.',
    defaultError: 'Ocurrió un error al buscar el clima. Inténtalo más tarde.',
  },
  en: {
    title: 'Weather App',
    searchPlaceholder: 'Search city...',
    searchBtn: 'Search',
    humidity: 'Humidity',
    wind: 'Wind',
    cityNotFound: 'No information found for this city. Please check the name and try again.',
    defaultError: 'An error occurred while fetching the weather. Please try again later.',
  },
};