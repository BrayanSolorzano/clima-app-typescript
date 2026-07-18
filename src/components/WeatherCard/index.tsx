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
    const errorMessage = error.includes('404')
      ? t.cityNotFound
      : t.defaultError;

    return (
      <Alert severity="error" sx={{ borderRadius: 2 }}>
        {errorMessage}
      </Alert>
    );
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
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
          alt="Weather Icon"
          sx={{ width: 120, height: 120, margin: '0 auto' }}
        />
        
        <Typography variant="h3" component="p" color="primary" sx={{ fontWeight: 'bold' }}>
          {data.main.temp}°C
        </Typography>
        
        <Typography variant="h6" color="text.secondary" sx={{ textTransform: 'capitalize', mt: 1 }}>
          {data.weather[0].description}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 3 }}>
          <Box>
            <Typography variant="body2" color="text.secondary">{t.humidity || 'Humedad'}</Typography>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{data.main.humidity}%</Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="text.secondary">{t.wind || 'Viento'}</Typography>
           <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{data.wind.speed} m/s</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};