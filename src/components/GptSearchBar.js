import React, { useState } from "react";
import Language from "../utils/Language";
import { useSelector, useDispatch } from "react-redux";
import { Supported_Language } from "../utils/constant";
import { addLanguage } from "../utils/LanguageSlice";
import { Api_Options } from "../utils/constant";
import OpenAi from "../utils/OpenAi";
import { addMovies } from "../utils/GptSlice";





const GptSearchBar = () => {
  const dispatch = useDispatch();
  const lang = useSelector((s) => s.lang.language);
 
  const [search, setSearch] = useState("");
  //for changing language
  function changeLang(e) {
    dispatch(addLanguage(e.target.value));
  }

  //Search functionality
  async function searchMovie(movie){
    let api=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,Api_Options);
    let json=await api.json();
return json.results;
  }

  //this logic is to search movie from TMDB search Ap

  async function handleSearchApi(e) {
    console.log('clicked');
    e.preventDefault();
    let search_Key=`act like a movie recommendation system and suggest some movies of query ${search},only give me names of 5 movies ,comma seperated like the example result ahead.Example result:Sholay,Don,Golmaal 3,koi mil gaya,Mahool `

    const completion = await OpenAi.chat.completions.create({
        messages: [{ role: "user", content: search_Key }],
        model: "gpt-3.5-turbo",
      });
  
      if(!completion.choices) {
        //some error logic
      }
  
      let moviesName=(completion.choices[0]?.message.content).split(",");
  
     let movieResult=moviesName.map((movie,i)=>searchMovie(movie));
  
     let movieArr=await Promise.all(movieResult);
  
  dispatch(addMovies({movieNames:moviesName,movieResults:movieArr}));

  }

  return (
    <div className="p-4 bg-black">
      <form className="flex gap-4 md:gap-10 md:flex-row flex-col"  >
        <input
          className="border border-emerald-500 w-full md:w-[70%] py-3 text-center outline-none"
          type="text"
          placeholder={Language[lang].gptSearchPlaceholder}
          onChange={function (e) {
            setSearch(e.target.value);
          }}
        />
        <button
          className="py-3 text-white px-8 w-full md:w-[10%]  border bg-fuchsia-600 rounded-sm "
          onClick={handleSearchApi}
        >
          {Language[lang].search}{" "}
        </button>
        <select className="text-black py-3 px-8" onChange={changeLang}>
          {Supported_Language.map((e, i) => (
            <option key={i} value={e.identifier}>
              {e.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default GptSearchBar;
