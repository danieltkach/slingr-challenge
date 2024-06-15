import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { App } from './App.tsx';
import { ErrorPage } from './views/ErrorPage';
import { AddItem } from './views/AddItem.tsx';
import { EditItem } from './views/EditItem.tsx';
import Root from './Root.tsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4D81B7'
    },
  },
  typography: {
    h2: {
      fontFamily: 'Nunito',
      fontSize: '1.125rem',
      weight: 400,
      lineHeight: '1.5rem',
      color: ' #2A323C',
    },
    h3: {
      fontFamily: 'Nunito',
      fontSize: '1rem',
      weight: 600,
      lineHeight: '1.375rem',
      color: '#000',
    },
    h4: {
      fontFamily: 'Nunito',
      fontSize: '0.875rem',
      weight: 600,
      lineHeight: '1.25rem',
      color: '#87898C',
    },
    h6: {
      fontSize: '1.125rem',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "add-item",
        element: <AddItem />,
      },
      {
        path: "edit-item/:itemId",
        element: <EditItem />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </StyledThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
