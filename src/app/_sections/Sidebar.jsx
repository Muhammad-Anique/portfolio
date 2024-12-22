"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import { useTheme } from "../_context/ThemeContext";
import Image from "next/image";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  MailIcon,
  ChevronRight,
  X,
} from "lucide-react";

import ProgressCicle from "../_components/ProgressCircle";

const MyQuickPersonalInfo = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/corduroy.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="col-start-2  col-span-2 row-span-6 flex flex-col gap-2 items-center justify-center  bg-black h-full relative "
    >
      <div className="absolute bg-gradient-to-b from-[#000000ad] to-[#000000cf] w-full h-full z-10"></div>
      <div className="relative  flex items-center justify-center z-20 w-[140px] h-[140px] 2xl:w-[170px] 2xl:h-[170px]">
        <div className="z-10 flex items-start justify-center w-[140px] h-[140px]  2xl:w-[170px] 2xl:h-[170px] overflow-hidden rounded-full bg-gradient-to-b  from-[#39C8C1] to-[#39c8c12d] ">
          <Image
            src="/Muhammad-Anique.avif"
            alt="profile-image"
            className="z-10 w-[130px] h-auto 2xl:w-[170px] 2xl:h-auto"
            width={170}
            height={170}
          />
        </div>
      </div>
      <div className="flex flex-col items-center z-20 justify-center">
        <h1 className="font-bold font-manrope text-zinc-900 dark:text-zinc-200  text-md">
          Muhammad Anique
        </h1>
        <p className="font-thin text-zinc-100 text-xs xl:text-sm font-manrope">
          Full Stack Developer | AI Specialist
        </p>
        <div className="2xl:flex flex-row gap-2  mt-1 xl:mt-2 items-center hidden ">
          <MailIcon className="w-3 h-3 text-zinc-700 dark:text-zinc-400" />
          <p className="font-normal text-zinc-700 dark:text-zinc-400 font-manrope text-[12px] xl:text-xs">
            anique.cs@gmail.com
          </p>
        </div>
      </div>

      <div className="flex w-full z-20 items-center justify-between px-5 absolute  bottom-0 2xl:bottom-2 py-3  ">
        <div className="flex flex-row gap-2 items-center">
          <DownloadIcon className="w-6 h-6 text-zinc-900 dark:text-zinc-200 " />
          <p className="text-zinc-900 dark:text-zinc-200  text-sm font-thin">
            Resume
          </p>
        </div>

        <ArrowUpRightIcon className="w-6 h-6 text-zinc-900 dark:text-zinc-200 " />
      </div>
    </div>
  );
};

const MyHistory = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/corduroy.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="col-start-4 col-span-2 row-start-3 row-span-4 bg-black flex items-center justify-center relative"
    >
      <div className="absolute bg-gradient-to-b from-[#0000007b] to-[#000000cf] w-full h-full z-10"></div>

      <div className="w-full h-full p-4 flex z-20 flex-col space-y-2">
        <h1 className="text-zinc-500 font-medium text-[10px] font-manrope  px-3 tracking-widest mt-2">
          HISTORY
        </h1>

        <div className="flex flex-col px-3 mt-2 2xl:mt-3">
          <div className="flex flex-row gap-2 items-center justify-center">
            <div className="flex flex-col gap-2">
              <h1 className=" text-zinc-900 dark:text-zinc-200  font-playfair text-md 2xl:text-2xl tracking-wide  font-extrabold">
                Fiver
              </h1>
              <i className="font-light text-zinc-300 text-sm 2xl:text-md">
                2024 - <span className="text-zinc-300">Current</span>
              </i>

              <i className="font-thin font-manrope text-zinc-900 dark:text-zinc-200  text-xs 2xl:text-sm ">
                Curabitur facilisis ligula ut risus tempus, id pretium eros
                ullamcorper. Nunc efficitur magna ut justo volutpat, a tincidunt
                lectus vulputate.
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyRecentProjects = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/corduroy.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="col-start-2 col-span-4 row-start-7 row-span-6 bg-black flex items-center justify-center relative"
    >
      <div className="absolute bg-gradient-to-b from-[#000000bf] to-[#000000cf] w-full h-full z-10"></div>

      <div className="w-full h-full px-4 pt-4 z-20">
        <h1 className="text-zinc-500 font-medium text-[10px] font-manrope  px-3 tracking-widest mt-2">
          RECENT PROJECTS
        </h1>
        <div className="flex flex-row overflow-x gap-2 items-center justify-start w-full h-full p-3">
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div className="bg-[#0f0f0f9b] w-[50%] h-full relative flex  px-5 py-7">
      <div className=" right-3 top-3 absolute z-20">
        <ArrowUpRightIcon className="w-5 h-5 text-zinc-900 dark:text-zinc-200 " />
      </div>

      <div className="flex flex-col ">
        <h1 className="font-bold text-2xl 2xl:text-3xl font-playfair text-zinc-900 dark:text-zinc-200 ">
          Helloworld
        </h1>
        <p className=" text-zinc-900 dark:text-zinc-200  text-sm 2xl:text-md mt-4 font-manrope">
          Full Stack Development
        </p>

        <i className="font-thin text-zinc-900 dark:text-zinc-200  text-xs 2xl:text-sm mt-3 font-manrope">
          Curabitur facilisis ligula ut risus tempus, id pretium eros
          ullamcorper. Nunc efficitur magna ut justo volutpat, a tincidunt .
        </i>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/corduroy.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="col-start-8 col-span-2 row-start-1 row-span-6 flex items-center justify-center relative"
    >
      <div className="absolute bg-gradient-to-b from-[#000000b1] to-[#000000cf] w-full h-full z-10"></div>

      <div className="grid grid-cols-2 grid-rows-5 w-full h-full  gap-2 z-20">
        <div className="col-span-1 row-span-3 flex flex-col items-center justify-end">
          <h1 className="text-zinc-900 dark:text-zinc-200    text-6xl">9+</h1>
          <p className="text-zinc-500 font-medum text-xs mt-2 tracking-widest">
            CLIENTS
          </p>
        </div>
        <div className="col-span-1 row-span-3 flex flex-col items-center justify-end">
          <h1 className="text-zinc-900 dark:text-zinc-200  text-6xl">14+</h1>
          <p className="text-zinc-500 font-medum text-xs mt-2 tracking-widest">
            PROJECTS
          </p>
        </div>
        <div className="col-span-1 row-span-2 flex items-center justify-center p-4 ">
          <ProgressCicle progress={40} />
          <p className="absolute text-zinc-300 z-20 text-sm font-manrope">
            50%
          </p>
        </div>
        <div className="col-span-1 row-span-2 flex items-center justify-center p-4 ">
          <ProgressCicle progress={40} />
          <p className="absolute text-zinc-300 z-20 text-sm font-manrope ">
            50%
          </p>
        </div>
      </div>
    </div>
  );
};

const MyExpertiseInANutshell = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/corduroy.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="col-start-6 col-span-2 row-start-3 row-span-8 bg-black flex items-center justify-center relative"
    >
      <div className="absolute bg-gradient-to-b from-[#000000b1] to-[#000000cf] w-full h-full z-10"></div>

      <div className="flex flex-col z-30 p-5 w-full no-scrollbar h-full gap-3 overflow-y-auto">
        <ExpertiseSet title="BACK-END DEVELOPMENT" />
        <ExpertiseSet title="DEVOPS" />
        <ExpertiseSet title="FRONT-END DEVELOPMENT" />
      </div>
    </div>
  );
};

const ExpertiseSet = (props) => {
  return (
    <div className="flex flex-col gap-3 w-full h-auto ">
      <h1 className="text-zinc-500 font-medum text-[10px] mt-2 tracking-widest">
        {props.title}
      </h1>
      <div className="grid grid-cols-2 w-full justify-items-center gap-1">
        <Skill skill="React Js" />
        <Skill skill="React Js" />
        <Skill skill="React Js" />
        <Skill skill="React Js" />
        <Skill skill="React Js" />
        <Skill skill="React Js" />
        <Skill skill="React Js" />
        <Skill skill="React Js" />
        <Skill skill="React Js" />
      </div>
    </div>
  );
};

const Skill = (props) => {
  return (
    <div className="w-full h-[30px] bg-gradient-to-r from-[#1b1b1bd5] to-[#070707be] flex items-center px-2">
      <p className="text-zinc-300 font-manrope text-xs">{props.skill}</p>
    </div>
  );
};

const Analytics = () => {
  const cards = ["/card1.svg", "/card2.svg", "/card3.svg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };
  return (
    <div
      style={{
        backgroundImage: 'url("/corduroy.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="col-start-8 col-span-2 overflow-hidden row-start-7 row-span-4  flex relative  gap-4 h-full"
    >
      <div className="absolute bg-gradient-to-b from-[#000000b1] to-[#000000cf] w-full h-full z-10"></div>

      <div className="absolute  z-[40] bg-gradient-to-r from-[#00000000] to-[#000000] flex w-full h-[240px] justify-end items-center">
        <button className="absolute right-10" onClick={handleNext}>
          <ChevronRight className="w-8 h-8 text-zinc-900 dark:text-zinc-200 " />
        </button>
      </div>
      <div className="flex z-[30] m-1 h-full relative overflow-hidden w-full">
        <motion.div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 230}px)`, // Move the carousel by 230px per card
          }}
        >
          {/* Map through the cards */}
          {cards.map((src, index) => (
            <div
              key={index}
              className="w-[230px] h-full relative shrink-0 mx-2"
            >
              <Image
                src={src}
                alt={`card-${index + 1}`}
                width={300}
                height={300}
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [load, setLoad] = useState(false);
  const [screenType, setScreenType] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenType("mobile");
      } else if (width >= 768 && width < 1300) {
        setScreenType("tablet");
      } else {
        setScreenType("desktop");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleExpand = () => {
    if (isExpanded === false && theme === "dark") {
      setIsExpanded(true);
      setTimeout(() => {
        setLoad(true);
      }, 1000);
    }
  };

  return (
    <div name="sidebar" className="relative">
      <div
        name="MENU"
        className={`z-[30] fixed h-screen w-screen bg-[#101010a3] backdrop-blur-md flex flex-col gap-4 items-center justify-center transition-all duration-500 ${
          isExpanded
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      ></div>
      {screenType === "desktop" && (
        <motion.div
          className="min-w-[20px] fixed left-0 top-[7%] h-[72vh] z-[50]"
          onClick={handleExpand}
          initial={{ width: "1.8vw", skewY: 60, height: "72vh", opacity: 0 }}
          animate={{
            width: isExpanded ? "100vw" : "2.3vw",
            skewY: isExpanded ? 3 : 60,
            height: isExpanded ? "75vh" : "70vh",
            translateY: isExpanded ? "70px" : "0px",
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1, // Increased duration for smoother animation

            ease: "easeInOut", // Use a smoother ease for better transitions
          }}
        >
          <motion.div
            className="bg-gradient-to-b from-[#EC420F]  via-[#EC420F]  to-[#d8681d] w-full h-full relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8, // Smooth the transition of opacity
              ease: "easeInOut",
            }}
          >
            {isExpanded && <Data load={load} setIsExpanded={setIsExpanded} />}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Sidebar;

const Data = ({ load, setIsExpanded }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1.4,
          delay: 1.0,

          ease: "easeInOut",
        }}
        className={`w-full ${
          load ? "grid" : "hidden"
        } h-full  gap-3 grid-cols-10 grid-rows-12 absolute -skew-y-[2deg] scale-110`}
      >
        <div className="col-span-1"></div>
        <MyQuickPersonalInfo />
        <MyHistory />
        <MyExpertiseInANutshell />
        <Stats />
        <MyRecentProjects />
        <Analytics />
        <div className="col-span-1 relative"></div>
        <div
          onClick={() => {
            setIsExpanded(false);
          }}
          className="min-w-[200px] cursor-pointer group w-auto rotate-90 pb-4 pl-5 h-[80px] absolute left-0 z-[50] flex flex-row items-center justify-center gap-3"
        >
          <X className="w-7 h-7 text-black group-hover:text-zinc-900 dark:text-zinc-200 " />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
