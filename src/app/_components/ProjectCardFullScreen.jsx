"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveUpLeftIcon } from "lucide-react";
const ProjectCardFullScreen = ({ project }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const primary = project?.primaryColor || "#EC420F";
  const secondary = project?.secondaryColor || "#FFA500";
  const tertiary = project?.tertiaryColor || "#EC420F";

  useEffect(() => {
    const sidebar = document.getElementById("sidebar-main");
    const more = document.getElementById("more-button-project");
    console.log("Sidebar >>>", sidebar);
    const navdot = document.getElementById("nav-dot");
    if (showCursor) {
      if (sidebar) {
        sidebar.style.background = `linear-gradient(to bottom, ${primary}, ${secondary})`;
      }
      if (more) {
        more.style.background = `linear-gradient(to bottom, ${primary}, ${secondary})`;
      }
      if (navdot) {
        navdot.style.backgroundColor = `${tertiary}`;
      }
    } else {
      if (sidebar) {
        sidebar.style.background = `linear-gradient(to bottom, #EC420F, #FFA500)`; // Default gradient
      }
      if (navdot) {
        navdot.style.backgroundColor = "#EC420F"; // Default solid color
      }
      if (more) {
        more.style.background = `linear-gradient(to bottom, #EC420F, #FFA500)`; // Default grad
      }
    }
  }, [showCursor]);

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
          className="fixed hidden p-3 md:flex cusor-pointer   rounded-lg pointer-events-none transform -translate-x-1/2 -translate-y-1/2 items-center z-50 justify-center"
        >
          {/* <div className="relative rounded-lg overflow-hidden w-full h-full">
            <Image
              src={project?.projectFeatureImage}
              alt={project?.projectFeatureAlt}
              fill
              objectFit="cover"
            />
          </div> */}
          <div
            style={{
              background: `linear-gradient(to bottom, ${project?.primaryColor}, ${project?.secondaryColor})`,
            }}
            className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-gradient-to-b from-p1 to-orange-400"
          >
            <h1 className="big-winks-text dark:text-zinc-50 text-zinc-50 text-xl  absolute font-medium">
              View
            </h1>
          </div>
        </div>
      )}

      <Link
        prefetch={true}
        href={`/projects/${project?.projectBody?.slug}`}
        data-name="Project"
        className="w-full  cursor-pointer bg-zinc-50 dark:bg-zinc-950  p-1 rounded-[17px] md:rounded-[22px] duration-200 ease-in-out transition-all  h-auto  flex flex-col lg:flex-row justify-between items-center gap-6 xs:gap-8 sm:gap-10 2xl:gap-16"
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
        onMouseMove={handleMouseMove}
      >
        <div className="flex flex-col w-full h-full gap-2 items-start self-start md:self-center ">
          <div className="relative overflow-hidden rounded-[15px] md:rounded-[20px] w-full h-full ">
            <div
              className="relative w-full h-0"
              style={{ paddingTop: "56.25%" }}
            >
              {/* The paddingTop is calculated as (9 / 16) * 100 for a 16:9 ratio */}
              <Image
                src={project?.projectThumbnail || "/l1.jpg"} // Fallback to a placeholder
                alt={project?.projectFeatureAlt || "Project Feature Image"}
                fill
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <div className="bg-zinc-50  dark:bg-zinc-950  absolute bottom-0 right-0 z-10 w-[180px] xs:w-[270px] md:w-[260px] xl:w-[400px] rounded-tl-[15px] md:rounded-tl-[20px] h-[40px] md:h-[45px] xl:h-[60px]"></div>
            <div
              className={`  white-shd2 z-10 absolute bottom-0 right-[180px] xs:right-[270px] md:right-[260px] xl:right-[400px] w-[40px] h-[40px] rounded-full`}
            ></div>
            <div
              className={` white-shd2 z-10 absolute bottom-[40px] md:bottom-[45px] xl:bottom-[60px] right-0 w-[40px] h-[40px] rounded-full`}
            ></div>

            <div className="absolute z-10 bottom-0 right-0 flex items-center w-[180px] xs:w-[270px] md:w-[260px] xl:w-[400px]  justify-between px-3 md:px-5 h-[40px] md:h-[45px] xl:h-[60px]">
              <h1
                className={` text-zinc-950 dark:text-zinc-200 text-xl xl:text-3xl font-lato `}
              >
                {project?.projectTitle}
              </h1>
              <MoveUpLeftIcon className="w-5 h-5 xl:w-7 xl:h-7 text-zinc-900 dark:text-zinc-200" />
            </div>
          </div>
        </div>

        {/* <div className="flex w-full h-full  flex-row items-end gap-3 self-center  ">
          <div className="flex w-full p-2   flex-col items-end gap-3 self-center ">
            <div className="flex flex-row gap-3 md:gap-5 items-center">
              <h1 className="text-zinc-900 dark:text-zinc-200 font-semibold text-right  text-3xl sm:text-4xl md:text-6xl lg:text-5xl xl:text-6xl">
                {project?.projectTitle}
              </h1>
            </div>

            <div className=" ">
              <p className="dark:text-zinc-300 text-right text-zinc-700 text-md w-full lg:max-w-[350px] xl:max-w-[420px]  font-lato ">
                {truncateExcerpt(project?.projectExcerpt)}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p
                style={{
                  color: project?.tertiaryColor,
                }}
                className="text-p1 dark:text-zinc-200 text-md lg:text-lg xl:text-xl font-lato big-winks-text tracking-widest"
              >
                {project?.projectBody?.devType}
              </p>
              <p className="dark:text-zinc-300 text-zinc-800 font-lato text-sm lg:text-md xl:text-lg font-bold ">
                {project?.projectBody?.from} -{" "}
                <span> {project?.projectBody?.company}</span> -{" "}
                {project?.projectBody?.designation}
              </p>
            </div>
            <div className="hidden xs:flex lg:hidden xl:flex flex-row flex-wrap gap-3 items-end justify-end w-full lg:w-[80%]">
              {project?.projectBody?.tags.map((tag, index) => {
                return (
                  <div
                    key={index}
                    className="px-2 py-1 bg-gradient-to-r dark:from-zinc-800/30 dark:to-zinc-950/40 from-zinc-50 border border-zinc-200/80 to-zinc-50 rounded-lg backdrop-blur-md "
                  >
                    <h1 className="text-zinc-900 dark:text-zinc-200  text-sm font-lato">
                      {tag}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[6px] h-full hidden  mt-1 min-h-[200px] sm:min-h-[250px]  lg:min-h-[230px] h bg-gradient-to-b from-p1 to-orange-400 self-start md:self-center rounded-full"></div>
        </div> */}
      </Link>
    </>
  );
};

export default ProjectCardFullScreen;
