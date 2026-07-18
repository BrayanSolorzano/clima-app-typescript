import { Box, Button } from '@mui/material';

interface Props {
  cities: string[];
  selectedCity: string;
  onCityClick: (city: string) => void;
}

export const DefaultCities = ({ cities, selectedCity, onCityClick }: Props) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
      {cities.map((city) => (
        <Button
          key={city}
          onClick={() => onCityClick(city)}
          variant={selectedCity.toLowerCase() === city.toLowerCase() ? 'contained' : 'outlined'}
          size="small"
          sx={{ borderRadius: 5, textTransform: 'capitalize' }}
        >
          {city}
        </Button>
      ))}
    </Box>
  );
};