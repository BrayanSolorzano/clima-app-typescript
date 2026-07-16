interface Props {
  cities: string[];
  selectedCity: string;
  onCityClick: (city: string) => void;
}

export const DefaultCities = ({ cities, selectedCity, onCityClick }: Props) => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
      {cities.map((city) => (
        <button
          key={city}
          onClick={() => onCityClick(city)}
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
  );
};