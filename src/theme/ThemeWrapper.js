import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { StylesProvider, CssBaseline, MuiThemeProvider } from '@material-ui/core';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
    html, body {
      margin: 0;
      padding: 0;
      font-family: 'Lato'
    }
`;

function ThemeWrapper({ children, theme }) {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </MuiThemeProvider>
        </StylesProvider>
      </ThemeProvider>
    </>
  );
}

ThemeWrapper.defaultProps = {
  children: null,
  theme: {},
};

ThemeWrapper.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
};

export default ThemeWrapper;
