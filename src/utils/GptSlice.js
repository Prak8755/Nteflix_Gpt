import { createSlice } from "@reduxjs/toolkit";

const GptSlice=createSlice({
    name:'gpt',
    initialState:{
        gptShow:false,
        getMovies:null,
        getNames:null
    },
    reducers:{
        gptToggleShow:(state)=>{
            state.gptShow=!state.gptShow
        },
        addMovies:(state,action)=>{
      const {movieNames,movieResults}=action.payload;
   state.getMovies=movieResults;
   state.getNames=movieNames;
   
        }
    }
})


export const {gptToggleShow,addMovies} =GptSlice.actions;
export default GptSlice.reducer;
