import Rating from "@/components/Description Box/Rating";
import Image from "next/image";
import React from "react";

const MovieCard = () => {
  return (
    <div
      className="flex flex-col items-center gap-3"
      data-testid={"movie - card"}
    >
      <Image
        src={"/Stranger.png"}
        width={250}
        height={370}
        alt="Stangert things Poster"
        data-testid={"movie-poster"}
      />
      <div className="flex flex-col gap-3">
        <span className="text-gray-400 text-[12px] font-bold font-sans not-italic">
          USA, 2016 - Current
        </span>
        <span
          className="text-gray-900 text-[16px] w-[250px] font-bold font-sans not-italic"
          data-testid={"movie-title"}
        >
          Stranger Things
        </span>
        <Rating className="text-black" />
        <span className="text-gray-400 text-[12px] font-bold font-sans not-italic">
          Action, Adventures
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
