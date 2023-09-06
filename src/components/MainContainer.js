import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

  const titleData=useSelector(s=>s.movies.videoTitle);
  
  if(titleData===null) return ;
 
  let randomNumber=Math.trunc(Math.random()*19+1);

const {title,overview,id}=titleData[randomNumber];

  return (
    <>
    <div className=''>
    <VideoTitle overview={overview} title={title}/>
    <VideoBackground id={id}/>
    </div>
    </>
  )
}

export default MainContainer