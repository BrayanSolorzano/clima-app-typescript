import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Box, Paper } from '@mui/material';
import { AppDispatch, RootState } from './redux/store';
import { getWeather, setCity, setLanguage } from './redux/weatherSlice';
import { SearchBar, WeatherCard, LanguageSelector, DefaultCities } from './components';
import { dictionary } from './utils/dictionary';

const DEFAULT_CITIES = ['London', 'Toronto', 'Singapore'];

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const { data, loading, error, lang, selectedCity } = useSelector(
    (state: RootState) => state.weather
  );

  const t = dictionary[lang];

  useEffect(() => {
    dispatch(getWeather({ city: selectedCity, lang }));
  }, [dispatch, selectedCity, lang]);

  const handleSearch = (city: string) => {
    dispatch(setCity(city));
  };

  const handleChangeLanguage = (language: 'en' | 'es') => {
    dispatch(setLanguage(language));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={3} sx={{ p: 4, bgcolor: 'background.paper' }}>
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          color="primary"
        >
          {t.title}
        </Typography>

        <LanguageSelector lang={lang} onChangeLanguage={handleChangeLanguage} />

        <SearchBar onSearch={handleSearch} t={t} />

        <Box sx={{ mt: 2, mb: 2, display: 'flex', justifyContent: 'center' }}>
          <DefaultCities
            cities={DEFAULT_CITIES}
            selectedCity={selectedCity}
            onCityClick={(city) => dispatch(setCity(city))}
          />
        </Box>

        <Box sx={{ mt: 4 }}>
          <WeatherCard loading={loading} error={error} data={data} t={t} />
        </Box>
      </Paper>
    </Container>
  );
}

export default App;