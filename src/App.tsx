import React from 'react';
import Box from '@mui/material/Box';
import { EmptyListPanel } from './components/EmptyListPanel';
import { ShoppingList } from './views/ShoppingList';


export const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '10rem' }}>
      {/* <EmptyListPanel /> */}
      <ShoppingList />
    </Box>
  );
};
