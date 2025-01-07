"use client";
import React from "react";
import GithubLink from "../_components/GithubLink";
import InstagramLink from "../_components/InstagramLink";
import LinkedInLink from "../_components/LinkedInLink";
import { DownloadIcon } from "lucide-react";

const Hero2 = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen overflow-hidden">
      <div className=" w-full flex items-center flex-col gap-6 justify-center relative">
        {/* <div className="bg-p1 rounded-full w-[700px] h-[700px] absolute z-10"></div> */}
        <h1 className="text-[105px] leading-[110px] sm:text-[130px] md:text-[200px] text-center -z-10 text-zinc-950 dark:text-zinc-100 font-playfair sm:leading-[130px] md:leading-[180px] tracking-tighter">
          Hello<span className="text-p1">,</span> <br />I{" "}
          <span className="text-p1"></span>am Anique
        </h1>

        <div className="text-zinc-900 mt-20 md:mt-10 dark:text-zinc-200 flex flex-row gap-10 items-center justify-center w-full ">
          {" "}
          <div className="w-[5%] hidden md:block md:w-[10%] h-[1px] bg-zinc-800 dark:bg-zinc-200 lg:w-[20%]" />
          <button
            className="flex items-center justify-center hover:scale-105 duration-150 ease-out transition-transform"
            onClick={() => {
              const link = document.createElement("a");
              link.href =
                "https://exggfeypqucbibabxodx.supabase.co/storage/v1/object/public/Anique-Portfolio-Image/BlogFeatureImages/Muhammad-Anique-Resume.pdf";
              link.download = "Muhammad-Anique-Resume.pdf"; // Suggests the filename
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <DownloadIcon className="w-5 h-5 font-bold text-zinc-900 dark:text-zinc-200" />
          </button>
          <GithubLink />
          <InstagramLink />
          <LinkedInLink />{" "}
          <div className="w-[5%] hidden md:block md:w-[10%] h-[1px] bg-zinc-800 dark:bg-zinc-200 lg:w-[20%]" />{" "}
        </div>

        {/* <div className="bg-gradient-to-b from-p1 via-p1 to-orange-400 rounded-full w-[700px] h-[700px] absolute z-10 flex items-center justify-center overflow-hidden">
          <h1 className="text-[200px] text-center  whitespace-nowrap  text-zinc-200 dark:text-zinc-100 font-playfair leading-[190px] tracking-tighter">
            Hello, <br />I am Anique
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default Hero2;
