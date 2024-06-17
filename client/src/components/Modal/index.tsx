import React from 'react';
import Dialog from '@mui/material/Dialog';
import styled from 'styled-components';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '../Button';
import { useModalStore } from '../Modal/modalStore';

export const Modal: React.FC = () => {
  const { state: { isOpen, title, message }, setState } = useModalStore();

  function onCancelClick() {
    setState({ isOpen: false, result: "cancel", itemId: undefined, title: "", message: "" });
  }

  function onConfirmClick() {
    setState({ isOpen: false, result: "confirm", title: "", message: "" });
  }

  return (
    <Dialog
      open={isOpen}
      onClose={onCancelClick}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent
        sx={{ width: '26rem', maxHeight: '17rem' }}

      >
        <DialogContentText id="alert-dialog-description">
          {message}
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
