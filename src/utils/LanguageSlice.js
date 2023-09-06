import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice=createSlice({
    name:'lang',
    initialState:{
     language:'en'
    },
    reducers:{
        addLanguage:(state,action)=>{
            state.language=action.payload
        }
    }
})

export const {addLanguage}=LanguageSlice.actions;
export default LanguageSlice.reducer;

