import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCardHome = ({ blog }) => {
  function truncateExcerpt(excerpt) {
    const words = excerpt.split(" "); // Split the excerpt into an array of words
    if (words.length > 13) {
      return words.slice(0, 13).join(" ") + "    .......... read more"; // Get first 20 words and append 'Read more'
    }
    return excerpt; // Return the full excerpt if it's less than or equal to 20 words
  }
  return (
    <Link
      href={`/blogs/${blog?.slug}`}
      name="blog-card"
      className="  w-full h-auto group cursor-pointer  relative"
    >
      <div className="flex   rounded-xl z-20 w-full bg-white dark:bg-zinc-950/10 dark:border dark:border-zinc-700 dark:backdrop-blur-md  flex-col p-4 md:p-6 lg:p-7 gap-0">
        <h1 className="text-zinc-900 dark:text-zinc-200  font-bold font-lato text-2xl lg:text-4xl ">
          {blog?.blogTitle}
        </h1>
        <p className="text-sm block md:hidden w-full lg:text-lg font-lato  text-zinc-700 dark:text-zinc-400 mt-1 md:mt-3 lg:mt-4">
          {truncateExcerpt(blog?.blogExcerpt)}
        </p>
        <p className=" hidden md:block text-sm w-full lg:text-lg font-lato  text-zinc-700 dark:text-zinc-400 mt-1 md:mt-3 lg:mt-4">
          {blog?.blogExcerpt}
        </p>
      </div>
      <div className="h-full w-full  mt-2 z-[50]  flex  flex-col  ">
        <div className="relative rounded-2xl rounded-br-[40px] md:rounded-br-[60px] overflow-hidden w-full h-[230px] md:h-[300px] lg:h-[400px]">
          <Image
            src={blog?.blogFeatureImage}
            alt={blog?.blogFeatureAlt}
            fill
            objectFit="cover"
          />
        </div>
      </div>

      <div className=" hover:-rotate-12 backdrop-blur-md transition-transform scale-75 md:scale-100  bg-white dark:bg-zinc-900 w-[90px] h-[90px] rounded-full flex items-center justify-center absolute z-10 bottom-0 md:bottom-4 right-0 md:right-4 ">
        <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-b from-p1 to-orange-400  flex items-center justify-center">
          <ChevronRight className="text-zinc-100  w-8 h-8" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCardHome;
