import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { themes } from '../theme';
import useDarkMode from 'use-dark-mode';
import 'highlight.js/styles/ir-black.css';
function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const { value: isDark } = useDarkMode(true);
  const themeConfig = isDark ? themes.darkTheme : themes.lightTheme;

  return (
        <ThemeProvider theme={themeConfig}>
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
                />
              </Head>
              <CssBaseline />
              <Component {...pageProps} />
        </ThemeProvider>
  )
}

export default MyApp;