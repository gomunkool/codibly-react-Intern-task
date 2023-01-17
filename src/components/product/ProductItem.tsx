import React, { useState } from 'react';
import { ProductBox, ProductCardContent } from './ProductItem.styled';
import { Product } from '../../pages/home/Home';
import {
  Card,
  CardActionArea,
  Dialog,
  Typography,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Button,
} from '@mui/material';

const ProductItem = ({ id, name, color, year, pantone_value }: Product) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ProductBox>
      <Card>
        <CardActionArea
          onClick={() => {
            handleClickOpen();
          }}
        >
          <ProductCardContent style={{ backgroundColor: `${color}` }}>
            <Typography gutterBottom variant="h5" component="div">
              {id}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {year}
            </Typography>
          </ProductCardContent>
        </CardActionArea>
      </Card>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </ProductBox>
  );
};

export default ProductItem;
