"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const ProjectCard = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [showCursor, setShowCursor] = useState(false);
  
    const handleMouseMove = (e: React.MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    return (
      <>
        {showCursor && (
          <div
            style={{
              left: cursorPosition.x,
              top: cursorPosition.y,
            }}
            className="fixed hidden md:flex md:w-[300px] md:h-[300px] z-20 bg-gradient-to-b from-[#1c1c1ceb] to-[#0000006c] rounded-lg pointer-events-none transform -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          >
            <div
              data-name="circle"
              className="rounded-full  w-[100px] h-[100px] bg-gradient-to-b flex items-center justify-center from-p1 via-p2 to-p3"
            >
              <h1 className="font-manrope text-zinc-200 font-medium">View</h1>
            </div>
          </div>
        )}
  
        <Link
          href="/projects/1"
          data-name="Project"
          className="w-full min-h-[200px] h-auto border backdrop-blur-sm md:backdrop-blur-0 border-[#54545450] md:border-b-[2px] md:border-t-0 md:border-l-0 md:border-r-0 md:border-b-[#54545450] px-7 py-10 lg:px-7 lg:py-5 flex flex-col md:flex-row justify-between items-center gap-16"
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
          onMouseMove={handleMouseMove}
        >
          <div className="flex flex-col gap-2 items-start self-start md:self-center ">
            <div className="flex flex-row gap-3 md:gap-5 items-center">
              <div className="relative flex items-center justify-center lg:h-[35px] h-[20px] w-[20px] lg:w-[35px]">
                <Image
                  src="/favicon.png"
                  alt="Helloworld-logo"
                  width={60}
                  height={60}
                />
              </div>
              <h1 className="text-zinc-200 text-2xl lg:text-3xl xl:text-5xl">
                Helloworld
              </h1>
            </div>
  
            <div className=" ">
              <p className="text-zinc-300  text-md  max-w-[300px] md:max-w-[350px]  backdrop-blur-md font-manrope ">
                Helloworld is webapp used to create webisites using the power of
                AI
              </p>
            </div>
          </div>
  
  
          <div className="flex w-full flex-col items-end gap-3 self-end md:self-center ">
            <h1 className="text-zinc-200 text-2xl lg:text-3xl xl:text-4xl font-playfair">
              Full Stack Development
            </h1>
            <div className="flex flex-col items-end gap-2">
              <p className="text-zinc-400 text-md lg:text-lg xl:text-xl font-manrope big-winks-text tracking-widest">
                Professional lead Developer
              </p>
              <p className="text-zinc-300 text-md lg:text-lg xl:text-xl font-bold font-manrope">
                2024 - <span>Fiver</span>
              </p>
            </div>
          </div>
  
  
        </Link>
      </>
    );
  };

  export default ProjectCard;