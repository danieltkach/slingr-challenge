import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4D81B7'
    },
  },
  typography: {
    h2: {
      fontFamily: 'Nunito',
      fontSize: '1.125rem',
      weight: 400,
      lineHeight: '1.5rem',
      color: ' #2A323C',
    },
    h3: {
      fontFamily: 'Nunito',
      fontSize: '1rem',
      weight: 600,
      lineHeight: '1.375rem',
      color: '#000',
    },
    h4: {
      fontFamily: 'Nunito',
      fontSize: '0.875rem',
      weight: 600,
      lineHeight: '1.25rem',
      color: '#87898C',
    },
    h6: {
      fontSize: '1.125rem',
    },
  },
});
