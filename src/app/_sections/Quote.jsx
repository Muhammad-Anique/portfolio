"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Cube_r_b = () => {
  const [color, setColor] = useState("bg-zinc-200/40 dark:bg-zinc-200/70"); // Initial color (white)

  useEffect(() => {
    const changeColor = () => {
      setColor((prevColor) =>
        prevColor === "bg-zinc-200/40 dark:bg-zinc-200/70"
          ? "bg-zinc-100 dark:bg-zinc-900"
          : "bg-zinc-200/40 dark:bg-zinc-200/70"
      );
    };

    // Change color at random intervals between 0.5 to 2 seconds
    const interval = setInterval(changeColor, Math.random() * 2500 + 500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="border-r-[0.5px] border-b-[0.5px]  border-b-zinc-200/30 border-r-zinc-200/30 w-full h-full md:min-h-[150px] md:min-w-[150px] min-h-[50px] min-w-[50px] relative">
      <div
        className={`w-[5px] h-[5px] md:w-[10px] md:h-[10px] rounded-full ${color} right-0 bottom-0 z-10 md:translate-x-1 translate-x-[3px] translate-y-[3px] md:translate-y-1 absolute`}
      ></div>
    </div>
  );
};

const Cube_r_b_c = () => {
  return (
    <div className="border-r-[0.5px] border-b-[0.5px] backdrop-blur-lg bg-zinc-200/20 border-b-zinc-200/30  border-r-zinc-200/30 w-full h-full md:min-h-[150px] md:min-w-[150px]  min-h-[50px] min-w-[50px]   relative dark:bg-[#0d0d0d58]">
      <div className="w-[5px] h-[5px] md:w-[10px] md:h-[10px] rounded-full bg-zinc-300 dark:bg-zinc-200 right-0 z-10 bottom-0 md:translate-x-1 translate-x-[3px] translate-y-[3px] md:translate-y-1  absolute"></div>
    </div>
  );
};

const Cube_b = () => {
  return (
    <div className=" border-b-[0.5px] border-b-zinc-200/30  border-r-zinc-200/30 w-full h-full md:min-h-[150px] md:min-w-[150px]  min-h-[50px] min-w-[50px]   relative"></div>
  );
};

const Cube_r = () => {
  return (
    <div className=" border-r-[0.5px] border-r-zinc-200/30  w-full h-full md:min-h-[150px] md:min-w-[150px]  min-h-[50px] min-w-[50px]  relative"></div>
  );
};
const Quote = () => {
  return (
    <div className="w-full max-h-[1250px]  flex items-center justify-center relative mb-8">
      <div className="grid grid-cols-8  grid-rows-7 relative  ">
        <GhostLightImage />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b_c />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_b />
        <Cube_r_b_c />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b_c />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_b />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_b />
        <Cube_r_b />
        <Cube_r_b_c />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b_c />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_b />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b_c />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_b />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b />
        <Cube_r_b_c />
        <Cube_r_b />
        <Cube_b />
        <Cube_r />
        <Cube_r />
        <Cube_r />
        <Cube_r />
        <Cube_r />
        <Cube_r />
        <Cube_r />
      </div>

      {/* <div className="absolute bg-gradient-to-b dark:bg-zinc-200/0 dark:from-zinc-100/0 dark:to-zinc-50/5 from-zinc-200/50 to-zinc-100/60 scale-95 backdrop-blur-lg dark:shadow-md z-20 p-16">
        <h1 className="text-[25px] md:text-[35px] max-w-md md:max-w-xl pr-5 font-playfair dark:font-manrope leading-[47px] md:leading-[60px] text-zinc-800 dark:text-zinc-200 font-thin text-center">
          {" "}
          <span className="font-bold leading-[70px] text-red-500 bg-clip-text bg-gradient-to-r from-p1 to-orange-400 dark:text-zinc-200 big-winks-text text-[30px] md:text-[40px]">
            Programs
          </span>{" "}
          must be written for people to{" "}
          <span className="font-bold text-red-500 bg-clip-text bg-gradient-to-r from-p1 to-orange-400 text-[30px] big-winks-text  dark:text-zinc-200 md:text-[40px]">
            Read
          </span>
          , and only{" "}
          <span className="text-[30px] text-red-500 bg-clip-text bg-gradient-to-r from-p1 to-orange-400 md:text-[40px]  big-winks-text  dark:text-zinc-200 font-bold">
            Incidently{" "}
          </span>{" "}
          for machines to{" "}
          <span className="text-[30px] text-red-500 bg-clip-text bg-gradient-to-r from-p1 to-orange-400 md:text-[40px]  big-winks-text  dark:text-zinc-200 font-bold">
            Execute.
          </span>
        </h1>
      </div> */}

      <div className="absolute    scale-95 z-20 p-16">
        <h1 className="text-[25px] -rotate- text-zinc-900 md:text-[135px] pr-5  big-winks-text dark:font-manrope leading-[47px] md:leading-[60px]  dark:text-zinc-200 font-thin text-center">
          Coding is Life.
        </h1>
      </div>
    </div>
  );
};

export default Quote;

const GhostLightImage = () => {
  // const [opacity, setOpacity] = useState(0.2);
  // const opacity = 0.2;

  // useEffect(() => {
  //   const opacities = [0.2, 0.25, 0.3, 0.25, 0.2]; // The sequence
  //   let index = 0;

  //   const interval = setInterval(() => {
  //     index = (index + 1) % opacities.length; // Loop through the sequence
  //     setOpacity(opacities[index]);
  //   }, 1000); // Adjust interval duration as needed

  //   return () => clearInterval(interval); // Cleanup on component unmount
  // }, []);

  return (
    <div className="absolute w-full h-full flex items-center justify-center">
      <div className="relative">
        <Image
          src="/david.png"
          alt="David"
          width={1000}
          height={1000}
          className="duration-500 ease-in-out dark:opacity-20 opacity-60"
        />
      </div>
    </div>
  );
};
