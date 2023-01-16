import { styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';

export const HomeBox = styled(Box)(({}) => ({
  height: '100vh',
  textAlign: 'center',
  padding: '20px 0',
}));

export const FilterTextField = styled(TextField)(({}) => ({
  margin: '20px 0',
  width: '300px',
}));
