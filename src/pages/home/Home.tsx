import React, { useEffect, useState } from 'react';
import { HomeBox, FilterTextField } from './Home.styled';
import { Typography } from '@mui/material';
import axios from 'axios';
import ProductItem from '../../components/product/ProductItem';

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

  return (
    <HomeBox>
      <Typography variant={'h4'}>The Codibly's task</Typography>
      <FilterTextField id="outlined-basic" label="Filter-only numbers" variant="outlined" />
      <ProductItem></ProductItem>
    </HomeBox>
  );
};

export default Home;
