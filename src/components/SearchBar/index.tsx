import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { DictionaryItem } from '../../utils/dictionary';

interface Props {
  onSearch: (city: string) => void;
  t: DictionaryItem;
}

export const SearchBar = ({ onSearch, t }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed) {
      onSearch(trimmed);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        gap: 2,
        mb: 3,
        alignItems: 'center',
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