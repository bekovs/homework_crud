import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Contact({ contact, handleDelete, handleEdit }) {
  return (
    <Card sx={{ maxWidth: 500, maxHeight: 200, display: 'flex', justifyContent: 'space-between' , mb: 4, mx: 4}}>
      <CardContent sx={{maxWidth: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <Typography gutterBottom variant="h5" component="div">
          {contact.name}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {contact.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {contact.email}
        </Typography>
        <CardActions sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', ml: -1 }}>
          <Button size="small" onClick={()=>handleEdit(contact.id)}>Edit</Button>
          <Button size="small" color='warning' onClick={()=>handleDelete(contact.id)}>Delete</Button>
        </CardActions>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={contact.image ? contact.image : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'}
        alt="contact image"
      />
    </Card>
  );
}