import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

const title = "Your shopping list is empty :(";
const buttonText = "Add your first item";

export const EmptyListPanel: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
      }}
    >
      <Card>
        <Typography variant="h2">
          {title}
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Button text={buttonText} variant={"contained"} />
        </Box>
      </Card>
    </Box>
  );
};
