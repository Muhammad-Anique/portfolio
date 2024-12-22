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
        <div className="grid grid-cols-1 lg:grid-cols-2  justify-items-center gap-8 xl:gap-9 2xl:gap-8 w-full h-auto">
          {blogs?.map((blog, index) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog?.slug}`}
              className={
                index % 2 === 0
                  ? "lg:justify-self-end"
                  : "lg:justify-self-start"
              }
            >
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
