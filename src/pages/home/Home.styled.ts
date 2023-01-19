import { styled } from '@mui/material/styles';
import { Box, TextField, Typography } from '@mui/material';

export const HomeBox = styled(Box)(({}) => ({
  height: '100vh',
  textAlign: 'center',
  padding: '20px 0',
}));

export const FilterTextField = styled(TextField)(({}) => ({
  margin: '20px 0',
  width: '300px',
}));

export const PaginationBox = styled(Box)(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  margin: '30px 0',
}));

export const TestBox = styled(Box)(({}) => ({
  padding: '0 200px ',
}));

export const TestBoxItem = styled(Box)(({}) => ({
  display: 'flex',
  alignItems: 'center',
}));

export const TestTypography = styled(Typography)(({}) => ({
  marginLeft: '50px',
}));
