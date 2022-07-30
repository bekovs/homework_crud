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
import Alert from '@mui/material/Alert'

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

export default function EditContact({ editModal, handleEditClose, editContact, handleSave }) {

  const [contact, setContact] = useState(editContact);
  console.log(editContact);
  console.log(contact);
  
  // let [alert, setAlert] = useState(false);
  let alert = false;

  const editName = (e) => {
    let newObj = {
      ...contact,
      name: e.target.value,
    };
    setContact(newObj);
  };

  const editEmail = (e) => {
    let newObj = {
      ...contact,
      email: e.target.value,
    };
    setContact(newObj);
  };

  const editPhone = (e) => {
    let newObj = {
      ...contact,
      phone: e.target.value,
    };
    setContact(newObj);
  };

  const editImage = (e) => {
    let newObj = {
      ...contact,
      image: e.target.value,
    };
    setContact(newObj);
  };


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={editModal}
        onClose={handleEditClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={editModal}>
          <Box sx={style}>
            {alert ? (<Alert severity="warning" sx={{mb: 2}}>Name and Phone are required</Alert>) : ''} 
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Edit contact
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2, display: 'flex',  flexDirection: 'column', width: '100%'}} component="div">
            <FormControl sx={{mt: 1}}>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={contact.name} onChange={editName} />
            </FormControl>
            <FormControl sx={{mt: 2}}>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={contact.email} onChange={editEmail} />
            </FormControl>
            <FormControl sx={{mt: 2}}>
              <InputLabel htmlFor="my-input">Phone number</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={contact.phone} onChange={editPhone} />
            </FormControl>
            <FormControl sx={{mt: 2}}>
              <InputLabel htmlFor="my-input">Image</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={contact.image} onChange={editImage} />
            </FormControl>
            </Typography>
            <Box sx={{mt: 4, width: '100%', display: 'flex', justifyContent: 'space-between'}}>
              <Button onClick={handleSave}>Save changes</Button>
              <Button color={'warning'} onClick={handleEditClose}>Close</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}