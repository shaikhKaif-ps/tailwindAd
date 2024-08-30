import React from "react";
import building from "./../../../../public/building.svg";
import Image from "next/image";

const HomeInfo = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="md:flex items-center my-10 lg:my-16">
        <div className="flex-1 mb-4 md:mb-0">
          <h1 className="primary-heading">
            Years of <br /> excellence in <br /> The making
          </h1>
        </div>
        <div className="flex-1 ">
          <p className="globalPara mb-4">
            At Advent International, we are redefining hospitality with a
            portfolio of luxury and upscale hotels, committed to delivering
            exceptional experiences and superior value for our stakeholders.
          </p>
          <button className="globalBrownBtn">view our properties</button>
        </div>
      </div>
      <div className="flex justify-center flex-wrap md:justify-center gap-6 lg:gap-8 mb-14 ">
        <div className="countBox1 w-[45%] h-20 flex items-center justify-around lg:flex-1 md:w-[30%] b lg:h-24 xl:h-32 bg-slate-300 ">
          <div className="imgCon h-8 w-8 lg:h-12 md:h-12 md:w-12 lg:w-12 xl:h-16 xl:w-16 ">
            <img
              src="https://phpstack-1034502-4675513.cloudwaysapps.com/_next/static/media/building.c7e0502d.svg"
              className="h-full w-full"
              alt=""
            />
          </div>
          <div className="ConBox">
            <p className="text-3xl md:text-4xl xl:text-6xl">07</p>
            <p className="text-xl md:text-xl xl:text-2xl">Keys</p>
          </div>
        </div>
        <div className="countBox2 w-[45%] h-20 flex items-center justify-around lg:flex-1 md:w-[30%] b lg:h-24 xl:h-32 bg-slate-300 ">
          <div className="imgCon h-8 w-8 lg:h-12 md:h-12 md:w-12 lg:w-12 xl:h-16 xl:w-16 ">
            <img
              src="https://phpstack-1034502-4675513.cloudwaysapps.com/_next/static/media/building.c7e0502d.svg"
              className="h-full w-full"
              alt=""
            />
          </div>
          <div className="ConBox">
            <p className="text-3xl md:text-4xl xl:text-6xl">07</p>
            <p className="text-xl md:text-xl xl:text-2xl">Keys</p>
          </div>
        </div>
        <div className="countBox3 w-[45%] h-20 flex items-center justify-around lg:flex-1 md:w-[30%] b lg:h-24 xl:h-32 bg-slate-300 ">
          <div className="imgCon h-8 w-8 lg:h-12 md:h-12 md:w-12 lg:w-12 xl:h-16 xl:w-16 ">
            <img
              src="https://phpstack-1034502-4675513.cloudwaysapps.com/_next/static/media/building.c7e0502d.svg"
              className="h-full w-full"
              alt=""
            />
          </div>
          <div className="ConBox">
            <p className="text-3xl md:text-4xl xl:text-6xl">07</p>
            <p className="text-xl md:text-xl xl:text-2xl">Keys</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
