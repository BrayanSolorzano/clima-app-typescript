import { useMemo } from 'react';
import { Card, CardContent, Typography, Box, CircularProgress, Alert } from '@mui/material';
import { WeatherForecastResponse } from '../../types/weather';
import { DictionaryItem } from '../../utils/dictionary';
import { getDayForecasts, getMinMaxTemp } from '../../utils/weatherUtils';
import { WeatherStats } from './WeatherStats';
import { HourlyForecast } from './HourlyForecast';

interface Props {
  loading: boolean;
  error: string | null;
  data: WeatherForecastResponse | null;
  t: DictionaryItem;
}

export const WeatherCard = ({ loading, error, data, t }: Props) => {
  const todayForecasts = useMemo(() => {
    if (!data) return [];
    return getDayForecasts(data.list);
  }, [data]);

  const { min, max } = useMemo(() => {
    if (todayForecasts.length === 0) return { min: 0, max: 0 };
    return getMinMaxTemp(todayForecasts);
  }, [todayForecasts]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    const isNotFound = error.toLowerCase().includes('not found');
    return (
      <Alert severity="error" sx={{ borderRadius: 2 }}>
        {isNotFound ? t.cityNotFound : t.defaultError}
      </Alert>
    );
  }

  if (!data || todayForecasts.length === 0) return null;

  const current = todayForecasts[0];

  return (
    <Card elevation={2}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {data.city.name}, {data.city.country}
        </Typography>

        <Box
          component="img"
          src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`}
          alt={current.weather[0].description}
          sx={{
            width: 120,
            height: 120,
            margin: '0 auto',
            filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.15))',
          }}
        />

        <Typography variant="h3" component="p" color="primary" sx={{ fontWeight: 'bold' }}>
          {Math.round(current.main.temp)}°C
        </Typography>

        <Typography variant="h6" color="text.secondary" sx={{ textTransform: 'capitalize', mt: 1 }}>
          {current.weather[0].description}
        </Typography>

        <WeatherStats
          min={min}
          max={max}
          humidity={current.main.humidity}
          windSpeed={current.wind.speed}
          t={t}
        />

        <HourlyForecast forecasts={todayForecasts} title={t.hourlyForecast} />
      </CardContent>
    </Card>
  );
};