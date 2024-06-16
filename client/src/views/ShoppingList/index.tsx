import React  from 'react';
import styled from 'styled-components';
import { ListItem } from "../../types";
import { Item } from './Item';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { routeUrls } from '../../config/routes';
import { useListItemStore } from '../../state/listItemStore';

type Props = {
  items: ListItem[];
};

export const ShoppingList: React.FC<Props> = ({ items }) => {
  const { resetListItem } = useListItemStore();
  const navigateTo = useNavigate();

  function onAddItemClick() {
    resetListItem();
    navigateTo(routeUrls.editItem);
  }

  return (
    <Container id="shopping-list">
      <ActionsPanel>
        <Typography variant="h2">Your Items</Typography>
        <Button variant={"contained"} text={"Add Item"} onClick={onAddItemClick} />
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
