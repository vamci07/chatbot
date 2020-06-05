import React from 'react';
import { ThemeWrapper, myTheme } from './theme';
import { useMediaQuery } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import Landing from 'views/Landing';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(() => myTheme(prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode]);

  return (
    <ThemeWrapper theme={theme}>
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Chatbot</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Landing />
      </>
    </ThemeWrapper>
  );
}

export default App;
