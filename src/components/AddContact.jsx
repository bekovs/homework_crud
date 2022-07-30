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

export default function AddContact({open, handleClose, handleContact}) {

  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [phone, setPhone] = useState('');
  let [image, setImage] = useState('');
  let [alert, setAlert] = useState(false);

  const handleAdd = () => {
    if (!name.trim() || !phone.trim()){
      setAlert(true);
      return;
    } else {
      setAlert(false);
    }

    let newContact = {
      name,
      email,
      phone,
      image,
      id: Date.now(),
    };

    handleContact(newContact);

    setName('');
    setEmail('');
    setPhone('');
    setImage('');
    handleClose();
  }

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
            {alert ? (<Alert severity="warning" sx={{mb: 2}}>Name and Phone are required</Alert>) : ''} 
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add new contact
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2, display: 'flex',  flexDirection: 'column', width: '100%'}} component="div">
            <FormControl sx={{mt: 1}}>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={name} onChange={(e)=>setName(e.target.value)} />
            </FormControl>
            <FormControl sx={{mt: 2}}>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </FormControl>
            <FormControl sx={{mt: 2}}>
              <InputLabel htmlFor="my-input">Phone number</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            </FormControl>
            <FormControl sx={{mt: 2}}>
              <InputLabel htmlFor="my-input">Image</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" value={image} onChange={(e)=>setImage(e.target.value)} />
            </FormControl>
            </Typography>
            <Box sx={{mt: 4, width: '100%', display: 'flex', justifyContent: 'space-between'}}>
              <Button onClick={handleAdd}>Create new contact</Button>
              <Button color={'warning'} onClick={handleClose}>Close</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}