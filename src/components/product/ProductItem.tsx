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
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
        <DialogTitle>{'More about the product'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">{`ID : ${id}`}</DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">{`NAME : ${name}`}</DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">{`YEAR : ${year}`}</DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">{`COLOR : ${color}`}</DialogContentText>
          <DialogContentText id="alert-dialog-slide-description">
            {`PAYTONE VALUE : ${pantone_value}`}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </ProductBox>
  );
};

export default ProductItem;
