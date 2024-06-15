import React from 'react';
import { Select as MUISelect } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { SxProps } from '@mui/system';

type Props = {
  sx?: SxProps;
}

export const Select: React.FC<Props> = ({sx}) => {
  const [value, setValue] = React.useState<number>(10);

  const handleChange = (event: SelectChangeEvent<number>) => {
    setValue(Number(event.target.value));
  };

  return (
    <FormControl fullWidth variant="outlined" sx={sx}>
      <InputLabel id="select-label">How Many?</InputLabel>
      <MUISelect
        labelId="select-label"
        value={value}
        onChange={handleChange}
        label="How many?"
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
      </MUISelect>
    </FormControl>
  );
};
