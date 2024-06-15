import React, { useEffect } from 'react';
import { TextField, Typography } from '@mui/material';
import TextArea from '../ui/TextArea';
import { Select } from '../ui/Select';
import { Card as MUICard } from '@mui/material';
import styled from 'styled-components';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { useListItemStore } from '../state/listItemStore';
import { ListItem } from '../types';
import { shoppingListQueryKey } from '../state/queryKeys';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../main';
import axios from 'axios';
import { API_URL } from '../config/env';
import { routeUrls } from '../config/routes';

export const EditItem: React.FC<{id?: string}> = ({id}) => {
  const { listItem, setListItem, resetListItem } = useListItemStore();
  const navigateTo = useNavigate();

  const mutation = useMutation({
    mutationFn: (newItem: ListItem) =>
      axios.post(`${API_URL}/items/new`, newItem).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [shoppingListQueryKey] });
      navigateTo(routeUrls.home);
    },
    onError: () => {

    }
  });

  function onAddClick() {
    mutation.mutate(listItem);
  }

  const handleChange = (
    field: keyof ListItem,
    value: string | number | boolean
  ) => {
    setListItem({
      [field]: value,
    });
  };

  useEffect(() => {
    () => resetListItem();
  }, []);

  return (
    <Container>
      <StyledCard>
        <Content>
          <Typography variant="h2" >Add an Item</Typography>
          <Typography variant="h3" sx={{ marginBottom: '1.125rem' }}>Add your new item below</Typography>

          <TextField
            label="Item Name"
            variant="outlined"
            sx={{ marginBottom: '1.125rem' }}
            value={listItem.name}
            onChange={(event) => handleChange('name', event.target.value)}
          />
          <TextArea
            sx={{ marginBottom: '1.125rem' }}
            value={listItem.description}
            onChange={(value) => handleChange("description", value)}
          />
          <Select
            sx={{ marginBottom: '1.125rem' }}
            value={listItem.quantity}
            onChange={(value) => handleChange("quantity", value)}
          />
        </Content>
        <Actions>
          <Button text={'Cancel'} onClick={() => navigateTo(routeUrls.home)} />
          <Button text={'Add Task'} variant={"contained"} sx={{ marginLeft: '1.5rem' }} onClick={() => onAddClick()} />
        </Actions>
      </StyledCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  `;

const StyledCard = styled(MUICard)`
  display: flex;
  padding: 1.2rem;
  padding-top: 3rem;
  flex-direction: column;
  width: 35rem;
  height: 48rem;
  border: 1px solid #D5DFE9;
  border-bottom: 6px solid #4D81B7;
  box-shadow: 0px 0px 14px 0px #00000040;
`;

const Content = styled.div`
  display: flex; 
  flex-direction: column;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  padding: 0.2rem 0;
`;
