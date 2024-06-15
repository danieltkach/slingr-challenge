import React from 'react';
import styled from 'styled-components';
import { ListItem } from "../../types";
import { Checkbox, Typography } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

type Props = { 
  item: ListItem;
}

export const Item: React.FC<Props> = ({item}) => {
  const {id, title, description, status} = item;

  return (
    <Card>
      <Checkbox sx={{ marginLeft: '1rem', marginRight: '1rem' }} checked={status === "done" ? true : false} />
      <Text>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="h4">{description}</Typography>
      </Text>
      <Icons>
        <ModeEditOutlineOutlinedIcon onClick={()=>console.log(id)} />
        <DeleteOutlineOutlinedIcon onClick={()=>console.log(id)} />
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
