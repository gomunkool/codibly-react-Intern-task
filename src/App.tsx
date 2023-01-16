import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Home from './pages/home/Home'

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  )
}

export default App
