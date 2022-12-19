// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import '@fontsource/inter';
import { theme } from './theme';
import { useEffect } from 'react';
import NavBar from '../components/navigation/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.localStorage.setItem('chakra-ui-color-mode', 'light');
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
