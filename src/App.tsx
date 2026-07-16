import { useEffect, useState, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './redux/store';
import { getWeather, setLanguage, setCity } from './redux/weatherSlice';
import { dict } from './utils/dictionary';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error, lang, selectedCity } = useSelector((state: RootState) => state.weather);
  
  const [inputValue, setInputValue] = useState<string>(selectedCity);
  const t = dict[lang];

  // Arreglo de las ciudades 
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
    setInputValue(city); // Actualiza texto del input
    dispatch(setCity(city)); // Dispara la busqueda en Redux
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: '40px auto' }}>
      
      {/* Selector de Idiomas */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '20px' }}>
        <button 
          onClick={() => dispatch(setLanguage('en'))}
          style={{ 
            padding: '8px 12px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '4px',
            fontWeight: lang === 'en' ? 'bold' : 'normal', 
            backgroundColor: lang === 'en' ? '#0056b3' : '#f0f0f0', color: lang === 'en' ? '#fff' : '#000'
          }}
        >EN</button>
        <button 
          onClick={() => dispatch(setLanguage('es'))}
          style={{ 
            padding: '8px 12px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '4px',
            fontWeight: lang === 'es' ? 'bold' : 'normal', 
            backgroundColor: lang === 'es' ? '#0056b3' : '#f0f0f0', color: lang === 'es' ? '#fff' : '#000'
          }}
        >ES</button>
      </div>

      {/* Formulario de Busqueda */}
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={t.searchPlaceholder}
          style={{ padding: '10px', flex: 1, borderRadius: '4px', border: '1px solid #ccc', fontSize: '1em' }}
        />
        <button 
          type="submit"
          style={{ 
            padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', 
            border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' 
          }}
        >
          {t.searchBtn}
        </button>
      </form>

      {/* Botones de Ciudades */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
        {defaultCities.map((city) => (
          <button
            key={city}
            onClick={() => handleDefaultCityClick(city)}
            style={{
              padding: '8px 15px',
              backgroundColor: selectedCity.toLowerCase() === city.toLowerCase() ? '#0056b3' : '#e9ecef',
              color: selectedCity.toLowerCase() === city.toLowerCase() ? '#fff' : '#333',
              border: '1px solid #ccc',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '0.9em'
            }}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Tarj Clima */}
      <div style={{ 
        border: '1px solid #e0e0e0', padding: '30px', borderRadius: '8px', 
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)', backgroundColor: '#fff', textAlign: 'center'
      }}>
        <h2 style={{ margin: '0 0 10px 0' }}>{t.title}</h2>
        <h3 style={{ color: '#555', margin: '0 0 20px 0', textTransform: 'capitalize' }}>{selectedCity}</h3>
        
        {loading && <p style={{ fontSize: '1.1em', color: '#666' }}>{t.loading}</p>}
        {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{t.error}</p>}
        
        {!loading && !error && data && (
          <div>
            <img 
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
              alt="weather icon" 
              style={{ width: '100px', height: '100px' }}
            />
            <h4 style={{ textTransform: 'capitalize', fontSize: '1.4em', margin: '10px 0' }}>
              {data.weather[0].description}
            </h4>
            <div style={{ fontSize: '1.2em', marginTop: '15px' }}>
              <p style={{ margin: '8px 0' }}><b>{t.temp}:</b> {data.main.temp} °C</p>
              <p style={{ margin: '8px 0', color: '#555' }}>
                <b>{t.min}:</b> {data.main.temp_min} °C | <b>{t.max}:</b> {data.main.temp_max} °C
              </p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;