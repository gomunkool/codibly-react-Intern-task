import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/home/Home';
import Error from './pages/error/Error';

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error text={'404'} />} />
      </Routes>
    </Box>
  );
}

export default App;
