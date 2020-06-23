import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { blue, pink, green } from '@material-ui/core/colors';

function myTheme(themeName = 'light') {
  let theme = createMuiTheme({
    themeName: 'Custom Theme',
    typography: {
      useNextVariants: true,
      fontFamily: [
        'Lato',
        'Roboto',
        '"Helvetica Neue"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      type: themeName,
      primary: {
        light: blue[800],
        main: blue[500],
        dark: blue[500],
      },
      secondary: {
        light: green[800],
        main: green[500],
        dark: green[500],
      },
      accent: {
        main: pink[500],
      },
    },
  });

  theme = responsiveFontSizes(theme);
  return theme;
}

export default myTheme;
