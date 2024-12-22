"use client";
import React, { useEffect, useState } from "react";
import { ChevronUpIcon } from "lucide-react";
import FooterContent from "../_components/FooterContent";
const FooterNormal = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="w-full max-w-[1250px] h-auto flex flex-col items-center justify-center">
        <div className=" bottom-5 flex flex-col items-center h-full w-full ">
          <ChevronUpIcon className="w-10 h-10 text-zinc-900 dark:text-zinc-200 " />

          <div className="h-[32px] w-[32px] cursor-pointer md:h-[50px] md:w-[50px] border flex items-center justify-center border-zinc-400 dark:border-zinc-200 rounded-full">
            <ScaleAndScroll />
          </div>

          <div className="h-[30px] md:h-[50px] w-[1px] bg-zinc-400 dark:bg-zinc-200 "></div>
          <div className="h-[1px] w-[85%] sm:w-[90%]   2xl:w-[100%] bg-zinc-400 dark:bg-zinc-200"></div>
          <FooterContent />
        </div>
      </div>
    </div>
  );
};

export default FooterNormal;

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
