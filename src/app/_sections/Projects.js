import React from "react";
import ProjectCard from "../_components/ProjectCard";
import { supabase } from "../lib/supabase";
import Link from "next/link";

const Projects = async () => {
  const { data: projects } = await supabase.from("projects").select("*");
  const displayedProjects = projects.slice(0, 3);
  const remainingProjects = projects.length - displayedProjects.length;

  return (
    <div className="w-full  h-auto py-16 md:py-7 md:h-screen flex items-center justify-center  p-7 md:p-10">
      <div className="w-full h-full flex max-w-[1250px] flex-col gap-4">
        <h1 className="text-zinc-900 dark:text-zinc-200 text-3xl -translate-y-1 md:-translate-y-12 lg:-translate-y-24 big-winks-text -rotate-[10deg] text-md z-30">
          Recent Work
        </h1>

        <div className="flex flex-col gap-4">
          {/* Map the first three projects */}
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
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
              data-name="circle"
              className="rounded-xl w-[45px] md:w-[55px] h-[45px] md:h-[55px] bg-gradient-to-b flex items-center justify-center from-p1 to-orange-400 "
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
