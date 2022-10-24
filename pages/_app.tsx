import '../styles/globals.ts';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/theme';
import { GlobalStyle } from '../styles/globals';
import { UtilsProvider } from '../src/context/utils';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <UtilsProvider>
        <ThemeProvider theme={defaultTheme}>
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
      </UtilsProvider>
  )
}

export default MyApp