import React from 'react'

const VideoTitle = ({overview,title}) => {


  return (
   <>
   <div className='absolute top-[5%] md:top-[12%] px-10 w-screen bg-gradient-to-r from-black h-[600px] md:h-[650px] '>
    <h1 className='md:text-3xl  text-white mt-32'>{title}</h1>
    <p className='text-gray-300 hidden md:block md:w-1/2 text-justify my-4'>{overview}</p>
    <button className='text-white'>View More</button>
   </div>
   </>
  )
}

export default VideoTitle