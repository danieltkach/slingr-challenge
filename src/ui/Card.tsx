import React, { ReactNode } from 'react';
import { Card as MUICard } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

export const Card: React.FC<Props> = ({ children }) => {
  return (
    <StyledCard>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
        {children}
      </CardContent>
    </StyledCard>
  );
};

const StyledCard = styled(MUICard)`
  width: 38.375rem;
  height: 18.125rem;
  padding: 4.5rem;
  box-shadow: none !important;
  border: 1px solid #C6C6C6;
  border-radius: 5px;
`;
