import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { EmptyListPanel } from './components/EmptyListPanel';
import { ShoppingList } from './views/ShoppingList';
import { ListItem } from "./types";

const item1 = {
  id: "1",
  title: "Tomatoes",
  description: "Green cherry tomatoes",
  // status: "pending"
}

export const App: React.FC = () => {
  const [listItems, setListItems] = useState<ListItem[]>([item1, item1, item1, item1, item1,]);
  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '10rem', justifyContent: 'center', alignItems: 'center' }}>
      {
        listItems.length === 0 ? <EmptyListPanel /> : <ShoppingList items={listItems} />
      }
    </Box>
  );
};
