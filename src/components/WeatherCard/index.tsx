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
  return (
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
  );
};