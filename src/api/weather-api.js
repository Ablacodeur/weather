import axios from "axios";
const BASE_URL = 'https://api.openweathermap.org/data/3.0'
const API_KEY_PARAMS = "&appid=9a59a4b4363b5890c3d06ce7cef124d0"

// const FILTER_URL = "www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
export class DataAPI{
    static async fetchWeather(){
      return(await axios.get(`${BASE_URL}/onecall?lat=33.44&lon=-94.04&units=metric${API_KEY_PARAMS}`)).data
    }
    static async NewYork(){
        return(await axios.get(`${BASE_URL}/onecall?lat=40.73&lon=-73.94&units=metric${API_KEY_PARAMS}`)).data
      };
      static async Montreal(){
        return(await axios.get(`${BASE_URL}/onecall?lat=45.50&lon=-73.57&units=metric${API_KEY_PARAMS}`)).data
      };
      static async Floride(){
        return(await axios.get(`${BASE_URL}/onecall?lat=48.86&lon=2.33&units=metric${API_KEY_PARAMS}`)).data
      }
  
  
}