import OptimizedBackground from "../_components/OptimizedBackground";
import ProjectCard from "../_components/ProjectCard";

export default function ProjectDetails({}) {
  return (
    <div className="w-full h-auto mt-20 md:mt-5 p-7 sm:px-10 sm:py-16 md:py-32 md:px-16 flex items-center justify-center  relative  ">
      <OptimizedBackground src={"/l2.jpg"} opacity={10} />

      <div className="w-full h-full flex max-w-[1250px] flex-col gap-4">
        <h1 className="text-zinc-200 text-3xl -translate-y-1 md:-translate-y-12 lg:-translate-y-16 big-winks-text -rotate-[10deg] text-md z-30">
          Recent Work
        </h1>
        <hr className="bg-[#54545450] w-full h-[2px] border-none hidden md:block"></hr>
        <div className="flex flex-col gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="w-full items-end justify-end flex mt-5 md:mt-8">
          <div className="bg-gradient-to-r from-[#2b2b2bd3] to-[#00000049] rounded-full w-[180px] md:w-[220px] h-[55px] md:h-[65px] flex items-center justify-between">
            <h1 className="px-4 text-zinc-200 text-lg md:text-xl font-manrope font-medium">
              More
            </h1>
            <div
              data-name="circle"
              className="rounded-full w-[45px] md:w-[55px] h-[45px] md:h-[55px] bg-gradient-to-b flex items-center justify-center from-p1 via-p2 to-p3"
            >
              <h1 className="font-medium text-zinc-200 text-2xl md:text-3xl font-manrope">
                9
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
