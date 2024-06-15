import styled from 'styled-components';
import { CircularProgress } from "@mui/material";

export const ScreenSpinner =()=> {
  return(
    <Container>
      <CircularProgress size={60} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
`;
