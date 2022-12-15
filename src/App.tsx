import React from 'react';
import { CssBaseline } from '@mui/material';
import RoutesApp from './routes';
import "./global.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}
// Update the Button's color prop options
declare module '@mui/material' {
  interface TextFieldPropsColorOverrides {
    neutral: true;
  }
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RoutesApp />
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;