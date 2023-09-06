import React from 'react'
import MovieCards from './MovieCards';

const MovieList = ({title,movies}) => {


  return (
    <div className='px-6'>
         <h1 className='text-3xl'>{title}</h1>

         <div className='flex w-full h-[300px] p-6 overflow-scroll'>
          {movies?.map(movie=><MovieCards key={movie.id} link={movie.backdrop_path} id={movie.id} />)}
         </div>
    </div>
  )
}

export default MovieList