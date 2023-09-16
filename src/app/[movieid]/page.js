import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const movie = ({ params }) => {
  return (
    <div className="mx-10 flex">
      {/* <div className="text-black ">movie: {params.movieid}</div> */}
      {/* left Sidebar */}
      <Sidebar />
      {/* Middle Component */}
      <div
        className=" mt-9 mx-auto w-[1198px] h-[449px] border border-black rounded-3xl bg-cover bg-no-repeat"
        style={{
          background: `url('/Rectangle29.png')`,
        }}
      ></div>
      {/* Trailer */}
      {/* title and info */}
      {/* director writers and stars */}
      {/* rated num and award nominations */}

      {/* right component */}
    </div>
  );
};

export default movie;
