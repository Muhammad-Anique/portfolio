import React from "react";
import BlogCardHome from "../_components/BlogCardHome";
import { supabase } from "../lib/supabase";

const Blogs = async () => {
  const { data: blogs } = await supabase.from("blogs").select("*");
  const displayedBlogs = blogs.slice(0, 2);

  return (
    <div className="w-full  h-auto py-32 min-h-[1050px] px-3 sm:px-6 flex items-center justify-center">
      <div
        name="container"
        className="h-auto max-w-[1250] w-full  flex flex-col items-center justify-center  "
      >
        <h1 className="big-winks-text self-start text-3xl md:text-5xl -translate-y-5 md:-translate-y-12 -rotate-6 text-zinc-800 dark:text-zinc-300">
          Explore Blogs
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center gap-7 sm:gap-8  w-full h-auto">
          {displayedBlogs.map((blog, index) => {
            return <BlogCardHome key={index} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
