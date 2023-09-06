import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api_Options } from '../utils/constant';
import VideoCards from './VideoCards';
import logo from '../assets/Netflix_Logo.png';
import { Link } from 'react-router-dom';


const VideoShow = () => {
  const params=useParams();
const {id}=params;

const [videos,setVideos]=useState([]);



async function getVideo(){
  let api=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,Api_Options);
  const json=await api.json();
setVideos(json?.results)
}

useEffect(()=>{
getVideo();
})


  return (
    <div className='border'>
   <div className='px-4 w-full flex justify-between items-center'>
   <Link to='/browse'> <img className='h-10 md:h-16' src={logo} alt=''/></Link>
    <h1 className='text-xl md:text-3xl'>Movie Trailer</h1>
    <Link to='/browse' className='px-8 py-1 bg-sky-700 text-white'>Home</Link>
   </div>
    <div className='flex justify-center flex-wrap items-center'>
     {videos.map((movie,i)=> <VideoCards key={movie.id} id={movie.key}/>)}
    </div>
    </div>
  )
}

export default VideoShow