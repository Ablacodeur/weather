import { configureStore } from "@reduxjs/toolkit";
import { weatherReducer } from "./weather-slice";
import { cityReducer } from "./Larger-city-slice"; 
export const store = configureStore({
    reducer:{
        WEATHER: weatherReducer,
        CITY: cityReducer,
    },
 })