import { createSlice } from "@reduxjs/toolkit";

 export const LargerCitySlice = createSlice({
    name:'LargerCitySlice',
    initialState:{
        LargerCity:[]
    },
    reducers:{
        setCity:(currentSlice,action)=>{
            currentSlice.LargerCity.push(action.payload)
        }
    },
 });

 export const cityReducer = LargerCitySlice.reducer;
 export const {setCity} =  LargerCitySlice.actions

