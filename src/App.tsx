import { useEffect, useState, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './redux/store';
import { getWeather, setLanguage, setCity } from './redux/weatherSlice';
import { dict } from './utils/dictionary';

// Importamos nuestros nuevos componentes
import { LanguageSelector } from './components/LanguageSelector';
import { SearchBar } from './components/SearchBar';
import { DefaultCities } from './components/DefaultCities';
import { WeatherCard } from './components/WeatherCard';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error, lang, selectedCity } = useSelector((state: RootState) => state.weather);
  
  const [inputValue, setInputValue] = useState<string>(selectedCity);
  const t = dict[lang];
  const defaultCities = ['London', 'Toronto', 'Singapore'];

  useEffect(() => {
    dispatch(getWeather({ city: selectedCity, lang }));
  }, [dispatch, selectedCity, lang]);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      dispatch(setCity(inputValue.trim()));
    }
  };

  const handleDefaultCityClick = (city: string) => {
    setInputValue(city);
    dispatch(setCity(city));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: '40px auto' }}>
      
      <LanguageSelector 
        lang={lang} 
        changeEn={() => dispatch(setLanguage('en'))} 
        changeEs={() => dispatch(setLanguage('es'))} 
      />

      <SearchBar 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        handleSearch={handleSearch} 
        t={t} 
      />

      <DefaultCities 
        cities={defaultCities} 
        selectedCity={selectedCity} 
        onCityClick={handleDefaultCityClick} 
      />

      <WeatherCard 
        loading={loading} 
        error={error} 
        data={data} 
        selectedCity={selectedCity} 
        t={t} 
      />

    </div>
  );
}

export default App;