"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";

const Movie = ({ params }) => {
  const movid = params.movieid;
  const [movieObj, setMovieObj] = useState([]);
  const [movieVid, setMovieVid] = useState([]);

  const getdMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movid}?api_key=cb5b2df2e013fd040a05e5dce84b89e1`
    )
      .then((res) => res.json())
      .then((json) => setMovieObj(json))
      .catch((err) => console.error("error:" + err));
  };
  useEffect(() => {
    getdMovie();
  }, []);

  // const getMovieVid = () => {
  //   fetch(
  //     `https://api.themoviedb.org/3/movie/${movid}/videos?api_key=cb5b2df2e013fd040a05e5dce84b89e1`
  //   )
  //     .then((res) => res.json)
  //     .then((json) => setMovieVid(json.results))
  //     .catch((err) => console.err("error" + err));
  // };
  // useEffect(() => {
  //   getMovieVid();
  // });
  console.log(movieObj);

  return (
    <div className="grid grid-cols-12   w-full ">
      {/* <div className="text-black ">movie: {params.movieid}</div> */}
      {/* left Sidebar */}
      <div className="col-span-2 hidden md:flex">
        <Sidebar />
      </div>
      {/* Middle Component */}
      <div className="col-span-12 md:col-span-10">
        <Feed movie={movieObj} />
      </div>
      {/* Trailer */}
      {/* title and info */}
      {/* director writers and stars */}
      {/* rated num and award nominations */}

      {/* right component */}
    </div>
  );
};

export default Movie;
