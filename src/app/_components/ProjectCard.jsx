"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const ProjectCard = ({ project }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  function truncateExcerpt(excerpt) {
    const words = excerpt.split(" "); // Split the excerpt into an array of words
    if (words.length > 10) {
      return words.slice(0, 16).join(" ") + "    .......... read more"; // Get first 20 words and append 'Read more'
    }
    return excerpt; // Return the full excerpt if it's less than or equal to 20 words
  }
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <>
      {showCursor && (
        <div
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y + window.scrollY,
          }}
          className="fixed hidden p-3 md:flex md:w-[300px] md:h-[300px]  bg-gradient-to-b from-zinc-400/40 to-zinc-200/40 dark:from-[#1c1c1ceb] dark:to-[#0000006c] rounded-lg pointer-events-none transform -translate-x-1/2 -translate-y-1/2 items-center z-50 justify-center"
        >
          <div className="relative rounded-lg overflow-hidden w-full h-full">
            <Image
              src={project?.projectFeatureImage}
              alt={project?.projectFeatureAlt}
              fill
              objectFit="cover"
            />
          </div>
          <div
            data-name="circle"
            className="rounded-full absolute  w-[100px] h-[100px] bg-gradient-to-b flex items-center justify-center from-p1 to-orange-400 dark:via-p2 dark:to-p3"
          >
            <h1 className="font-lato text-zinc-200  font-medium">View</h1>
          </div>
        </div>
      )}

      <Link
        prefetch={true}
        href={`/projects/${project?.projectBody?.slug}`}
        data-name="Project"
        className="w-full min-h-[200px] hover:backdrop-blur-xl hover:scale-105  duration-200 ease-in-out transition-all  h-auto border backdrop-blur-sm md:backdrop-blur-0 dark:border-[#54545450] border-zinc-300 md:border-b-[2px] md:border-t-0 md:border-l-0 md:border-r-0 md:dark:border-b-[#54545450] md:border-b-zinc-300 px-7 py-10 lg:px-7 lg:py-5 flex flex-col md:flex-row justify-between items-center gap-16"
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
            <h1 className="text-zinc-900 dark:text-zinc-200  text-2xl lg:text-3xl xl:text-5xl">
              {project?.projectTitle}
            </h1>
          </div>

          <div className=" ">
            <p className="dark:text-zinc-300 text-zinc-700 text-md  max-w-[300px] md:max-w-[620px]  backdrop-blur-md font-lato ">
              {truncateExcerpt(project?.projectExcerpt)}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-end gap-3 self-end md:self-center ">
          <h1 className="text-zinc-900 dark:text-zinc-200  text-2xl lg:text-3xl xl:text-4xl font-playfair">
            {project?.projectBody?.devType}
          </h1>
          <div className="flex flex-col items-end gap-2">
            <p className="text-p1 dark:text-zinc-400 text-md lg:text-lg xl:text-xl font-manrope big-winks-text tracking-widest">
              {project?.projectBody?.designation}
            </p>
            <p className="dark:text-zinc-300 text-zinc-700 text-md lg:text-lg xl:text-xl font-bold font-manrope">
              {project?.projectBody?.from} -{" "}
              <span> {project?.projectBody?.company}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
