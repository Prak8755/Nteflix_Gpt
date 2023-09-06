import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useVideoTitle from "../hooks/useVideoTitle";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {

  useVideoTitle();

  //for GptSearch Page
  const gpt = useSelector((s) => s.gpt.gptShow);


  return (
    <div>
      <Header />
      {gpt ? (
        <GptSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
