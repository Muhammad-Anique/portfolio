"use client";
import React, { useEffect, useState } from "react";
import { ChevronUpIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="w-full max-w-[1250px] h-auto flex flex-col items-center justify-center">
        <div className="w-full relative md:max-h-[700px] h-auto bg-transparent flex items-center justify-center">
          <div className="font-manrope font-extrabold text-zinc-200 dark:text-[#151515]  md:tracking-tighter relative flex items-center justify-center">
            <span className="font-cairo tracking-tighter text-[190px] sm:text-[300px] md:text-[360px] lg:text-[500px] opacity-70">
              BYE
            </span>
            <h1 className="absolute text-p1 dark:text-zinc-200  text-[40px] md:text-[100px]  big-winks-text font-thin tracking-normal">
              Anique
            </h1>
          </div>
        </div>

        <div>
          <p className="text-zinc-700 dark:text-zinc-300 max-w-3xl text-sm md:text-md text-center font-manrope mb-32 px-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim. Pellentesque
            congue.
          </p>
        </div>

        <div className=" bottom-5 flex flex-col items-center h-full w-full ">
          <ChevronUpIcon className="w-10 h-10 text-zinc-600 dark:text-zinc-200 " />

          <div className="h-[32px] w-[32px] md:h-[50px] md:w-[50px] border flex items-center justify-center border-zinc-600 dark:border-zinc-200 rounded-full">
            <ScaleAndScroll />
          </div>

          <div className="h-[100px] md:h-[230px] w-[1px] bg-zinc-600 dark:bg-zinc-200 "></div>
          <div className="h-[1px] w-[85%] sm:w-[90%]   2xl:w-[100%] bg-zinc-600 dark:bg-zinc-200"></div>

          <div className="w-[85%] sm:w-[90%] 2xl:w-[100%] h-auto py-9 md:py-16 mb-5 flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-8xl text-zinc-900 dark:text-zinc-200  font-playfair">
                ma
              </h1>
              <p className="font-manrope text-zinc-900 dark:text-zinc-200  text-xl">
                Muhammad Anique
              </p>
              <p className="max-w-xs text-zinc-600 dark:text-zinc-400 font-manrope text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec,
              </p>
            </div>

            <div className="flex flex-row md:flex-col gap-5 text-zinc-900 dark:text-zinc-200   h-full min-h-[130px] items-center justify-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </div>

            <div className="flex flex-col gap-2">
              <div className="relative self-end">
                <h1 className="big-winks-text text-4xl text-zinc-900 dark:text-zinc-200 ">
                  Anique
                </h1>
              </div>
              <p className="font-manrope text-zinc-900 dark:text-zinc-200  text-right text-md">
                anique.cs@gmail.com
              </p>
              <p className="max-w-xs text-zinc-600 dark:text-zinc-400 font-manrope text-xs text-right">
                ©2024 Muhammad Anique. All rights reserved. Unauthorized
                reproduction or distribution of any content from this site is
                strictly prohibited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const ScaleAndScroll = () => {
  const [scale, setScale] = useState(0.75); // Initial scale for beeping effect
  const [size, setSize] = useState(18); // Unified size for height and width
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prevScale) => (prevScale === 0.75 ? 1.4 : 0.75)); // Toggle between 1 and 1.4
    }, 400); // 400ms interval for beeping effect
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    setSize(500); // Expand size to 500px
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top after delay
    }, 1000); // Delay before scrolling

    setTimeout(() => {
      setIsClicked(false);
      setSize(28); // Reset size to original
    }, 2000);
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-center cursor-pointer z-30 bg-p1 rounded-full duration-1000 ease-in-out absolute"
      style={{
        height: `${size}px`,
        width: `${size}px`,
        transform: `scale(${scale})`,
      }}
    >
      {isClicked ? (
        <ChevronUpIcon className="w-64 h-64 text-zinc-200 " />
      ) : null}
    </div>
  );
};
