import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
  let lat  = '' ;  let lon = ''; 
  const [location, setLocation] = useState([]);
  const firstLocation = location[0];
  const [nameValue, setNameValue] = useState({});
  const [isDarkMode,setIsDarkMode] =useState('')

  //dark  mode function
  function modeState(mode){
    console.log(mode);
    setIsDarkMode(mode)
  }


  function initialValue(){
    lat  = 45.54; 
    lon = -73.51; 
  }

  // Fonction pour gérer le changement de location
  function handleLocationChange(newLocation){
    setLocation(newLocation);
    setNameValue(newLocation)
  };
  function handleName(){
    setNameValue(nameValue)
  }


  // function pour prendre la nouvelle latitude et longitude
    if(firstLocation){
      lat = firstLocation.lat
      lon= firstLocation.lon     }

  // Charger les données météorologiques
    async function fetchWeatherData() {
      try {
        const weatherData = await DataAPI.fetchWeather(lat,lon);
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
      fetchFlorida();
      fetchNY();
      initialValue();
    }, []);


      useEffect(() => {
        fetchWeatherData();
      }, [nameValue]);

  return (
    <Box sx={{ 
        backgroundImage:`url(${backImage})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundColor: isDarkMode ?  '#4D609C':'#030616',        
        color:'#F2F5F9',
        padding:"15px 30px 35px 30px",
        backgroundAttachment: 'fixed',
     }}>
    <Navbar  
      searchedLocation = {handleLocationChange }
      getTheMode= {modeState} 
    />
    <Stack sx={{ justifyContent:'space-between',gap:'100px' }}>
    <FirsttFloor  getTheName= {handleName}   nameValue={nameValue} />
    <SecondFloor />
    </Stack>
    </Box>
  )
}