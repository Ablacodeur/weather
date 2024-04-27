import { Box, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import backImage from "../assets/images/earth.png"
import Navbar from '../Navbar/Navbar'
import FirsttFloor from '../FirstFloor/FirsttFloor'
import SecondFloor from '../SecondFloor/SecondFloor'
import { useDispatch } from 'react-redux'
import { DataAPI } from '../../api/weather-api'
import { setWeather } from '../../store/weather-slice'
import  {setCity} from '../../store/Larger-city-slice'

export default function Browser() {
  const  dispatch = useDispatch();
  // Charger les données météorologiques
    async function fetchWeatherData() {
      try {
        const weatherData = await DataAPI.fetchWeather();
        if (weatherData) {
          dispatch(setWeather(weatherData));
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }

// call other cities

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


      useEffect(() => {
        fetchWeatherData();
      }, []);

  return (
    <Box sx={{ 
        backgroundImage:`url(${backImage})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundColor:'#030616',
        color:'#F2F5F9',
        padding:"15px 30px 35px 30px",
        backgroundAttachment: 'fixed'
     }}>
    <Navbar />
    <Stack sx={{ justifyContent:'space-between',gap:'100px' }}>
    <FirsttFloor />
    <SecondFloor />
    </Stack>
    </Box>
  )
}
