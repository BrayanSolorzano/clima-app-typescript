import { FormEvent } from 'react';
import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { DictionaryItem } from '../../utils/dictionary';

interface Props {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSearch: (e: FormEvent) => void;
  t: DictionaryItem;
}

export const SearchBar = ({ inputValue, setInputValue, handleSearch, t }: Props) => {
  return (
    <Box 
      component="form" 
      onSubmit={handleSearch} 
      sx={{ 
        display: 'flex', 
        gap: 2, 
        mb: 3,
        alignItems: 'center'
      }}
    >
      <TextField 
        fullWidth
        variant="outlined"
        label={t.searchPlaceholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        size="small"
      />
      <Button 
        type="submit" 
        variant="contained" 
        color="primary"
        endIcon={<SearchIcon />}
        sx={{ height: '40px', px: 3 }}
      >
        {t.searchBtn}
      </Button>
    </Box>
  );
};