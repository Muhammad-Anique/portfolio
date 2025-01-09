import { ChevronRight, ClockIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCardHome = ({ blog, height }) => {
  function truncateExcerpt(excerpt) {
    if (!excerpt) return;
    const words = excerpt?.split(" "); // Split the excerpt into an array of words
    if (words.length > 13) {
      return words.slice(0, 13).join(" ") + "    .......... read more"; // Get first 20 words and append 'Read more'
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
  return (
    <Link
      href={`/blogs/${blog?.slug}`}
      name="blog-card"
      className="  w-full max-w-[600px] min-h-[220px] h-auto group cursor-pointer  relative"
    >
      <div className="h-full w-full  z-[50]  flex  flex-col  ">
        <div
          className={`relative md:rounded-2xl rounded-t-lg  md:rounded-br-[40px] lg:rounded-br-[60px] overflow-hidden w-full ${
            height === "full"
              ? "h-[220px] md:h-[300px] lg:h-[700px]"
              : "h-[220px] md:h-[270px] lg:h-[300px] xl:h-[400px]"
          } `}
        >
          <Image
            src={blog?.blogFeatureImage}
            alt={blog?.blogFeatureAlt}
            fill
            objectFit="cover"
          />

          <div
            id="button-blog"
            className=" hover:-rotate-45 backdrop-blur-md transition-transform scale-[0.65] lg:scale-100  bg-white  w-[90px] h-[90px] rounded-full hidden md:flex items-center justify-center absolute z-10 bottom-0 lg:bottom-4 right-0 lg:right-4 "
          >
            <div
              style={{
                backgroundColor: `${blog?.secondaryColor}`,
              }}
              className="w-[70px] h-[70px] rounded-full   flex items-center justify-center"
            >
              <ChevronRight className="text-zinc-100  w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      <div
        className={` flex md:hidden p-3 mb-2 md:rounded-xl rounded-b-lg z-20 w-full bg-white dark:bg-zinc-950/10 dark:border dark:border-zinc-700 dark:backdrop-blur-md  flex-col  gap-0`}
      >
        <h1 className="text-zinc-900 dark:text-zinc-200  font-bold font-lato text-xl lg:text-4xl ">
          {blog?.blogTitle}
        </h1>
        <div className="flex flex-row items-center  gap-3  mt-2 ">
          <p className="text-zinc-700 dark:text-zinc-300 text-md ">
            {formatTimestamp(blog?.created_at)}
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 text-sm">|</p>
          <ClockIcon className="w-3 h-3 text-p1" />
          <p className="text-zinc-700 dark:text-zinc-300 text-sm">
            6 minute read
          </p>
        </div>
        <p className="text-sm block md:hidden  lg:text-lg font-lato  text-zinc-700 dark:text-zinc-400 mt-1 md:mt-3 lg:mt-4">
          {truncateExcerpt(blog?.blogExcerpt)}
        </p>
      </div>
    </Link>
  );
};

export default BlogCardHome;
