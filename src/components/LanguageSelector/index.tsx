import { Box, Button, ButtonGroup } from '@mui/material';

interface Props {
  lang: string;
  changeEn: () => void;
  changeEs: () => void;
}

export const LanguageSelector = ({ changeEn, changeEs, lang }: Props) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
      <ButtonGroup variant="outlined" size="small" aria-label="language selector">
        <Button 
          onClick={changeEn}
          variant={lang === 'en' ? 'contained' : 'outlined'}
        >
          EN
        </Button>
        <Button 
          onClick={changeEs}
          variant={lang === 'es' ? 'contained' : 'outlined'}
        >
          ES
        </Button>
      </ButtonGroup>
    </Box>
  );
};