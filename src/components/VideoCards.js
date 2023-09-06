import React from "react";

const VideoCards = ({ id }) => {


  return (
    <>
  {id? <div>
      <div className="m-6">
        <iframe
          className="w-250px] md:-[300px]"
          src={`https://www.youtube.com/embed/${id}?si=-0Gg7ZkCvrNk6UJo`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>{" "}
    </div>:<h1>No Trailer Found for this video</h1>}
    </>
  );
};

export default VideoCards;
