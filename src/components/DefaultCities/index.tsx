import { Box, Button } from '@mui/material';

interface Props {
  cities: string[];
  selectedCity: string;
  onCityClick: (city: string) => void;
}

export const DefaultCities = ({ cities, selectedCity, onCityClick }: Props) => {
  const isSelected = (city: string): boolean =>
    selectedCity.toLowerCase() === city.toLowerCase();

  return (
    <Box sx={{ display: 'flex', gap: 1, mb: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
      {cities.map((city) => (
        <Button
          key={city}
          onClick={() => onCityClick(city)}
          variant={isSelected(city) ? 'contained' : 'outlined'}
          size="small"
        >
          {city}
        </Button>
      ))}
    </Box>
  );
};