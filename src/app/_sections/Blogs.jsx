import React from "react";
import BlogCardHome from "../_components/BlogCardHome";
import { supabase } from "../lib/supabase";

const Blogs = async () => {
  const { data: blogs } = await supabase
    .from("blogs")
    .select("*")
    .order("priority", { ascending: true });
  const displayedBlogs = blogs;

  return (
    <div className="w-full  h-auto py-32  px-3 sm:px-6 flex items-center justify-center">
      <div
        name="container"
        className="h-auto max-w-[1250] w-full  flex flex-col items-center justify-center  "
      >
        <h1 className="big-winks-text self-start text-3xl md:text-5xl -translate-y-5 md:-translate-y-12 -rotate-6 text-zinc-800 dark:text-zinc-300">
          Explore Blogs
        </h1>
        <div className="grid grid-cols-8  items-start row-auto  w-full h-auto gap-3     ">
          <div className="md:col-end-4 md:col-start-1  col-span-full h-fit">
            <BlogCardHome blog={displayedBlogs[0]} height={"fit"} />
          </div>
          <div className="md:col-start-4 md:col-end-9 col-span-full   h-fit">
            <BlogCardHome blog={displayedBlogs[1]} height={"fit"} />
          </div>

          <div className="col-span-full  h-fit">
            <BlogCardHome blog={displayedBlogs[2]} height={"full"} />
          </div>

          {/* <div className="sm:col-end-6 sm:col-start-1   col-span-full h-fit">
            <BlogCardHome blog={displayedBlogs[1]} height={"fit"} />
          </div>
          <div className="sm:col-start-6 sm:col-end-9 col-span-full  h-fit">
            <BlogCardHome blog={displayedBlogs[0]} height={"fit"} />
          </div> */}

          {/* 
          <BlogCardHome blog={displayedBlogs[1]} className="col-span-4" />
          <BlogCardHome blog={displayedBlogs[0]} />
          <BlogCardHome blog={displayedBlogs[1]} />
          <BlogCardHome blog={displayedBlogs[0]} /> */}
          {/* {displayedBlogs.map((blog, index) => {
            return <BlogCardHome key={index} blog={blog} />;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
