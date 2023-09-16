import Image from "next/image";
import React from "react";

const Feed = () => {
  return (
    <div className=" text-black w-full  flex-grow p-6">
      <div className=" mt-9 w-full h-[449px] border rounded-3xl  bg-[url('/Rectangle29.png')] bg-cover bg-center bg-no-repeat  flex items-center justify-center ">
        <div className=" flex flex-col items-center ">
          <Image
            src={"/play.png"}
            width={54}
            height={54}
            alt={"play"}
            className="relative  top-[90px]  z-1 items-center"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
          >
            <g filter="url(#filter0_bd_1320_711)">
              <circle
                cx="60"
                cy="58"
                r="55"
                fill="white"
                fill-opacity="0.35"
                shape-rendering="crispEdges"
              />
              <circle
                cx="60"
                cy="58"
                r="55"
                stroke="#E8E8E8"
                stroke-opacity="0.2"
                stroke-width="2"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_bd_1320_711"
                x="0"
                y="-2"
                width="120"
                height="122"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1320_711"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_backgroundBlur_1320_711"
                  result="effect2_dropShadow_1320_711"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_1320_711"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <span className="text-[#E8E8E8] text-2xl font-medium shadow[0px 2px 4px rgba(0, 0, 0, 0.25)]">
            Watch Trailer
          </span>
        </div>
      </div>
    </div>
  );
};

export default Feed;
