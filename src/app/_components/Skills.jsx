import React from "react";

const Skills = () => {
  return (
    <div className="w-[85%]">
      <div className="flex flex-col gap-5 transition-transform ease-in-out duration-500">
        <h1
          data-name="Heading"
          className="text-zinc-900 dark:text-zinc-200  font-playfair text-4xl md:text-5xl transition-transform duration-500"
        >
          Front-End <br />
          <i className="ml-8 text-zinc-900 dark:text-zinc-100">Development</i>
        </h1>

        <p className="font-manrope  text-md  leading-7 text-zinc-700 dark:text-zinc-400 max-w-xl ml-2 ">
          edj ekjd d ekjd ekjd ekjd ekjd ekdje dkje dkje dkje dkejd ekjd ekjd
          ekjd ejkd edj dekj dekjd ke
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
          <SkillElement skill="React Js" />
          <SkillElement skill="React Js" />
          <SkillElement skill="React Js" />
          <SkillElement skill="React Js" />
          <SkillElement skill="React Js" />
        </div>
      </div>
    </div>
  );
};

export default Skills;

const SkillElement = ({ skill }) => {
  return (
    <div className="w-full  backdrop-blur-sm h-[45px] md:h-[55px] shrink-0 rounded-tl-full rounded-br-full rounded-tr-full bg-gradient-to-r  from-zinc-300/60   ease-in-out  transition-all duration-200  hover:scale-[1.02] to-zinc-200/20 dark:from-[#2f2f2f43] dark:to-[#2f2f2fbe] flex items-center px-7">
      <h1 className="font-manrope text-lg md:text-xl text-zinc-900 dark:text-zinc-200  ">
        {skill}
      </h1>
    </div>
  );
};
