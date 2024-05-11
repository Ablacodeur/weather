import { Box, Grid, Stack } from '@mui/material';
import CurrentWeatherCard from '../CurrentWeatherCard/CurrentWeatherCard';
import NextHoursForecast from '../NextHoursForecast/NextHoursForecast';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function FirstFloor({getTheName,nameValue }) {
  const weather = useSelector((store) => store.WEATHER.weatherInfo);
  const currentWeather = weather.current;
  const dayInfo = weather.daily;
  const nextHours = weather.hourly;
  const timezone = weather.timezone_offset; // Assuming timezone_offset contains the offset in seconds

  // Fonction pour convertir l'heure UTC en heure locale en fonction du décalage horaire spécifique à la ville
  const convertUTCToLocalTime = (utcTimestamp, timezoneOffset) => {
    const date = new Date(utcTimestamp * 1000 + timezoneOffset * 1000); // Ajouter le décalage horaire spécifique à la ville en millisecondes
    const hours = date.getUTCHours(); // Obtenir l'heure UTC
    const minutes = date.getUTCMinutes(); // Obtenir les minutes UTC
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
  };

  // Fonction pour filtrer les prévisions toutes les trois heures
  function filterNextThreeHours() {
    // Filtrer les prévisions toutes les trois heures
    if (nextHours) {
      const filteredHours = nextHours.slice(0, 23).filter((hour, index) => index % 3 === 1 || index === 1);
      return filteredHours;
    }
  }

  // Stocker les prévisions filtrées dans un tableau
  const filteredNextHours = filterNextThreeHours();

  console.log(nameValue);
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          '@media (max-width: 960px)': {
            flexDirection: 'column',
            gap: '20px',
          },
        }}
      >
        <Box>
        <CurrentWeatherCard
            temperature={currentWeather && Math.round(currentWeather.temp)}
            city={nameValue.length>0 && nameValue.length!== undefined? nameValue[0].name : weather.timezone}
            hour={currentWeather && convertUTCToLocalTime(currentWeather.dt, weather.timezone_offset)}
            weatherIcon={currentWeather && currentWeather.weather[0].icon}
            weatherName={currentWeather && currentWeather.weather[0].main}
            wind={currentWeather && currentWeather.wind_speed}
            feelLike={currentWeather && Math.round(currentWeather.feels_like)}
            min={dayInfo && Math.round(dayInfo[0].temp.min)}
            max={dayInfo && Math.round(dayInfo[0].temp.max)}
/>
        </Box>

        <Box sx={{ marginLeft: { lg: '65px', md: '10px' }, width: '100%' }}>
          <Grid container columnSpacing={4} rowSpacing={1}>
            {filteredNextHours && filteredNextHours.map((hour, index) => (
              <Grid item xs={3} sm={2} md={1.5} key={index}>
                <NextHoursForecast
                  hour={convertUTCToLocalTime(hour.dt, timezone)}
                  weatherIcon={hour.weather[0].icon}
                  weatherName={hour.weather[0].main}
                  temperature={Math.round(hour.temp)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
}
