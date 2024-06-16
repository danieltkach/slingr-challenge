import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card } from './Card';
import { Button } from './Button';
import { routeUrls } from '../config/routes';
import { useNavigate } from 'react-router-dom';

const title = "Your shopping list is empty :(";
const buttonText = "Add your first item";

export const EmptyListPanel: React.FC = () => {
  const navigateTo = useNavigate();
  
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        marginTop: '10rem'
      }}
    >
      <Card>
        <Typography variant="h2">
          {title}
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <Button 
            text={buttonText} 
            variant={"contained"} 
            onClick={()=>navigateTo(routeUrls.editItem)}
          />
        </Box>
      </Card>
    </Box>
  );
};
