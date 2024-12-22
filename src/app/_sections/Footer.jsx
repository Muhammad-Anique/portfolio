"use client";
import React, { useEffect, useState } from "react";
import { ChevronUpIcon } from "lucide-react";
import FooterContent from "../_components/FooterContent";
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
            <b>Thank you</b> for taking the time to explore my portfolio. If you
            find my work interesting or feel that my expertise aligns with your
            needs, {"I'd"} love to hear from you. Whether {"you're"} looking to
            discuss <b>potential projects</b>, <b>explore new ideas</b>, or
            <b>learn more about how I can help you</b>, feel free to drop me an
            email. {"Let's"} <b>connect</b> and see how we can{" "}
            <b>collaborate</b> to bring your vision to life.
          </p>
        </div>

        <div className=" bottom-5 flex flex-col items-center h-full w-full ">
          <ChevronUpIcon className="w-10 h-10 text-zinc-600 dark:text-zinc-200 " />

          <div className="h-[32px] w-[32px] md:h-[50px] md:w-[50px] border flex items-center justify-center border-zinc-600 dark:border-zinc-200 rounded-full">
            <ScaleAndScroll />
          </div>

          <div className="h-[100px] md:h-[230px] w-[1px] bg-zinc-600 dark:bg-zinc-200 "></div>
          <div className="h-[1px] w-[85%] sm:w-[90%]   2xl:w-[100%] bg-zinc-600 dark:bg-zinc-200"></div>
          <FooterContent />
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
