import { ThemeProvider } from 'styled-components';
import theme from 'lib/style/theme';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
