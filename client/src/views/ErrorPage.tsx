import { Box, Typography } from '@mui/material';
import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { Button } from '../components/Button';

type RouteError = {
  statusText?: string;
  message?: string;
};

const errorMessage = "The page you are looking for is not available."

export const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouteError;
  const navigateTo = useNavigate();
  console.error(error);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        flexDirection: 'column'
      }}
    >
        <Typography variant="h4" sx={{margin: '3rem'}}>
          {errorMessage}
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Button text={'Return to home page'} onClick={()=>navigateTo('/')} />
        </Box>
    </Box>
  );
};
