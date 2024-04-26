import { Box, Card,CardContent, Stack, Typography } from '@mui/material'
import React from 'react'

export default function OtherLargeCityCard({continent,temperature,weatherName,weatherIcon,city}) {
  return (
    <div>
        <Card sx={{ minWidth: 275, minHeight:'15vh', borderRadius:'15px' }}>
        <CardContent>
          <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Box>
              <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant='body2'>{continent}</Typography>
                  <Typography variant='h4' style={{ display: 'flex', justifyContent: 'flex-start' }}>{city}</Typography>
                  <Typography variant='body1'>{weatherName}</Typography>
                </Box>

              </Stack>
            </Box>
            <Box >
              <Stack sx={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Utilisez la prop weatherIcon pour définir la source de l'image */}
                <Typography variant='p'>
                  <img src={`https://openweathermap.org/img/wn/${weatherIcon}.png`} style={{ objectFit:'cover' }}   alt="Weather Icon" />
                </Typography>
                <Typography variant='h5'>{temperature}°</Typography>
              </Stack>
            </Box>

          </Stack>
        </CardContent>
        </Card></div>
  )
}
