import { styled } from '@mui/material/styles';
import { Box, CardContent } from '@mui/material';

export const ProductBox = styled(Box)(({}) => ({
  width: '80%',
  margin: '0 auto',
}));

export const ProductCardContent = styled(CardContent)(({}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 30px',
}));
