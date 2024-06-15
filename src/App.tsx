import React, { useState } from 'react';
import styled from 'styled-components';
import { EmptyListPanel } from './components/EmptyListPanel';
import { ShoppingList } from './views/ShoppingList';
import { ListItem, Status } from "./types";

const item1 = {
  id: "1",
  title: "Tomatoes",
  description: "Green cherry tomatoes",
  status: "pending" as Status
}

export const App: React.FC = () => {
  const [listItems, setListItems] = useState<ListItem[]>([item1, item1, item1, item1,]);

  return (
    <Container >
      {
        listItems.length === 0 ? <EmptyListPanel /> : <ShoppingList items={listItems} />
      }
    </Container>
  );
};

const Container = styled.div`
  display: flex; 
  height: 100%;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
`;
