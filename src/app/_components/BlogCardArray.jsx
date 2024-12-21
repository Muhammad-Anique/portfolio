import React from "react";
import BlogCard from "./BlogCard";
import { fetchAllBlogs } from "../lib/api";
import Link from "next/link";
const BlogCardArray = async () => {
  const blogs = await fetchAllBlogs(); // Fetch data server-side
  console.log("THE BLOGSS FETCHED = > ", blogs);
  return (
    <>
      {blogs ? (
        <div className="flex flex-row flex-wrap items-center justify-center  gap-10 xl:gap-12 2xl:gap-10 w-full h-auto">
          {blogs?.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog?.slug}`} className="">
              <BlogCard blog={blog} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-zinc-900 dark:text-zinc-200  text-3xl">
            {" "}
            Loading ....
          </p>
        </div>
      )}
    </>
  );
};

export default BlogCardArray;
