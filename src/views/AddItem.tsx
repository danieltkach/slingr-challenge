import { TextField, Typography } from '@mui/material';
import TextArea from '../ui/TextArea';
import { Select } from '../ui/Select';
import { Card as MUICard } from '@mui/material';
import styled from 'styled-components';
import { Button } from '../ui/Button';


export const AddItem = () => {
  return (
    <Container>
      <StyledCard>
        <Content>
          <Typography variant="h2" sx={{ marginBottom: '1.125rem' }}>Add an Item</Typography>
          <Typography variant="h3" sx={{ marginBottom: '1.125rem' }}>Add your new item below</Typography>
          <TextField id="item-name" label="Item Name" variant="outlined" sx={{ marginBottom: '1.125rem' }} />
          <TextArea sx={{ marginBottom: '1.125rem' }} />
          <Select sx={{ marginBottom: '1.125rem' }} />
        </Content>
        <Actions>
          <Button text={'Cancel'} />
          <Button text={'Add Task'} variant={"contained"} sx={{ marginLeft: '1.5rem' }} />
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
