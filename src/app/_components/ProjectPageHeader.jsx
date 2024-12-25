import React from "react";

const ProjectPageHeader = ({ project }) => {
  return (
    <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-between h-auto w-full lg:min-h-[120px] xl:min-h-[150px]">
      <div className="flex flex-col w-full lg:w-[35%] h-full">
        <h1 className="md:text-6xl text-5xl xl:text-7xl text-zinc-900 dark:text-zinc-200  font-playfair">
          {project?.projectTitle}
        </h1>
        <h1 className="md:text-6xl text-5xl xl:text-7xl text-zinc-900 dark:text-zinc-200  font-playfair lg:self-end mb-5 lg:mb-0">
          {project?.projectBody?.category}
        </h1>
      </div>
      <div className="flex flex-col  lg:flex-row w-full  gap-7 h-full  items-end justify-end  ">
        <p className="max-w-sm text-zinc-900 dark:text-zinc-200 font-lato text-sm xl:text-md h-full text-right">
          {project.projectExcerpt}
        </p>
        <div className="h-[4px] lg:h-full lg:min-h-[120px] w-[50%] lg:w-[4px] lg:skew-y-[60deg] bg-gradient-to-r lg:bg-gradient-to-b from-p1 via-p2 to-p3 "></div>
        <div className="flex flex-col h-full w-full lg:w-auto lg:justify-between justify-end text-right">
          <h1 className="w-auto font-lato  text-zinc-900 dark:text-zinc-200  text-md xl:text-lg">
            <span className="big-winks-text text-p1 tracking-widest dark:text-zinc-200">
              {project?.projectBody?.designation}
            </span>{" "}
            <br /> {project?.projectBody?.company}
          </h1>
          <p className="text-zinc-900 dark:text-zinc-200  mt-7">
            {project?.projectBody?.from} - {project?.projectBody?.till}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageHeader;
