import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input'
import { FormControl, InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddProduct({open, handleClose}) {

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add new contact
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2, display: 'flex',  flexDirection: 'column', width: '100%'}} component="div">
            <FormControl sx={{mt: 1}}>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl sx={{mt: 2}}>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl sx={{mt: 2}}>
              <InputLabel htmlFor="my-input">Phone number</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl sx={{mt: 2}}>
              <InputLabel htmlFor="my-input">Image</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            </Typography>
            <Box sx={{mt: 4, width: '100%', display: 'flex', justifyContent: 'space-between'}}>
              <Button>Create new contact</Button>
              <Button color={'warning'}>Close</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}