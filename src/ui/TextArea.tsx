import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const TextArea: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box position="relative" width="100%">
      <StyledTextField
        label="Description"
        multiline
        rows={4}
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
