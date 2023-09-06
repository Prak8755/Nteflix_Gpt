import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Api_Options } from '../utils/constant';
import { addTrendingMovies } from '../utils/MovieSlice';

const useTrendingMovies = () => {
  const trendingMovies=useSelector(s=>s.movies.trendingMovies);


  const dispatch=useDispatch();

  async function getTrendingMovies(){
    const api=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',Api_Options);
    const json=await api?.json();
    dispatch(addTrendingMovies(json.results));
  }

  useEffect(()=>{
if(!trendingMovies){
  getTrendingMovies();
}
  },)
}

export default useTrendingMovies