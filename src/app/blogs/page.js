import Link from "next/link";
import { fetchAllBlogs } from "../lib/api";
import BlogCard from "../_components/BlogCard";
import OptimizedBackground from "../_components/OptimizedBackground";

export const metadata = {
  title: "Blogs",
  description:
    "Hi, I'm Muhammad, a passionate Full Stack Developer with expertise in Node.js, Express, Next.js, Supabase, AWS, and more. I specialize in building scalable and high-performance web applications. Check out my portfolio to learn more about my projects and skills. Contact me at anique.cs@gmail.com for collaboration opportunities.",
};
const BlogsList = async () => {
  const blogs = await fetchAllBlogs(); // Fetch data server-side

  console.log("BlogIds : ", blogs);

  return (
    <div className="w-full h-auto py-7 md:py-16 flex-col gap-10 relative flex items-center justify-center">
      <OptimizedBackground src={"/l1.jpg"} opacity={10} />

      <div className="w-full  h-auto py-32 min-h-[1050px] px-7 flex items-center justify-center">
        <div
          name="container"
          className="h-auto max-w-[1250] w-full  flex flex-col items-center justify-center gap-7 "
        >
          <h1 className="big-winks-text text-3xl md:text-5xl -translate-y-5 md:-translate-y-12 -rotate-6 text-zinc-300">
            Explore Blogs
          </h1>
          <div className="flex flex-row flex-wrap items-center justify-center  gap-10 xl:gap-12 2xl:gap-20 w-full h-auto">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.blogBody.slug}`}
                className=""
              >
                <BlogCard blog={blog} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsList;
