import OptimizedBackground from "../_components/OptimizedBackground";
import ProjectCard from "../_components/ProjectCard";
import { supabase } from "../lib/supabase";

export default async function ProjectDetails() {
  const { data } = await supabase.from("projects").select("*");

  return (
    <div className="w-full h-auto">
      <OptimizedBackground src="/l1.jpg" opacity={0.1} />
      <div className="backdrop-blur-md mt-20 md:mt-5 w-full h-full p-7 sm:px-10 sm:py-16 md:py-32 md:px-16 flex items-center justify-center relative">
        <div className="w-full h-full flex max-w-[1250px] flex-col gap-4">
          <h1 className="text-zinc-900 dark:text-zinc-200 text-3xl -translate-y-1 md:-translate-y-12 lg:-translate-y-16 big-winks-text -rotate-[10deg] text-md z-30">
            Recent Work
          </h1>
          <hr className="bg-[#54545450] w-full h-[2px] border-none hidden md:block" />
          <div className="flex flex-col gap-4">
            {data && data.length > 0 ? (
              data.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))
            ) : (
              <p>No projects available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
