import { createSlice } from "@reduxjs/toolkit";

const MovieSlice=createSlice({
    name:'movies',
    initialState:{
        videoTitle:null,
        videoBackground:null,
        popularMovies:null,
        trendingMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        addVideoTitle:(state,action)=>{
            state.videoTitle=action.payload
        },
        addVideoBackground:(state,action)=>{
            state.videoBackground=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        }
    }
});

export const {addVideoBackground,addVideoTitle,addPopularMovies,addTrendingMovies,addUpcomingMovies}=MovieSlice.actions;
export default MovieSlice.reducer;

