import React from 'react';
import { ErrorBox } from './Error.styled';
import { Typography } from '@mui/material';

interface IErrorProps {
  text: string;
}

const Error = (text: IErrorProps) => {
  console.log(text.text);
  return (
    <ErrorBox>
      <Typography variant={'h4'}>{`Error : ${text.text}`}</Typography>
    </ErrorBox>
  );
};

export default Error;
