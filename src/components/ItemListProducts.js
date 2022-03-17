import * as React from 'react';
import {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalCustom from '../components/Modal';


export default function ImgMediaCard() {

  const [open, setOpen] = useState(false);

  const handleClose = (value) => {
      setOpen(false);
  };
  
  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        alt="camiseta real madrid"
        height="140"
        image= "https://source.unsplash.com/random/600x314"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Real Madrid (Titular)
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Agregar al Carrito</Button>
        <Button onClick={handleOpen}>Ver Detalles</Button>
      <ModalCustom handleClose={handleClose} open={open}>
        <img src='../img/rm.jpg'></img>
      </ModalCustom>

      <ModalCustom handleClose={handleClose} open={open}>
        
      </ModalCustom>
        
      </CardActions>
    </Card>
  );
}