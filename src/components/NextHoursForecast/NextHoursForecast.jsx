import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import s from './style.module.css'

export default function NextHoursForecast({hour,weatherIcon,weatherName,temperature}) {
  return (
    <div>
        <Card sx={{ maxWidth: 100, height: {sm:'15vh', md:'15%', lg:'22vh'},borderRadius:'25px' }}>
        <CardContent>
          <Stack sx={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',textAlign:'center' }}>
            <Box >
                <Typography variant='body1'>{hour}</Typography>
            </Box> 
         
            <Box >
                <Typography variant='p'>
                  <img src={`https://openweathermap.org/img/wn/${weatherIcon}.png`} style={{ objectFit:'cover' }} className={s.blue}  alt="Weather Icon" />
                  {weatherName}
                </Typography>
            </Box>

            <Box>
                <Typography variant='body1'>{temperature}°</Typography>
            </Box>

          </Stack>
        </CardContent>

        </Card>
        </div>
  )
} 
