import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function NextHoursForecast() {
  return (
    <div>
        <Card sx={{ maxWidth: 100, minHeight:'22vh',borderRadius:'25px' }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
            </Typography>
        </CardContent>
        </Card>
        </div>
  )
} 
