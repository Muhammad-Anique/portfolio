import React from "react";
import ProjectCardFullScreen from "../_components/ProjectCardFullScreen";
import { supabase } from "../lib/supabase";
import Link from "next/link";

const Projects = async () => {
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("priority", { ascending: true });
  const displayedProjects = projects.slice(0, 3);
  const remainingProjects = projects.length - displayedProjects.length;

  return (
    <div className="w-full  h-auto py-16 md:py-32  flex items-center justify-center  p-3 sm:p-6 md:p-10">
      <div className="w-full h-full flex max-w-[1250px] flex-col gap-4">
        <h1 className="text-zinc-900 dark:text-zinc-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl -translate-y-1 md:-translate-y-12 lg:-translate-y-16 big-winks-text -rotate-[6deg] text-md z-30">
          Recent Work
        </h1>

        <div className="flex flex-col gap-2 ">
          <ProjectCardFullScreen project={displayedProjects[0]} />
          <div className="flex flex-col md:flex-row gap-2  items-center justify-center">
            <ProjectCardFullScreen project={displayedProjects[1]} />
            <ProjectCardFullScreen project={displayedProjects[2]} />
          </div>
        </div>
        <div className="w-full items-end justify-end flex mt-5 md:mt-8">
          <Link
            href="/projects"
            className=" bg-gradient-to-r dark:from-[#2b2b2bd3] dark:to-[#00000049] from-zinc-200/40 mr-2 to-zinc-50/60 rounded-xl w-[180px] md:w-[220px] h-[55px] md:h-[65px] flex items-center justify-between"
          >
            <h1 className="px-4 text-lg md:text-xl font-manrope font-medium">
              More
            </h1>
            <div
              id="more-button-project"
              data-name="circle"
              className="rounded-xl w-[45px]  md:w-[55px] h-[45px] md:h-[55px] bg-gradient-to-b flex items-center justify-center from-p1 to-orange-400 "
            >
              <p className="font-medium text-2xl md:text-3xl text-zinc-100 font-manrope">
                {remainingProjects > 0 ? remainingProjects : 0}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
