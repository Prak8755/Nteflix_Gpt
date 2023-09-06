import  { useEffect } from 'react'
import {Api_Options} from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/MovieSlice';

const usePopularMovies = () => {
    const popularMovies=useSelector(s=>s.movies.popularMovies);

const dispatch=useDispatch();

async function getPopularMovies(){
let api=await fetch('https://api.themoviedb.org/3/movie/popular',Api_Options);
let json=await api?.json();

dispatch(addPopularMovies(json.results))
}


    useEffect(()=>{
if(!popularMovies){
    getPopularMovies();
}
    },[])
  
}

export default usePopularMovies