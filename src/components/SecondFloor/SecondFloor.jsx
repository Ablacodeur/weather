import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import CurrentWeatherCard from '../CurrentWeatherCard/CurrentWeatherCard'
import NextHoursForecast from '../NextHoursForecast/NextHoursForecast'
import FiveDayForecast from '../FiveDayForecast/FiveDayForecast'
import OtherLargeCityCard from '../OtherLargeCityCard/OtherLargeCityCard'

export default function SecondFloor() {
  return (
    <Box >
    <Stack 
        direction="row"
        justifyContent="space-between"
        sx={{
          '@media (max-width: 960px)': {
            flexDirection:'column-reverse',
            gap:'20px'
          },
        }}>
    <Box  >
    <h4 >Other large cities</h4>

        <Stack  sx={{ justifyContent:'space-between',gap:'10px' }}>

            <OtherLargeCityCard/>
            <OtherLargeCityCard/>
            <OtherLargeCityCard/>
        </Stack>
    </Box>
    <Box sx={{ marginLeft:{md:'65px'}, width: '100%' }}>
    <h4>5-day forecast</h4>

    <Box sx={{display:'flex', justifyContent:'space-between'}}>
    <Grid container rowSpacing={4}  >
            {[...Array(5)].map((_, index) => (
              <Grid item xs={12}  key={index}>
                <FiveDayForecast/>
              </Grid>
            ))}
          </Grid>
    </Box>
    </Box>
    </Stack>
    </Box>
  )
}
