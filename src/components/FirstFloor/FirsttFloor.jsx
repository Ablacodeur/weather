import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import CurrentWeatherCard from '../CurrentWeatherCard/CurrentWeatherCard'
import NextHoursForecast from '../NextHoursForecast/NextHoursForecast'

export default function FirstFloor() {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          '@media (max-width: 960px)': {
            flexDirection: 'column',
            gap:'20px',
          },
        }}
      >
        <Box>
          <CurrentWeatherCard />
        </Box>
        
        <Box sx={{ marginLeft: { md: '65px' },  width: '100%' }}>

          <Grid container columnSpacing={4} rowSpacing={1}>
            {[...Array(8)].map((_, index) => (
              <Grid item xs={2} sm={2} lg={1.5} key={index}>
                <NextHoursForecast />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Box>
  )
}
