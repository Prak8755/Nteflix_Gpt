import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import MovieSlice from "./MovieSlice";
import GptSlice from './GptSlice';
import LanguageSlice from "./LanguageSlice";



const Store=configureStore({
    reducer:{
user:userSlice,
movies:MovieSlice,
gpt:GptSlice,
lang:LanguageSlice
    }
})

export default Store