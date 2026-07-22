import { ForecastItem } from '../types/weather';

export const getTodayForecasts = (list: ForecastItem[]): ForecastItem[] => {
  const todayDate = new Date().toISOString().split('T')[0]; 
  return list.filter((item) => item.dt_txt.startsWith(todayDate));
};


 /* Calcula la temperatura mínima y máxima a partir de una lista de intervalos. */

export const getMinMaxTemp = (
  list: ForecastItem[]
): { min: number; max: number } => {
  const temps = list.map((item) => item.main.temp);
  return {
    min: Math.min(...temps),
    max: Math.max(...temps),
  };
};

/* Obtiene los intervalos de previsión del día actual*/
export const getDayForecasts = (list: ForecastItem[]): ForecastItem[] => {
  const today = getTodayForecasts(list);
  return today.length > 0 ? today : list.slice(0, 8);
};
