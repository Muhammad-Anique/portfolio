import React from "react";
import GithubLink from "./GithubLink";
import InstagramLink from "./InstagramLink";
import LinkedInLink from "./LinkedInLink";
import BehanceLink from "./BehanceLink";
import MediumLink from "./MediumLink";
const FooterContent = () => {
  return (
    <div className="w-[85%] sm:w-[90%] 2xl:w-[100%] h-auto py-9 md:py-16 mb-5 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-8xl text-zinc-900 dark:text-zinc-200  font-playfair">
          ma
        </h1>
        <p className="font-manrope text-zinc-900 dark:text-zinc-200  text-xl">
          Muhammad Anique
        </p>
        <p className="max-w-xs text-zinc-600 dark:text-zinc-400 font-manrope text-xs">
          A passionate Full Stack Web Developer with expertise in modern web
          technologies, including Next.js ,React.js, Node.js , and Express.js.
        </p>
      </div>

      <div className="flex flex-row md:flex-col gap-5 text-zinc-900 dark:text-zinc-200   h-full min-h-[130px] items-center justify-center px-4">
        <GithubLink />
        <InstagramLink />
        <LinkedInLink />
        <MediumLink />
        <BehanceLink />
      </div>

      <div className="flex flex-col gap-2">
        <div className="relative self-end">
          <h1 className="big-winks-text text-4xl text-zinc-900 dark:text-zinc-200 ">
            Anique
          </h1>
        </div>
        <p className="font-manrope text-zinc-900 dark:text-zinc-200  text-right text-md">
          anique.cs@gmail.com
        </p>
        <p className="max-w-xs text-zinc-600 dark:text-zinc-400 font-manrope text-xs text-right">
          ©2024 Muhammad Anique. All rights reserved. Unauthorized reproduction
          or distribution of any content from this site is strictly prohibited.
        </p>
      </div>
    </div>
  );
};

export default FooterContent;
