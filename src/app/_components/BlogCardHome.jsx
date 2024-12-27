import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCardHome = ({ blog }) => {
  function truncateExcerpt(excerpt) {
    const words = excerpt.split(" "); // Split the excerpt into an array of words
    if (words.length > 10) {
      return words.slice(0, 16).join(" ") + "    .......... read more"; // Get first 20 words and append 'Read more'
    }
    return excerpt; // Return the full excerpt if it's less than or equal to 20 words
  }
  return (
    <Link
      href={`/blogs/${blog?.slug}`}
      name="blog-card"
      className="max-w-[500px] md:h-[500px] md:w-[500px] w-full  h-auto group cursor-pointer  relative"
    >
      <div className="h-full w-full -z-0 dark:border  dark:border-zinc-500/10 absolute rounded-lg -translate-x-3 -translate-y-3"></div>
      <div className="h-full w-full -z-20 bg-gradient-to-b group-hover:rotate-0 ease-in-out duration-200   from-white/60 backdrop-blur-sm rounded-lg to-zinc-200/20  dark:from-[#1d1d1d89] dark:to-[#00000052]  absolute "></div>
      <div className="h-full w-full  z-[50]  flex  flex-col  ">
        <div className="flex flex-col p-3 md:p-7 gap-0">
          <h1 className="text-zinc-900 dark:text-zinc-200  font-bold font-lato text-4xl ">
            {blog?.blogTitle}
          </h1>
          <p className="text-sm w-full md:text-lg font-lato  text-zinc-700 dark:text-zinc-400 mt-4">
            {truncateExcerpt(blog?.blogExcerpt)}
          </p>
        </div>
        <div className="relative rounded-b-lg overflow-hidden mt-4 w-full aspect-[16/9] h-auto">
          <Image
            src={blog?.blogFeatureImage}
            alt={blog?.blogFeatureAlt}
            fill
            objectFit="cover"
          />
        </div>
      </div>

      <div className=" hover:-rotate-12 backdrop-blur-md transition-transform scale-75 md:scale-90 w-[110px] h-[110px] group-hover:scale-105 group-hover:rotate-2 duration-200 ease-in-out rounded-full border-2 border-dashed border-orange-400/40  dark:border-[#58585889] flex items-center justify-center absolute bottom-0 right-0 z-10  ">
        <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-b from-p1 to-orange-400  flex items-center justify-center">
          <ChevronRight className="text-zinc-100  w-10 h-10" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCardHome;
