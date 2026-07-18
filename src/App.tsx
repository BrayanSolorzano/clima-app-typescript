import { useEffect, useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Box, CssBaseline, Paper } from '@mui/material';
import { AppDispatch, RootState } from './redux/store';
import { getWeather, setCity } from './redux/weatherSlice';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { LanguageSelector } from './components/LanguageSelector';
import { dictionary } from './utils/dictionary';
import { DefaultCities } from './components/DefaultCities';

function App() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  
  const { data, loading, error, lang, selectedCity } = useSelector(
    (state: RootState) => state.weather
  );

  const t = dictionary[lang as keyof typeof dictionary];

  useEffect(() => {
    dispatch(getWeather({ city: selectedCity, lang }));
  }, [dispatch, selectedCity, lang]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(setCity(inputValue));
    }
  };

  const changeEn = () => dispatch({ type: 'weather/setLanguage', payload: 'en' });
  const changeEs = () => dispatch({ type: 'weather/setLanguage', payload: 'es' });

  return (
    <>
      <CssBaseline />
      {/* Container centrar app */}
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3, bgcolor: '#f8f9fa' }}>
         <Typography variant="h4" component="h1" align="center" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>   
            {t.title}
          </Typography>

          <LanguageSelector lang={lang} changeEn={changeEn} changeEs={changeEs} />
          
          <SearchBar 
            inputValue={inputValue} 
            setInputValue={setInputValue} 
            handleSearch={handleSearch} 
            t={t} 
          />
          
          <Box sx={{ mt: 2, mb: 2, display: 'flex', justifyContent: 'center' }}>
            <DefaultCities 
              cities={['London', 'Toronto', 'Singapore']}
              selectedCity={selectedCity}
              // limpiar setCity  despues del clic
              onCityClick={(city) => dispatch(setCity(city))}
            />
          </Box>

          <Box sx={{ mt: 4 }}>
            <WeatherCard 
              loading={loading} 
              error={error} 
              data={data} 
              selectedCity={selectedCity} 
              t={t} 
            />
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default App;