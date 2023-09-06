import  { useEffect } from 'react';
import { Api_Options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import {addVideoTitle} from '../utils/MovieSlice';



const useVideoTitle = () => {
const  videoTitle=useSelector(s=>s.movies.videoTitle);

    const dispatch=useDispatch();

    
    async function getVideoTitle(){
        let api=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',Api_Options);
        let json=await api?.json();

        dispatch(addVideoTitle(json.results))
    }
 
    useEffect(()=>{
      if(!videoTitle){
        getVideoTitle()
      }
    },[])
}

export default useVideoTitle