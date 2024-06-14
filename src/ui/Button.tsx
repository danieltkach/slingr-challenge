import React from 'react';
import styled from 'styled-components';
import { Button as MUIButton } from '@mui/material';

type Props = {
  text: string;
};

export const Button: React.FC<Props> = ({ text }) => {
  return (
    <StyledButton variant="contained" sx={{ textTransform: 'none' }}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled(MUIButton)`
  min-width: 9.5rem;
  height: 2.25rem;
  padding: 8px 15px 8px 15px;
  border-radius: 4px 0px 0px 0px;
  opacity: 0px;
  background: #1871E8 !important;
  font-size: 0.875;
`;
