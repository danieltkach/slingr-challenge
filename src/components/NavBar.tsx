import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import styled from 'styled-components';

export const NavBar: React.FC = () => {
  return (
    <Container position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          SHOPPING LIST
        </Typography>
      </Toolbar>
    </Container>
  );
};

const Container = styled(AppBar)`
  height: 4rem;
`;
