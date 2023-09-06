import React from 'react';
import { Link } from 'react-router-dom';
import { Img_Cdn } from '../utils/constant'

const MovieCards = ({link,id}) => {

  
  if(!link)return;
  return (
    
   <>
    <img src={Img_Cdn+link} alt='movie' className='m-4  h-[200px] shadow-lg border cursor-pointer '/>
    <Link to={'/videoshow/'+id} className='px-4 h-6 bg-lime-400 mt-[200px] -ml-[100px] hover:scale-110 duration-500'>Trailer </Link>
   </>
  
  )
}

export default MovieCards