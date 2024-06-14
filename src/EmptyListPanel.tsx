import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Card } from './ui/Card';

export const EmptyListPanel: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
      }}
    >
      <Card>
        <Typography variant="h2">
          Your shopping list is empty :(
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Button variant="contained" color="primary">
            Add your first item
          </Button>
        </Box>
      </Card>
    </Box>
  );
};
