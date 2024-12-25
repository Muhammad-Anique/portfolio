"use client";
import React, { useState } from "react";

import ProjectHeadings from "./ProjectHeadings";
import { StarIcon, XIcon } from "lucide-react";
const ProjectIndex = ({ projectData }) => {
  const [isIndexOpen, setIsIndexOpen] = useState(false);

  return (
    <>
      {isIndexOpen ? (
        <div
          className={`flex-col ${
            isIndexOpen ? "flex " : "hidden"
          } fixed bg-zinc-50/60 dark:bg-zinc-900/50 backdrop-blur-md  rounded-lg p-3 z-30 bottom-4 right-4  self-start min-w-[300px] `}
        >
          <div className="flex items-center justify-between">
            <p className="font-extrabold text-zinc-800 dark:text-zinc-200">
              Content
            </p>
            <XIcon
              onClick={() => {
                setIsIndexOpen(false);
              }}
              className="w-5 h-5 text-zinc-900 dark:text-zinc-200"
            />
          </div>

          <div className="h-[5px] rounded-full w-[40%] bg-gradient-to-r from-p1 to-orange-400 mt-2"></div>
          {projectData && (
            <div className="flex flex-col w-full py-2">
              <ProjectHeadings projectData={projectData} />
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => {
            setIsIndexOpen(true);
          }}
          className="fixed bottom-4 right-4 z-50 w-[50px] h-[50px] bg-p1 rounded-full  items-center justify-center flex"
        >
          <StarIcon className="w-6 h-6 text-zinc-200" />
        </button>
      )}
    </>
  );
};

export default ProjectIndex;
