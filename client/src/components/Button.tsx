import React from 'react';
import styled from 'styled-components';
import { Button as MUIButton, SxProps } from '@mui/material';

type Props = {
  text: string;
  variant?: "contained" | "text" | "outlined"
  onClick?: () => void;
  sx?: SxProps;
};

export const Button: React.FC<Props> = ({ text, variant = "text", onClick, sx }) => {
  return (
    <StyledButton variant={variant} sx={{ ...sx, textTransform: 'none' }} onClick={onClick} >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled(MUIButton)<{ variant: "contained" | "text" | "outlined" }>`
  min-width: 9.5rem;
  height: 2.25rem;
  padding: 8px 15px;
  font-size: 0.875rem;

  ${(props) =>
    props.variant === "contained" &&
    `
    background: #1871E8 !important;
    border-radius: 4px 0px 0px 0px;
  `}
`;
