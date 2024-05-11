import axios from "axios";
import { BASE_URL,API_KEY_PARAMS,GEOCODER_BASE_URL } from "../config";

// const FILTER_URL = "www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
export class DataAPI{
    static async fetchWeather(lat,lon){
      return(await axios.get(`${BASE_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY_PARAMS}`)).data
    }
      static async NewYork(){
        return(await axios.get(`${BASE_URL}/onecall?lat=40.73&lon=-73.94&units=metric&appid=${process.env.REACT_APP_API_KEY_PARAMS}`)).data
      };
      static async Montreal(){
        return(await axios.get(`${BASE_URL}/onecall?lat=45.50&lon=-73.57&units=metric&appid=${process.env.REACT_APP_API_KEY_PARAMS}`)).data
      };
      static async Floride(){
        return(await axios.get(`${BASE_URL}/onecall?lat=48.86&lon=2.33&units=metric&appid=${process.env.REACT_APP_API_KEY_PARAMS}`)).data
      }
      static async fetchLocation(location,country_code){
        return(await axios.get(`${GEOCODER_BASE_URL}?q=${location},${country_code}&limit=6&appid=${process.env.REACT_APP_API_KEY_PARAMS}`)).data
      }
  
//   
}