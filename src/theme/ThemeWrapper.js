import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { StylesProvider, CssBaseline, MuiThemeProvider } from '@material-ui/core';

const GlobalStyle = createGlobalStyle`
    html, body {
      margin: 0;
      padding: 0;
      font-family: 'Lato'
    }
`;

function ThemeWrapper({ children, theme }) {
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          {children}
        </MuiThemeProvider>
      </StylesProvider>
    </ThemeProvider>
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
