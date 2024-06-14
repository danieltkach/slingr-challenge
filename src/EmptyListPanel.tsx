import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
      <Card sx={{ width: '38.375rem', height: '18.125rem', padding: '4.5rem', boxShadow: 'none', border: '1px solid #C6C6C6', borderRadius: '5px' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
          <Typography variant="h2">
            Your shopping list is empty :(
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Button variant="contained" color="primary">
              Add your first item
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
