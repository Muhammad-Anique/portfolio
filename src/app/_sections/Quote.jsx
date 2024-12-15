"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Cube_r_b = () => {
  const [color, setColor] = useState("bg-zinc-200"); // Initial color (white)

  useEffect(() => {
    const changeColor = () => {
      setColor((prevColor) =>
        prevColor === "bg-zinc-200/70" ? "bg-zinc-950" : "bg-zinc-200/70"
      );
    };

    // Change color at random intervals between 0.5 to 2 seconds
    const interval = setInterval(changeColor, Math.random() * 1500 + 500);

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
    <div className="border-r-[0.5px] border-b-[0.5px] backdrop-blur-md border-b-zinc-200/30  border-r-zinc-200/30 w-full h-full md:min-h-[150px] md:min-w-[150px]  min-h-[50px] min-w-[50px]   relative bg-[#0d0d0d58]">
      <div className="w-[5px] h-[5px] md:w-[10px] md:h-[10px] rounded-full bg-zinc-200 right-0 z-10 bottom-0 md:translate-x-1 translate-x-[3px] translate-y-[3px] md:translate-y-1  absolute"></div>
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

      <div className="absolute scale-75 backdrop-blur-sm rounded-xl shadow-md z-20 p-16">
        <h1 className="text-[25px] md:text-[35px] max-w-md md:max-w-xl pr-5 font-manrope leading-[37px] md:leading-[50px] text-zinc-200 font-thin text-center">
          {" "}
          <i className="font-bold text-[40px] md:text-[50px]">PROGRAMS</i> must
          be written for people to{" "}
          <i className="font-bold text-[40px] md:text-[50px]">READ</i>, and only{" "}
          <i className="text-[40px] md:text-[50px] font-bold">INCIDENTALLY </i>{" "}
          for machines to{" "}
          <i className="text-[40px] md:text-[50px] font-bold">EXECUTE.</i>
        </h1>
      </div>
    </div>
  );
};

export default Quote;

const GhostLightImage = () => {
  // const [opacity, setOpacity] = useState(0.2);
  const opacity = 0.2;

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
          style={{ opacity }}
          className="duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};
