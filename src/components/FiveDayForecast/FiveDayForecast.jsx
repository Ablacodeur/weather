import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import s from "./style.module.css"
export default function FiveDayForecast({ weatherIcon, day, min, max, currentTemp }) {
  // Calcul de la plage des valeurs possibles
  const temperatureRange = max - min;

  // Calcul du pourcentage que la température actuelle occupe entre min et max
  const percentage = ((currentTemp - min) / temperatureRange) * 100;

  return (
    <div>
      <Card sx={{ width: '100%', height: { md: "48px", xs: '30px' }, borderRadius: '15px' }}>
        <CardContent sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
          <Box>
            <Typography variant='body1'>{day}</Typography>
          </Box>
          <Box>
            <Typography variant='p'>
              <img src={`https://openweathermap.org/img/wn/${weatherIcon}.png`} style={{ objectFit: 'cover' }} className={s.blue} alt="Weather Icon" />
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '70%',gap:'4px' }}>
            <Typography variant='body1'>{min}° </Typography>
            {/* Barre de progression */}
            <div className="progress" role="progressbar" aria-label="Basic example"  style={{ width: "100%", height:'10px' , backgroundColor: '#030617'}}>
            <div className="progress-bar" style={{ width: `${percentage}%`, background: `linear-gradient(65deg, #314176 40%, #FF6347  ${percentage}%)` }}></div>
            </div>            
            <Typography variant='body1'>{max}° </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}
