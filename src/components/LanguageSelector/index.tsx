import { Box, Button, ButtonGroup } from '@mui/material';

type Language = 'en' | 'es';

interface Props {
  lang: Language;
  onChangeLanguage: (lang: Language) => void;
}

export const LanguageSelector = ({ lang, onChangeLanguage }: Props) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
      <ButtonGroup variant="outlined" size="small" aria-label="language selector">
        <Button
          onClick={() => onChangeLanguage('en')}
          variant={lang === 'en' ? 'contained' : 'outlined'}
        >
          EN
        </Button>
        <Button
          onClick={() => onChangeLanguage('es')}
          variant={lang === 'es' ? 'contained' : 'outlined'}
        >
          ES
        </Button>
      </ButtonGroup>
    </Box>
  );
};