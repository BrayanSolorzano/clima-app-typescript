import { Box, Typography } from '@mui/material';
import { ForecastItem } from '../../types/weather';

interface Props {
  forecasts: ForecastItem[];
  title: string;
}

export const HourlyForecast = ({ forecasts, title }: Props) => (
  <>
    <Typography
      variant="subtitle1"
      sx={{ mt: 4, mb: 2, fontWeight: 600 }}
      color="text.secondary"
    >
      {title}
    </Typography>

    <Box
      sx={{
        display: 'flex',
        gap: 2,
        overflowX: 'auto',
        pb: 1,
        '&::-webkit-scrollbar': { height: 6 },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'primary.light',
          borderRadius: 3,
        },
      }}
    >
      {forecasts.map((item) => {
        const hour = item.dt_txt.split(' ')[1].substring(0, 5);
        return (
          <Box
            key={item.dt}
            sx={{
              minWidth: 80,
              textAlign: 'center',
              p: 1,
              borderRadius: 2,
              bgcolor: 'background.default',
              flexShrink: 0,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {hour}
            </Typography>
            <Box
              component="img"
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={item.weather[0].description}
              sx={{
                width: 48,
                height: 48,
                filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.15))',
              }}
            />
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              {Math.round(item.main.temp)}°C
            </Typography>
          </Box>
        );
      })}
    </Box>
  </>
);
