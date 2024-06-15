import React from 'react';
import Dialog from '@mui/material/Dialog';
import styled from 'styled-components';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '../ui/Button';

type Props = {
  open: boolean;
  setOpen: (state: boolean) => void;
};

export const Modal: React.FC<Props> = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Delete item?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this item? This can not be undone.
        </DialogContentText>
      </DialogContent>
      <Actions>
        <Button text={"Cancel"} onClick={handleClose} sx={{ marginRight: '1rem' }} />
        <Button variant={"contained"} text={"Delete"} onClick={handleClose} />
      </Actions>
    </Dialog>
  );
};

const Actions = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
`;
