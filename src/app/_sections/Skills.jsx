// components/Skills.js (Client Component)

"use client";
import {
  ArrowRight,
  Clock10Icon,
  ClockIcon,
  GridIcon,
  PanelsTopLeft,
  TargetIcon,
} from "lucide-react";
import React, { useState } from "react";

// Accept skills as props
const Skills = ({ skills, isOnHome, direction }) => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [currentSkillSetElement, setCurrentSkillSetELement] = useState(0);
  const [selectedSkillElement, setSelectedSkillElement] = useState(
    skills[0].skillset[0]
  );
  const [skillSet, setSkillSet] = useState(skills[0]?.skillset);

  // Handle skill selection change
  const handleSkillSelect = (index) => {
    setCurrentSkillSetELement(index);
    setSelectedSkillElement(skillSet[index]);
  };

  const handleSkill = (index) => {
    setCurrentSkillSetELement(0);
    setSelectedSkillElement(skills[index].skillset[0]);
    setCurrentSkillIndex(index);
    setSelectedSkill(skills[index]);
    setSkillSet(skills[index].skillset);
  };

  // Handle skill navigation
  const handleNavigation = (direction) => {
    const newIndex = (currentSkillSetElement + direction) % skillSet.length;
    if (newIndex >= 0 && newIndex < skillSet.length) {
      setCurrentSkillSetELement(newIndex);
      setSelectedSkillElement(skillSet[newIndex]);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div
        className={`max-w-[1250px] ${
          isOnHome ? "py-32" : "py-10"
        } flex items-center justify-center flex-col`}
      >
        {skills && selectedSkill && (
          <div
            key={currentSkillIndex}
            className={`w-full min-h-[400px]  gap-16 sm:gap-24 xl:gap-10 flex flex-col xl:flex-row ${
              direction === 1 ? "xl:flex-row-reverse" : ""
            } items-center justify-center`}
          >
            {/* Skill Details Section */}
            <div className="flex lg:scale-[0.85] px-5 sm:px-7 md:px-12 xl:px-0 flex-col max-w-[700px] w-full 2xl:scale-90 xl:ml-5 xl:w-[50%]">
              <h1 className="text-zinc-900 dark:text-zinc-200 text-5xl sm:text-7xl font-playfair px-3 ">
                {selectedSkill.stack.split(" ")[0]} <br />
                <span className="ml-10 md:ml-20">
                  {selectedSkill.stack.split(" ")[1]}
                </span>
              </h1>
              <div className="flex flex-col">
                <div
                  className="grid mt-5 sm:mt-0 grid-cols-2 grid-rows-2 xl:items-start items-center justify-items-center place-content-center
            xl:justify-items-start"
                >
                  <StatBlock
                    value={selectedSkill.efficiency}
                    label="Stack Efficiency"
                    sign="%"
                    icon={<TargetIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
                  />
                  <StatBlock
                    value={selectedSkill.technologies}
                    label="Technologies"
                    sign="+"
                    icon={<GridIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
                  />
                  <StatBlock
                    value={selectedSkill.experience}
                    label="Experience"
                    sign="+"
                    icon={<ClockIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
                  />
                  <StatBlock
                    value={selectedSkill.projects}
                    sign="+"
                    label="Projects"
                    icon={<PanelsTopLeft className="w-4 h-4 sm:w-5 sm:h-5" />}
                  />
                </div>
              </div>
              <p className="mt-10 text-center xl:text-left dark:text-zinc-300 text-zinc-800">
                {selectedSkill.outro}
              </p>
            </div>

            {/* Skill Image & Mini-Stats Section */}
            {selectedSkillElement && (
              <div className="flex items-center justify-center w-[102%] xl:w-[50%] h-full max-h-fit sm:max-h-full px-0 scale-90 sm:scale-100 sm:px-5">
                <div
                  name="skill-element"
                  className="flex flex-col bg-zinc-50 dark:bg-zinc-900/50 rounded-lg overflow-hidden md:-rotate-2 shadow-lg w-full sm:w-[500px] h-[620px] relative"
                >
                  <div className="w-full h-[250px] sm:h-[300px] relative bg-gradient-to-r from-p1 via-p1 to-orange-400">
                    <div className="flex flex-row flex-wrap p-3 sm:p-4 gap-5 sm:gap-10 absolute top-2 left-2">
                      <MiniStat
                        label="Projects"
                        value={`${selectedSkillElement?.projects}+`}
                        icon={<PanelsTopLeft />}
                      />
                      <MiniStat
                        label="Proficiency"
                        value={`${selectedSkillElement?.efficiency}%`}
                        icon={<TargetIcon />}
                      />
                      <MiniStat
                        label="Experience"
                        value={`${selectedSkillElement?.experience}+ Years`}
                        icon={<Clock10Icon />}
                      />
                    </div>
                    <h1 className="absolute bottom-4 right-4 text-white font-playfair text-right text-5xl sm:text-6xl z-20 w-[80%]">
                      {selectedSkillElement?.title}
                    </h1>
                  </div>
                  <div className="p-4 sm:p-5 flex flex-wrap flex-row gap-2 sm:gap-3 items-center justify-start">
                    {selectedSkill.skillset.map((skill, index) => (
                      <SkillBadge
                        key={index}
                        label={skill.title}
                        gradient={
                          index === currentSkillSetElement ? true : false
                        }
                        onClick={() => handleSkillSelect(index)} // Handle skill badge click
                      />
                    ))}
                  </div>
                  <button className="self-end justify-end absolute right-2 bottom-2 sm:bottom-5 sm:right-5">
                    <ArrowRight
                      onClick={() => handleNavigation(1)} // Handle right arrow click
                      className="text-zinc-950 dark:text-zinc-50 w-10 h-10"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Pagination Section */}
        {skills && selectedSkill && isOnHome && (
          <button className="flex flex-row self-end justify-end items-end gap-2 mr-3 mt-6">
            {[...Array(skills?.length)].map((_, index) => (
              <div
                key={index}
                onClick={() => handleSkill(index)}
                className={`rounded-full w-[40px] h-[40px]  border-2 dark:border-zinc-200 hover:dark:bg-zinc-200 border-zinc-800 hover:bg-zinc-800 group flex items-center justify-center ${
                  currentSkillIndex === index ? "bg-zinc-800 text-zinc-50" : ""
                }`}
              >
                <p
                  className={`font-lato text-md group-hover:text-zinc-200 group-hover:dark:text-zinc-800 ${
                    currentSkillIndex === index ? "text-zinc-50" : ""
                  }`}
                >
                  {index + 1}
                </p>
              </div>
            ))}
          </button>
        )}
      </div>
    </div>
  );
};

export default Skills;

// Reusable components for cleaner code
const StatBlock = ({ value, label, icon, sign }) => (
  <div className="flex flex-col items-center justify-center gap-2">
    <div className="flex flex-row">
      <p className="font-playfair dark:text-zinc-200 text-[70px] sm:text-[130px] text-zinc-900 leading-0">
        {value}
      </p>
      <p className="font-lato text-5xl sm:text-7xl self-end -translate-y-5 text-p1">
        {sign}
      </p>
    </div>
    <div className="flex gap-1 text-zinc-900  dark:text-zinc-200 items-center justify-center  flex-row -translate-y-4">
      {icon}
      <p className="text-zinc-900  dark:text-zinc-200 font-lato text-md sm:text-xl">
        {label}
      </p>
    </div>
  </div>
);

const MiniStat = ({ label, value, icon }) => (
  <div className="flex scale-75 sm:scale-100 flex-col items-center justify-center">
    <div className="flex flex-row items-center text-zinc-50 gap-1 justify-center">
      {icon}
      <p className="font-bold font-lato text-zinc-50 text-xl">{value}</p>
    </div>
    <p className="font-normal text-zinc-50 text-md font-lato">{label}</p>
  </div>
);

const SkillBadge = ({ label, gradient = false, onClick }) => (
  <button
    onClick={onClick}
    className={`px-2 sm:px-3 py-1  sm:py-2 ${
      gradient
        ? "bg-gradient-to-r from-p1 to-orange-400 text-white dark:text-zinc-100"
        : "border border-zinc-300/40 dark:border-zinc-600/50 text-zinc-800  hover:text-zinc-100 dark:text-zinc-100"
    } rounded-md group duration-150 ease-in-out transition-all   ${
      gradient
        ? ""
        : "hover:bg-gradient-to-r hover:from-p1 ease-in-out duration-150  hover:to-orange-400 hover:text-white text-white"
    }`}
  >
    <p className="font-lato text-md sm:text-lg">{label}</p>
  </button>
);
