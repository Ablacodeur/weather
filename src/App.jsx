import React from 'react'
import Browser from './components/Browser/Browser'
import s from './style.module.css'
import { Box } from '@mui/material'

export default function App() {
  return (
    <Box className={s.container}>
      <Browser />
    </Box>
  )
}
