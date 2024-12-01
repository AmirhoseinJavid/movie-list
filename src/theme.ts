'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'FuturaLT';
              font-display: swap;
              font-weight: 600;
              font-style: normal;
              src: local('FuturaLT-Light'), url('/fonts/FuturaLT-Light.woff2') format('woff2'), url('/fonts/FuturaLT-Light.woff') format('woff');
            }
            @font-face {
              font-family: 'FuturaLT';
              font-display: swap;
              font-weight: normal;
              font-style: normal;
              src: local('FuturaLT'), url('/fonts/FuturaLT.woff2') format('woff2'), url('/fonts/FuturaLT.woff') format('woff');
            }
            @font-face {
              font-family: 'FuturaLT';
              font-display: swap;
              font-weight: bold;
              font-style: normal;
              src: local('FuturaLT-Bold'), url('/fonts/FuturaLT-Bold.woff2') format('woff2'), url('/fonts/FuturaLT-Bold.woff') format('woff');
            }
          `,
    },
  },
});

export default theme;
