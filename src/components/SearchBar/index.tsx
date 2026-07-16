import { FormEvent } from 'react';
import { DictionaryItem } from '../../utils/dictionary';

interface Props {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSearch: (e: FormEvent) => void;
  t: DictionaryItem;
}

export const SearchBar = ({ inputValue, setInputValue, handleSearch, t }: Props) => {
  return (
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
  );
};