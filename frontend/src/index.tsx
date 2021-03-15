import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import MainColors from './utils/MainColors'

let theme = createMuiTheme({
  palette: {
    primary: {
      main: MainColors.turquoise,
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: MainColors.pink,
      contrastText: '#FFFFFF'
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold'
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold'
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold'
    },
    h4: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold'
    },
    h5: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'normal'
    },
    h6: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'normal'
    },
    body1: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 'normal'
    },
    body2: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 'normal'
    },
    subtitle1: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 'normal'
    },
    subtitle2: {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 'normal'
    }
  }
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
