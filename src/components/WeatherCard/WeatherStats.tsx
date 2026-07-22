import { Box, Typography } from '@mui/material';
import { DictionaryItem } from '../../utils/dictionary';

interface Props {
  min: number;
  max: number;
  humidity: number;
  windSpeed: number;
  t: DictionaryItem;
}

export const WeatherStats = ({ min, max, humidity, windSpeed, t }: Props) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 3 }}>
    <Box>
      <Typography variant="body2" color="text.secondary">Min</Typography>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{Math.round(min)}°C</Typography>
    </Box>
    <Box>
      <Typography variant="body2" color="text.secondary">Max</Typography>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{Math.round(max)}°C</Typography>
    </Box>
    <Box>
      <Typography variant="body2" color="text.secondary">{t.humidity}</Typography>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{humidity}%</Typography>
    </Box>
    <Box>
      <Typography variant="body2" color="text.secondary">{t.wind}</Typography>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{windSpeed} m/s</Typography>
    </Box>
  </Box>
);
