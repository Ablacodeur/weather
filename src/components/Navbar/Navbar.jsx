import React, { useState, useEffect } from 'react';
import { Box, Stack, IconButton, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { DataAPI } from '../../api/weather-api';
import { SearchBar } from '../SearchBar/SearchBar';
import "./style.module.css"

export default function Navbar({ searchedLocation, getTheMode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [location, setLocation] = useState([]);

  console.log(isDarkMode);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    getTheMode(isDarkMode)
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const fetchLocation = async () => {
    try {
      const relatedLocation = await DataAPI.fetchLocation(searchText);
      if (relatedLocation) {
        setLocation(relatedLocation);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const finalLocationSearch = (flocation) => {
    searchedLocation(flocation);
  };

  useEffect(() => {
    fetchLocation();
  }, [searchText]);

  return (
    <Box sx={{ marginBottom: '7%' }}>
      <Stack
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
      >
        {/* Barre de recherche */}
        <SearchBar
          onTextChange={handleChange}
          value={searchText}
          locationList={location}
          onSearch={finalLocationSearch}
        />
        {/* Bouton pour activer/désactiver le mode sombre */}
        <IconButton onClick={toggleDarkMode} color="inherit">
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />} 
        <Typography style={{ paddingLeft:'5px' }}>Theme</Typography>
        </IconButton>
      </Stack>
    </Box>
  );
}
