"use client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function truncateExcerpt(excerpt) {
  const words = excerpt.split(" "); // Split the excerpt into an array of words
  if (words.length > 20) {
    return words.slice(0, 20).join(" ") + " ......... read more"; // Get first 20 words and append 'Read more'
  }
  return excerpt; // Return the full excerpt if it's less than or equal to 20 words
}

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const suffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${day}${suffix(day)} ${month} ${year}`;
}

const BlogCard = (props) => {
  const blog = props.blog;
  console.log("PRP : ", props);
  return (
    <div
      name="blog-card"
      className="max-w-[350px] group   md:min-w-[450px]  md:min-h-[430px] w-full dark:backdrop-blur-sm  rounded-lg  h-auto group cursor-pointer relative"
    >
      <div className="h-full w-full  z-[50]  flex md:mt-3 flex-col  ">
        <div className="relative group-hover:scale-105 duration-300 ease-in-out transition-all overflow-hidden rounded-lg min-w-[250px] min-h-[270px] w-full h-full ">
          <Image
            src={blog?.blogFeatureImage}
            alt={blog?.blogFeatureAlt}
            fill
            objectFit="cover"
          />
        </div>
        <h1 className="text-zinc-900 dark:text-zinc-200  font-extrabold font-lato  text-4xl md:text-[32px] mt-5 ">
          {blog?.blogTitle}
        </h1>
        <div className="flex flex-row items-center  gap-3  mt-2 ">
          <p className="text-zinc-700 dark:text-zinc-300 text-md ">
            {formatTimestamp(blog?.created_at)}
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 text-md">|</p>
          <ClockIcon className="w-4 h-4 text-p1" />
          <p className="text-zinc-700 dark:text-zinc-300 text-md">
            6 minute read
          </p>
        </div>

        <p className="text-sm  max-w-lg leading-relaxed w-full md:text-[17px] font-lato  text-zinc-700 dark:text-zinc-400 mt-2">
          {truncateExcerpt(blog?.blogExcerpt)}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
