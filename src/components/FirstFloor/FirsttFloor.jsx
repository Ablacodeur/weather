import { Box, Grid, Stack } from '@mui/material';
import CurrentWeatherCard from '../CurrentWeatherCard/CurrentWeatherCard';
import NextHoursForecast from '../NextHoursForecast/NextHoursForecast';
import {useSelector } from 'react-redux';

export default function FirstFloor() {
  const weather = useSelector((store) => store.WEATHER.weatherInfo);
  const currentWeather = weather.current;
  const dayInfo = weather.daily;
  const nextHours = weather.hourly;

  // convert UTC to local time format
  const convertUTCToLocalTime = (utcTimestamp) => {
    const date = new Date(utcTimestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  // Fonction pour filtrer les prévisions toutes les trois heures
  function filterNextThreeHours() {
    // Filtrer les prévisions toutes les trois heures
    if(nextHours){
      const filteredHours = nextHours.slice(0,23).filter((hour, index) => index % 3 === 1 || index === 1);
      return filteredHours;
      }
  }
  // Stocker les prévisions filtrées dans un tableau
    const filteredNextHours = filterNextThreeHours();
   
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
            city={weather && weather.timezone}
            hour={currentWeather && convertUTCToLocalTime(currentWeather.dt)}
            weatherIcon={currentWeather && currentWeather.weather[0].icon}
            weatherName={currentWeather && currentWeather.weather[0].main}
            wind={currentWeather && currentWeather.wind_speed}
            feelLike={currentWeather && Math.round(currentWeather.feels_like)}
            min={dayInfo && Math.round(dayInfo[0].temp.min)}
            max={dayInfo && Math.round(dayInfo[0].temp.max)}
          />
        </Box>

        <Box sx={{ marginLeft: { lg: '65px' , md:'10px'}, width: '100%' }}>
          <Grid container columnSpacing={4} rowSpacing={1}>
            {filteredNextHours && filteredNextHours.map((hour, index) => (
              <Grid item xs={3} sm={2} md={1.5} key={index}>
                <NextHoursForecast 
                hour={convertUTCToLocalTime(hour.dt)} 
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
