import { createSlice } from "@reduxjs/toolkit";
 export const weatherSlice = createSlice({
    name:'weatherSlice',
    initialState:{
        weatherInfo:[]
    },
    reducers:{
        setWeather:(currentSlice,action)=>{
            currentSlice.weatherInfo = action.payload
        },
        setNewYork:(currentSlice,action)=>{
            currentSlice.weatherInfo = action.payload
        }
    },
 });

 export const weatherReducer = weatherSlice.reducer;
 export const {setWeather,setNewYork} =  weatherSlice.actions

