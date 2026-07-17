import { Card, CardContent, Typography, Box, CircularProgress, Alert } from '@mui/material';
import { WeatherInfo } from '../../services/weatherService';
import { DictionaryItem } from '../../utils/dictionary';

interface Props {
  loading: boolean;
  error: string | null;
  data: WeatherInfo | null;
  selectedCity: string;
  t: DictionaryItem;
}

export const WeatherCard = ({ loading, error, data, selectedCity, t }: Props) => {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (!data) return null;

  return (
    <Card elevation={2} sx={{ borderRadius: 2 }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {selectedCity.toUpperCase()}
        </Typography>
        
        <Box 
          component="img"
          // Accedemos al icono dentro del array weather
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt="Weather Icon"
          sx={{ width: 120, height: 120, margin: '0 auto' }}
        />
        
        <Typography variant="h3" component="p" color="primary" fontWeight="bold">
          {/* Accedemos a la temperatura dentro de main */}
          {data.main.temp}°C
        </Typography>
        
        <Typography variant="h6" color="text.secondary" sx={{ textTransform: 'capitalize', mt: 1 }}>
          {/* Accedemos a la descripción dentro del array weather */}
          {data.weather[0].description}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 3 }}>
          <Box>
            {/* Si TypeScript te marca error en t.humidity, revisa que exista en tu dictionary.ts */}
            <Typography variant="body2" color="text.secondary">{t.humidity || 'Humedad'}</Typography>
            <Typography variant="body1" fontWeight="bold">{data.main.humidity}%</Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">{t.wind || 'Viento'}</Typography>
            <Typography variant="body1" fontWeight="bold">{data.wind.speed} m/s</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};