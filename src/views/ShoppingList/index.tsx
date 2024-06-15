import React from 'react';
import styled from 'styled-components';
import { ListItem } from "../../types";
import { Item } from './Item';

type Props = {
  items: ListItem[];
}

export const ShoppingList: React.FC<Props> =({items})=> {
  return(
    <Container>
      {
        items?.map(i => <Item key={i.id} item={i} />)
      }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
`;
