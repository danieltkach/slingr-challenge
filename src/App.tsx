import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';

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
  },
});

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <NavBar>
            <Toolbar>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                SHOPPING LIST
              </Typography>
            </Toolbar>
          </NavBar>
        </Box>
      </StyledThemeProvider>
    </ThemeProvider>
  );
};

const NavBar = styled(AppBar)`
  height: 4rem;
`;
