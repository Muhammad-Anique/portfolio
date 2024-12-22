import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const LetsCollaborate = () => {
  return (
    <div className="w-full h-auto   flex items-center justify-center xs:py-10 sm:py-16  md:py-48">
      <div className="relative t-saturate-0 scale-75 md:scale-90 w-full max-w-[1250px] h-[700px] flex items-center justify-center">
        <Image
          src="/orange-bg.png"
          alt="Spot-water-color"
          className="absolute hidden md:block -z-10 "
          height={700}
          width={1980}
          style={{ width: "auto", height: "700px" }}
        />

        <Image
          src="/pat3.jpg"
          alt="Spot-water-color"
          className="absolute z-10 -rotate-12 t-saturate-0 scale-125 sm:scale-90  "
          width={800}
          height={800}
        />

        <div className=" cursor-pointer hover:scale-110 duration-200 ease-in-out hover:backdrop-blur-md md:hover:w-[42%] md:hover:h-[60%] hover:rounded-xl -rotate-12 items-center justify-center flex flex-col absolute z-20">
          <h1 className="text-[40px] md:text-[95px] text-zinc-200  big-winks-text  ">
            {" "}
            Collaborate
          </h1>
          <div className="flex flex-row space-x-2 items-center justify-center">
            <p className="text-2xl md:text-4xl text-center text-zinc-200 big-winks-text">
              <span className="text-zinc-300">D</span>
              <span className="font-manrope text-zinc-300">rop</span> M
              <span className="font-manrope">e</span>{" "}
              <span className="text-zinc-300">an</span> E
              <span className="font-manrope">mail</span>
            </p>
            <ArrowUpRight className="md:w-16 w-9 h-9 md:h-16 text-zinc-300" />
          </div>
        </div>

        {/* <div className='flex flex-col absolute z-20 -translate-y-20 -translate-x-16 '>
            
            <h1 className='text-[70px] text-zinc-700 dark:text-zinc-400 shadow-lg big-winks-text rotate-2 '> Lets</h1>
          </div> */}
      </div>
    </div>
  );
};

export default LetsCollaborate;
