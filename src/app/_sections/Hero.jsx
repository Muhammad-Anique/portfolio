"use client";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import GithubLink from "../_components/GithubLink";
import InstagramLink from "../_components/InstagramLink";
import LinkedInLink from "../_components/LinkedInLink";

const Hero = () => {
  return (
    <div className="py-32 px-4  relative max-h-[1050px] sm:px-10 md:px-16 lg:px-32 w-full  h-[100vh] flex flex-row justify-center ">
      <div className="flex scale-90 lg:scale-110 h-full flex-col md:flex-col md:gap-0 items-center justify-center">
        <div className="flex  items-center justify-center">
          <div className="relative  flex items-center justify-center w-[250px] h-[250px] md:w-[350px] md:h-[350px]">
            <div className="z-10 flex items-start justify-center w-[210px] h-[210px]  md:w-[300px] md:h-[300px] overflow-hidden rounded-lg dark:rounded-full  bg-gradient-to-b  dark:from-[#090909] dark:to-[#36363648] ">
              <Image
                src="/logo-anique.png"
                alt="profile-image"
                className="z-10 "
                width={210}
                height={210}
                priority={true} // to control the loading behavior (optional)
                quality={75}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div className="mt-5 w-full relative">
          <p
            className={`dark:shadow-basic text-5xl md:text-7xl  font-hand text-p1 absolute top-0 -translate-y-10 -translate-x-6 left-5 -rotate-12`}
          >
            I am
          </p>

          <div className="flex flex-col w-full ">
            <p className="text-zinc-800 dark:text-zinc-200  font-manrope text-5xl md:text-8xl font-extrabold">
              ANIQUE
            </p>
            <div className="flex flex-row items-center justify-between w-full gap-3">
              <p className="text-zinc-800 dark:text-zinc-200  font-manrope text-3xl md:text-4xl font-thin">
                Full Stack Developer
              </p>
              <p className="text-3xl md:text-4xl">😎</p>
            </div>

            <div className="w-full flex  justify-between items-center gap-10 text-zinc-900 dark:text-zinc-200 flex-row mt-3 md:mt-5">
              <p className="text-zinc-900 dark:text-zinc-200  h-full font-manrope  text-sm md:text-md  tracking-wider ">
                CHECK MY RESUME
              </p>
              <div className="w-[50px] md:min-w-[50px]  md:max-w-[100px] md:w-full h-[1px] bg-zinc-800 dark:bg-zinc-200 border-none "></div>
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
                <DownloadIcon className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 w-full h-[50px] flex items-center justify-center gap-10 ">
        <div className="text-zinc-900 dark:text-zinc-200  flex flex-row gap-10 items-center justify-center w-full">
          <div className="w-[5%] hidden md:block md:w-[10%] h-[1px] bg-zinc-800 dark:bg-zinc-200 lg:w-[20%]" />
          <GithubLink />
          <InstagramLink />
          <LinkedInLink />

          <div className="w-[5%] hidden md:block md:w-[10%] h-[1px] bg-zinc-800 dark:bg-zinc-200 lg:w-[20%]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
