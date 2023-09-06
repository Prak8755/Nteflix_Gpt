import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchSuggestion from './GptSearchSuggestion'

const GptSearch = () => {
  return (
    <div className='relative top-[110px] md:top-[100px] '>
        <GptSearchBar/>
<GptSearchSuggestion/>
    </div>
  )
}

export default GptSearch