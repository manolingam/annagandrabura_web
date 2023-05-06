import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Layout } from '../shared/Layout';
import '../styles/globals.css';

const breakpoints = {
  base: '320px',
  md: '620px',
  lg: '1020px'
};

const colors = {
  blue: '#0077df',
  yellow: '#fbdb20',
  black: '#231f20',
  orange: '#ff8562',
  light: '#f8f8f8',
  polygonViolet: '#7b44e4d9'
};

const fonts = {
  pathway: "'Pathway Extreme', sans-serif"
};

export const theme = extendTheme({
  colors,
  fonts,
  breakpoints
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
