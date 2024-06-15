import React from 'react';
import styled from 'styled-components';
import { Checkbox, Typography } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export const ShoppingList: React.FC =()=> {
  return(
    <Container>
      <Card>
        <Checkbox sx={{marginLeft: '1rem', marginRight: '1rem'}} />
        <Text>
          <Typography variant="h3">Tomatoes</Typography>
          <Typography variant="h4">Green cherry tomatoes</Typography>
        </Text>
        <Icons>
          <ModeEditOutlineOutlinedIcon />
          <DeleteOutlineOutlinedIcon />
        </Icons>
      </Card>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid #D5DFE9;
  width: 64rem;
  height: 5.4rem;
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
