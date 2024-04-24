import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import SwitcheInput from '../Switch/SwitchInput'

export default function Navbar() {
  return (
    <Box sx={{
      marginBottom: '7%',
      }}>
     <Stack
       display='flex'
       justifyContent='space-between'
       flexDirection='row'
     >
       <SearchBar />
       <SwitcheInput />
     </Stack> 
   </Box>
)
}
