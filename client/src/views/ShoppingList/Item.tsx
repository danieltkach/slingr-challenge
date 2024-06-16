import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ListItem } from "../../types";
import { Checkbox, Typography } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import { useListItemStore } from '../../state/listItemStore';
import { routeUrls } from '../../config/routes';
import axios from 'axios';
import { API_URL } from '../../config/env';
import { shoppingListQueryKey } from '../../state/queryKeys';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../main';
import { useModalStore } from '../../components/Modal/modalStore';

type Props = {
  item: ListItem;
};

export const Item: React.FC<Props> = ({ item }) => {
  const { name, description, active } = item;
  const { setListItem } = useListItemStore();
  const navigateTo = useNavigate();
  const { state: modalState, setState: setModalState } = useModalStore();

  function onEditClick() {
    setListItem(item);
    navigateTo(routeUrls.editItem);
  }

  const deletingApi = useMutation({
    mutationFn: (item: ListItem) =>
      axios.put(`${API_URL}/items/delete/${item.id}`).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [shoppingListQueryKey] });
    },
    onError: (e) => {
      alert(`${e.message}`);
      console.error(e);
    }
  });

  function onDeleteClick() {
    setModalState({isOpen: true, itemId: item.id});
  }

  useEffect(()=>{
    if(modalState.result === "confirm" && modalState.isOpen === false && item.id === modalState.itemId) {
      deletingApi.mutate(item);
    }
  }, [modalState.result, modalState.isOpen, modalState.itemId, item.id]);
  
  return (
    <Card>
      <Checkbox sx={{ marginLeft: '1rem', marginRight: '1rem' }} checked={!active} />
      <Text>
        <Typography variant="h3" sx={{
          textDecoration: active ? 'none' : 'line-through',
        }}>{name}</Typography>
        <Typography variant="h4" sx={{
          textDecoration: active ? 'none' : 'line-through',
        }}>{description}</Typography>
      </Text>
      <Icons>
        <ModeEditOutlineOutlinedIcon sx={{ cursor: 'pointer' }} onClick={() => onEditClick()} />
        <DeleteOutlineOutlinedIcon sx={{ cursor: 'pointer' }} onClick={() => onDeleteClick()} />
      </Icons>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid #D5DFE9;
  width: 64rem;
  min-height: 5.4rem;
  border-radius: 4px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`;

const Icons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-right: 2rem;
`;
