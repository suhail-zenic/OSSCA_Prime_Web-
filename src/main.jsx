import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    gold: { 500: '#D4AF37' },
    offwhite: { 500: '#FBF9F6' },
    black: { 500: '#000000' }
  },
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif'
  }
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
