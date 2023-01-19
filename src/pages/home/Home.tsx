import React, { useEffect, useState } from 'react';
import {
  HomeBox,
  FilterTextField,
  PaginationBox,
  TestBox,
  TestBoxItem,
  TestTypography,
} from './Home.styled';
import Error from '../error/Error';
import { Grid, Pagination, Typography } from '@mui/material';
import axios from 'axios';
import ProductItem from '../../components/product/ProductItem';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setFirstTest, setSecondTest } from '../../store/features/testSlice';

export type Product = {
  id: number;
  name: string;
  color: string;
  year: number;
  pantone_value: string;
};

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const firstTest = useAppSelector((state) => state.test.firstTest);
  const secondTest = useAppSelector((state) => state.test.secondTest);

  const [products, setProducts] = useState<Product[]>([]);
  const [paginationPage, setPaginationPage] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    getProductsRequest();
  }, []);

  const getProductsRequest = () => {
    axios
      .get('https://reqres.in/api/products/')
      .then((resp) => {
        const respProducts: Product[] = resp.data.data;
        const respPagination = resp.data.total_pages;
        setProducts(respProducts);
        setPaginationPage(respPagination);
        setIsError(false);
      })
      .catch(function (err) {
        const errMessage = err.message;
        setErrorMessage(errMessage);
        setIsError(true);
      });
  };

  const renderProducts = (): JSX.Element[] => {
    return products
      .map(({ id, name, color, year, pantone_value }: Product): JSX.Element => {
        return (
          <Grid key={id} item xs={12}>
            <ProductItem
              id={id}
              name={name}
              color={color}
              year={year}
              pantone_value={pantone_value}
            />
          </Grid>
        );
      })
      .slice(0, 5);
  };

  const changePagination = (event: React.ChangeEvent<unknown>, page: number): void => {
    axios
      .get(`https://reqres.in/api/products?page=${page}`)
      .then((resp) => {
        const respProducts: Product[] = resp.data.data;
        setProducts(respProducts);
      })
      .catch(function (err) {
        const errMessage = err.message;
        setErrorMessage(errMessage);
        setIsError(true);
      });
  };

  const filterProducts = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const filterEventValue = event.target.value;
    if (+filterEventValue) {
      setFilterValue(filterEventValue);
      axios
        .get(`https://reqres.in/api/products/${filterEventValue}`)
        .then((resp) => {
          const respProduct: Product[] = [resp.data.data];
          setProducts(respProduct);
          setPaginationPage(1);
          setIsError(false);
        })
        .catch(function (err) {
          const errMessage = err.message;
          setErrorMessage(errMessage);
          setIsError(true);
        });
    }
    if (filterEventValue === '') {
      setFilterValue(filterEventValue);
      getProductsRequest();
    }
  };

  return (
    <HomeBox>
      <Typography variant={'h4'}>The Codibly's task</Typography>
      <FilterTextField
        id="outlined-basic"
        label="Filter ID-only numbers"
        variant="outlined"
        onChange={filterProducts}
        value={filterValue}
      />
      {isError ? (
        <Error text={errorMessage} />
      ) : (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {renderProducts()}
        </Grid>
      )}

      <PaginationBox>
        <Pagination count={paginationPage} color="primary" onChange={changePagination} />
      </PaginationBox>

      <TestBox>
        <TestBoxItem>
          <FilterTextField
            id="outlined-basic"
            label="test1"
            variant="outlined"
            onChange={(e) => {
              dispatch(setFirstTest(e.target.value));
            }}
          />
          <TestTypography variant={'h5'}>{firstTest}</TestTypography>
        </TestBoxItem>
        <TestBoxItem>
          <FilterTextField
            id="outlined-basic"
            label="test2"
            variant="outlined"
            onChange={(e) => {
              dispatch(setSecondTest(e.target.value));
            }}
          />
          <TestTypography variant={'h5'}>{secondTest}</TestTypography>
        </TestBoxItem>
      </TestBox>
    </HomeBox>
  );
};

export default Home;
