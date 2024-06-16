import React from 'react';
import Dialog from '@mui/material/Dialog';
import styled from 'styled-components';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from './Button';

type Props = {
  open: boolean;
  onClose: (confirmed: boolean) => void;
};

export const Modal: React.FC<Props> = ({ open, onClose }) => {
  function onCancelClick() {
    onClose(false);
  }

  function onConfirmClick() {
    onClose(true)
  }

  return (
    <Dialog
      open={open}
      onClose={()=>onClose(false)}
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
        <Button text={"Cancel"} onClick={onCancelClick} sx={{ marginRight: '1rem' }} />
        <Button variant={"contained"} text={"Delete"} onClick={onConfirmClick} />
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
