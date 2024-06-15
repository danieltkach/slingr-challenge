import React from 'react';
import styled from 'styled-components';
import { EmptyListPanel } from './components/EmptyListPanel';
import { ShoppingList } from './views/ShoppingList';
import { useQuery } from '@tanstack/react-query';
import { shoppingListQueryKey } from './state/queryKeys';
import { API_URL } from './config/env';
import axios from 'axios';

export const App: React.FC = () => {
  const { isPending, error, data } = useQuery({
    queryKey: [shoppingListQueryKey],
    queryFn: () =>
      axios.get(`${API_URL}/items/get-all`).then((res) => res.data),
  });

  if (isPending) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <Container >
      {
        data.length === 0 ? <EmptyListPanel /> : <ShoppingList items={data} />
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
