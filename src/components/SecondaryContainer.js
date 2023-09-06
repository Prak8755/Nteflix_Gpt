import React from 'react'
import usePopularMovies from '../hooks/usePopularMovies'
import { useSelector } from 'react-redux';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import MovieList from './MovieList';


const SecondaryContainer = () => {

  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  const popularMovies=useSelector(s=>s?.movies?.popularMovies);
  const upcomingMovies=useSelector(s=>s?.movies?.upcomingMovies);
  const trendingMovies=useSelector(s=>s?.movies?.trendingMovies);
 
  if(!popularMovies &&!upcomingMovies&&!trendingMovies) return;
  
 
  return (
    <>
    <div className='text-white bg-black'>
      <div className='-mt-[250px] relative z-20'>
      <MovieList className='' title='Popular Movies'  movies={popularMovies}/>
    <MovieList title='Upcoming Movies'  movies={upcomingMovies}/>
    <MovieList title='Trending Movies'  movies={trendingMovies}/>
      </div>
    
    </div>
    </>
  )
}

export default SecondaryContainer