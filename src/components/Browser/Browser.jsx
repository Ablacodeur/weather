import { Box, Stack } from '@mui/material'
import React from 'react'
import backImage from "../../assets/images/earth.png"
import Navbar from '../Navbar/Navbar'
import FirsttFloor from '../FirstFloor/FirsttFloor'
import SecondFloor from '../SecondFloor/SecondFloor'

export default function Browser() {
  return (
    <Box sx={{ 
        backgroundImage:`url(${backImage})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundColor:'#030616',
        color:'#F2F5F9',
        padding:"15px 30px 35px 30px"
     }}>
    <Navbar />
    <Stack sx={{ justifyContent:'space-between',gap:'100px' }}>
    <FirsttFloor />
    <SecondFloor />
    </Stack>
    </Box>
  )
}
