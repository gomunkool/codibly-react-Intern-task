import React, { useEffect, useState } from 'react';
import { HomeBox, FilterTextField } from './Home.styled';
import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import ProductItem from '../../components/product/ProductItem';

export type Product = {
  id: number;
  name: string;
  color: string;
  year: number;
  pantone_value: string;
};

interface IProducts {
  ProductList: Product[];
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      axios.get('https://reqres.in/api/products').then((resp) => {
        const respProducts = resp.data.data;
        setProducts(respProducts);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const renderProducts = () => {
    return products.map(({ id, name, color, year, pantone_value }: Product): JSX.Element => {
      console.log(id);
      return (
        <Grid key={id} item xs={6}>
          <Box>1</Box>
        </Grid>
      );
    });
  };

  return (
    <HomeBox>
      <Typography variant={'h4'}>The Codibly's task</Typography>
      <FilterTextField id="outlined-basic" label="Filter-only numbers" variant="outlined" />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {renderProducts()}
        {/* 
        <Grid item xs={6}>
          <Box>1</Box>
        </Grid>
        <Grid item xs={6}>
          <Box>2</Box>
        </Grid>
        <Grid item xs={6}>
          <Box>3</Box>
        </Grid>
        <Grid item xs={6}>
          <Box>4</Box>
        // </Grid> */}
      </Grid>
    </HomeBox>
  );
};

export default Home;
