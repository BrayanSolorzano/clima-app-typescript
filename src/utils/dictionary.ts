export interface DictionaryItem {
  title: string;
  city: string;
  language: string;
  temp: string;
  min: string;
  max: string;
  loading: string;
  error: string;
  searchPlaceholder: string;
  searchBtn: string;
}

export const dict: Record<'en' | 'es', DictionaryItem> = {
  en: {
    title: "Weather Forecast",
    city: "Location",
    language: "Language",
    temp: "Temperature",
    min: "Min",
    max: "Max",
    loading: "Loading data...",
    error: "Location not found or API error",
    searchPlaceholder: "Enter city or country...",
    searchBtn: "Search"
  },
  es: {
    title: "Pronóstico del Clima",
    city: "Ubicación",
    language: "Idioma",
    temp: "Temperatura",
    min: "Mín",
    max: "Máx",
    loading: "Cargando datos...",
    error: "Ubicación no encontrada o error de API",
    searchPlaceholder: "Escribe una ciudad o país...",
    searchBtn: "Buscar"
  }
};