import React from 'react';
import styled from 'styled-components';
import { ListItem } from "../../types";
import { Item } from './Item';
import { Button } from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { routeUrls } from '../../config/routes';

type Props = {
  items: ListItem[];
};

export const ShoppingList: React.FC<Props> = ({ items }) => {
  const navigateTo = useNavigate();

  return (
    <Container id="shopping-list">
      <ActionsPanel>
        <Typography variant="h2">Your Items</Typography>
        <Button variant={"contained"} text={"Add Item"} onClick={() => navigateTo(routeUrls.addItem)} />
      </ActionsPanel>
      <ItemsContainer>
        {
          items?.map(i => <Item key={i.id} item={i} />)
        }
      </ItemsContainer >
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 64rem;
  height: 100%;
  max-height: calc(100vh - 64px);
  padding-top: 2rem;
`;

const ItemsContainer = styled.div`
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

const ActionsPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;
