import { useEffect } from "react"
import {Api_Options} from '../utils/constant';
import { useDispatch, useSelector } from "react-redux";
import {addVideoBackground} from '../utils/MovieSlice';



const useTrailerVideo = (id) => {
    const videoBackground=useSelector(s=>s.movies.videoBackground);

    const dispatch=useDispatch();

    async function getTrailerVideo(){
        let api=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,Api_Options);
        let json=await api?.json();
        if(!json.results)return ;


      let filterTrailer= json.results.filter(trailer=>trailer.type==='Trailer');
      const trailer=filterTrailer.length?filterTrailer[0]:json.results[0];

     dispatch(addVideoBackground(trailer))

    }
 
    useEffect(()=>{
if(!videoBackground){
    getTrailerVideo();
}
    })
}

export default useTrailerVideo