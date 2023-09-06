import  { useEffect } from 'react'
import {Api_Options} from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../utils/MovieSlice';

const useUpcomingMovies = () => {

    const  upcomingMovies=useSelector(s=>s.movies.upcomingMovies);

const dispatch=useDispatch();

async function getUpcomingMovies(){
let api=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',Api_Options);
let json=await api?.json();

dispatch(addUpcomingMovies(json?.results))
}


    useEffect(()=>{
if(!upcomingMovies){
    getUpcomingMovies();
}
    },[])
  
}

export default useUpcomingMovies