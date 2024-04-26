import { Box, Grid, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import FiveDayForecast from '../FiveDayForecast/FiveDayForecast'
import OtherLargeCityCard from '../OtherLargeCityCard/OtherLargeCityCard'
import { DataAPI } from '../../api/weather-api'
import { useDispatch, useSelector } from 'react-redux'
import { setCity } from '../../store/Larger-city-slice'

export default function SecondFloor() {
  const dispatch = useDispatch();

  const weather = useSelector((store) => store.CITY.LargerCity);
  console.log(weather);


  async function fetchNY() {
    try {
      const weatherData = await DataAPI.NewYork();
      if (weatherData) {
        dispatch(setCity(weatherData));
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  async function fetchMontreal() {
    try {
      const weatherData = await DataAPI.Montreal();
      if (weatherData) {
        dispatch(setCity(weatherData));
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  async function fetchFlorida() {
    try {
      const weatherData = await DataAPI.Floride();
      if (weatherData) {
        dispatch(setCity(weatherData));
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  useEffect(() => {
    fetchMontreal();
  }, []);

  useEffect(() => {
    fetchFlorida();
  }, []);

  useEffect(() => {
    fetchNY();
  }, []);

  return (
    <Box>
      <Stack 
        direction="row"
        justifyContent="space-between"
        sx={{
          '@media (max-width: 960px)': {
            flexDirection:'column-reverse',
            gap:'20px'
          },
        }}
      >
        <Box>
          <h4>Other large cities</h4>
          <Stack sx={{ justifyContent:'space-between', gap:'10px' }}>
          { weather && weather.map((city,index)=>{

             //function to split the timmezone name 

            const timezones = city.timezone;
                console.log(timezones);

                let newTimezoneCity = '';
                let newTimezoneContinent = '';


                if(timezones){
                  const timezoneParts = timezones.split('/');
                  newTimezoneCity = timezoneParts[timezoneParts.length - 1];
                  
                  const timezonePartOne = timezones.split('/', 2); // Limite de découpage à 2
                  newTimezoneContinent = timezonePartOne[0];
                }

            return(
              <OtherLargeCityCard
              key={index}
              continent={newTimezoneContinent}
              city={city && newTimezoneCity} // Utilisation de la partie après le dernier slash
              weatherName={city.current.weather[0].main}
              weatherIcon={city.current.weather[0].icon}
              temperature={Math.round( city.current.temp)}
            />
            )
          })}
          </Stack>
        </Box>
        <Box sx={{ marginLeft: { lg: '65px' , md:'10px'}, width: '100%' }}>
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
  );
}
