import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestion = () => {

  const data=useSelector(s=>s.gpt);
const {getNames,getMovies}=data;

if(!getNames&&!getMovies) return null;

  return (
    <div>
 {getNames.map((movie,i)=><MovieList key={i} title={movie}  movies={getMovies[i]}/>)}
    </div>
  )
}

export default GptSearchSuggestion