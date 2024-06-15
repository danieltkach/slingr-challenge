import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { EmptyListPanel } from './components/EmptyListPanel';
import { ShoppingList } from './views/ShoppingList';
import { ListItem } from "./types";

export const App: React.FC = () => {
  const [listItems, setListItems] = useState<ListItem[]>([]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '10rem' }}>
      {
        listItems.length === 0 ? <EmptyListPanel /> : <ShoppingList items={listItems} />
      }
    </Box>
  );
};
