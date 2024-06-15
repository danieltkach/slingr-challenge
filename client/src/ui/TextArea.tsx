import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { SxProps } from '@mui/system';

type Props = {
  sx?: SxProps;
  value: string;
  onChange: (value: string) => void;
};

const TextArea: React.FC<Props> = ({ sx, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Box position="relative" width="100%" sx={sx}>
      <StyledTextField
        label="Description"
        multiline
        rows={5}
        variant="outlined"
        fullWidth
        value={value}
        onChange={handleChange}
      />
      <CharacterCount>{value.length}/100</CharacterCount>
    </Box>
  );
};

export default TextArea;

const CharacterCount = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.6);
`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    padding: 10px;
    & textarea {
      resize: none;
    }
  }
`;
