import { Box, Grid, Stack } from '@mui/material'
import FiveDayForecast from '../FiveDayForecast/FiveDayForecast'
import OtherLargeCityCard from '../OtherLargeCityCard/OtherLargeCityCard'
import {useSelector } from 'react-redux';


export default function SecondFloor() {
  const actualWeather = useSelector((store) => store.WEATHER.weatherInfo);
  const daily = actualWeather.daily;

  const cities= useSelector((store) => store.CITY.LargerCity);

  // Convertit un timestamp UTC en nom du jour de la semaine
    const getDayOfWeek = (utcTimestamp) => {
      const date = new Date(utcTimestamp * 1000);
      const options = { weekday: 'long' };
      return date.toLocaleDateString('en-US', options); // Utilisez 'en-US' pour obtenir le nom du jour en anglais
    };



  return (
    <Box >
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


        <Box sx={{ height:'100%' }}>
        <h4>Other large cities</h4>
          <Stack sx={{display:'flex', justifyContent:'space-between', gap:'10px' }}>
          { cities && cities.map((city,index)=>{

             //function to split the timmezone name 

            const timezones = city.timezone;

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
              weatherName={ city && city.current.weather[0].main}
              weatherIcon={city && city.current.weather[0].icon}
              temperature={city && Math.round( city.current.temp)}
            />
            )
          })}
          </Stack>

        </Box>
        <Box sx={{ marginLeft: { lg: '65px' , md:'10px'}, width: '100%' }}>
          <h4>5-day forecast</h4>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Grid container rowSpacing={5}  >
            {daily && daily.slice(0,5).map((day, index) => {

              // Votre code ici
              return (
                <Grid item xs={12} key={index}>
                
                  <FiveDayForecast
                    key={index}
                    currentTemp={actualWeather && Math.round(actualWeather.current.temp)}
                    day={index === 0 ? "Today": getDayOfWeek(day.dt)}
                    weatherIcon={day.weather[0].icon}
                    min={Math.round(day.temp.min)}
                    max={Math.round(day.temp.max)}
                  />
                </Grid>
              );
            })}
            </Grid>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
