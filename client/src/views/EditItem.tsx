import { Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import TextArea from '../components/TextArea';
import { Select } from '../components/Select';
import { Card as MUICard } from '@mui/material';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useListItemStore } from '../state/listItemStore';
import { ListItem } from '../types';
import { shoppingListQueryKey } from '../state/queryKeys';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../main';
import axios from 'axios';
import { API_URL } from '../config/env';
import { routeUrls } from '../config/routes';

export const EditItem = () => {
  const { listItem, setListItem, resetListItem } = useListItemStore();
  const navigateTo = useNavigate();
  const isEditing = !!listItem?.id;

  const editingApi = useMutation({
    mutationFn: (newItem: ListItem) =>
      axios.post(`${API_URL}/items/edit`, newItem).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [shoppingListQueryKey] });
      resetListItem();
      navigateTo(routeUrls.home);
    },
    onError: (e) => {
      alert(`${e.message}`);
      console.error(e);
    }
  });

  function onSaveClick() {
    editingApi.mutate(listItem);
  }

  const handleChange = (
    field: keyof ListItem,
    value: string | number | boolean
  ) => {
    setListItem({
      [field]: value,
    });
  };

  return (
    <Container>
      <StyledCard>
        <Content>
          <Typography variant="h2" >{isEditing ? 'Edit an Item' : 'Add an Item'}</Typography>
          <Typography variant="h3" sx={{ marginBottom: '1.125rem' }}>{isEditing ? 'Edit your item below' : 'Add your new item below'}</Typography>

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
          {listItem?.id &&
            <FormControlLabel control={
              <Checkbox checked={!listItem.active} onChange={(event) => handleChange("active", !event.target.checked)} />
            }
              label="Purchased" />
          }
        </Content>
        <Actions>
          <Button text={'Cancel'} onClick={() => navigateTo(routeUrls.home)} />
          <Button text={isEditing ? 'Save Item' : 'Add Item'} variant={"contained"} sx={{ marginLeft: '1.5rem' }} onClick={() => onSaveClick()} />
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
