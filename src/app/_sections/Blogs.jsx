import React from "react";
import BlogCardHome from "../_components/BlogCardHome";
const Blogs = () => {
  return (
    <div className="w-full  h-auto pb-16 min-h-[1050px] px-7 flex items-center justify-center">
      <div
        name="container"
        className="h-auto max-w-[1250] w-full  flex flex-col items-center justify-center gap-7 "
      >
        <h1 className="big-winks-text text-3xl md:text-5xl -translate-y-5 md:-translate-y-12 -rotate-6 text-zinc-300">
          Explore Blogs
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center gap-20 w-full h-auto">
          <BlogCardHome />
          <BlogCardHome />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
