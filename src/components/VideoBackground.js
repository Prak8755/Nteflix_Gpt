import React from 'react'
import useTrailerVideo from '../hooks/useTrailerVideo'

import { useSelector } from 'react-redux';

const VideoBackground = ({id}) => {

    useTrailerVideo(id);

const video=useSelector(s=>s.movies.videoBackground);

if(video===null) return ;


  return (
    <>
    <div className='w-screen' >
    <iframe className='w-screen aspect-video h-screen'  src={`https://www.youtube.com/embed/${video.key}?&autoplay=1&mute=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    </>
  )
}

export default VideoBackground