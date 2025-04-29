import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul MUI por defecto
    },
    secondary: {
      main: '#dc004e', // Rosa
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});
