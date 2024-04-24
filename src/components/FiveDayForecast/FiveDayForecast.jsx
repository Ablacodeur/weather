import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function FiveDayForecast() {
  return (
    <div>
        <Card sx={{ width: '100%', maxHeight:'6vh',borderRadius:'15px' }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
            </Typography>
        </CardContent>
        </Card>
        </div>
  )
} 
