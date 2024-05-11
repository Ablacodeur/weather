import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import React from 'react';
import s from "./style.module.css";
import wind_img from '../assets/images/wind.png'

export default function CurrentWeatherCard({ temperature, city, hour, weatherIcon, weatherName, wind, feelLike ,min, max}) {
  return (
    <div>
      <Card sx={{ minWidth: 275, height: {sm:'15vh', md:'15%', lg:'22vh'}, borderRadius: '20px' }}>
        <CardContent>
          <Stack>
            <Box>
              <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='h4'>{temperature}°</Typography>
                <Box>
                  <Typography variant='h5'>{city}</Typography>
                  <Typography variant='body2' style={{ display: 'flex', justifyContent: 'flex-end' }}>{hour}</Typography>
                </Box>
              </Stack>
            </Box>
            <Box >
              <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Utilisez la prop weatherIcon pour définir la source de l'image */}
                <Typography variant='p'>
                  {weatherIcon && <img src={`https://openweathermap.org/img/wn/${weatherIcon}.png`} style={{ objectFit:'cover' }}  className={s.blue} alt="Weather Icon" />}
                  {weatherName}
                </Typography>
                <Typography variant='p'>
                  <img src={wind_img} alt="wind" style={{ maxHeight:'30px' ,margin:'10px' }} />
                   {wind} m/s
                </Typography>
              </Stack>
            </Box>

            <Box>
              <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='body1'> Feel like: {feelLike} °C</Typography>
                <Typography variant='body1'>{min}° to {max}°</Typography>
              </Stack>
            </Box>

          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}
