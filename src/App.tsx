import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { EmptyListPanel } from './EmptyListPanel';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4D81B7'
    },
  },
  typography: {
    h6: {
      fontSize: '1.125rem',
    },
    h2: {
      fontFamily: 'Nunito',
      fontSize: '1.125rem',
      weight: 400,
      lineHeight: '1.5rem',
      color: '#87898C',
    }
  },
});

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <CssBaseline />
          <NavBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                SHOPPING LIST
              </Typography>
            </Toolbar>
          </NavBar>
          <EmptyListPanel />
        </Box>
      </StyledThemeProvider>
    </ThemeProvider>
  );
};

const NavBar = styled(AppBar)`
  height: 4rem;
`;
