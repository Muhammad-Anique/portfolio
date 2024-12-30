// import Image from "next/image";
import { getBlogData } from "../../lib/api";
// import CodeBlock from "@/app/_components/CodeBlock";
// import ListBlock from "../../_components/ListBlock";
// import Heading from "../../_components/Heading";
// import Paragraph from "../../_components/Paragraph";
// import ImageBlock from "../../_components/ImageBlock";
// import FooterNormal from "@/app/_sections/FooterNormal";
import BlogContent from "../../_components/BlogContent";
import { supabase } from "@/app/lib/supabase";
import OptimizedBackground from "@/app/_components/OptimizedBackground";
// import { ClockIcon } from "lucide-react";

export async function generateMetadata({ params }) {
  const { blogId } = params;
  const blogData = await getBlogData(blogId);
  return {
    title: blogData?.blogTitle,
    description: blogData?.blogExcerpt,
    openGraph: {
      images: [
        {
          url: blogData?.blogFeatureImage,
        },
      ],
    },
  };
}

const BlogPage = async ({ params }) => {
  const { blogId } = params;
  const blogData = await getBlogData(blogId);

  return (
    <div className="w-full h-full min-h-screen bg-transparent flex justify-center ">
      <OptimizedBackground src={"/l1.jpg"} opacity={10} />

      {blogData ? (
        <BlogContent blogData={blogData} />
      ) : (
        <div className="flex items-center justify-center h-screen w-screen overflow-hidden flex-col">
          <p className="text-7xl text-zinc-300 font-thin font-lato ">{": ("}</p>
          <h1 className="text-zinc-900 dark:text-zinc-200  font-lato mt-3">
            The Requested Page is Not Found
          </h1>
        </div>
      )}
    </div>
  );
};

export async function generateStaticParams() {
  try {
    const { data, error } = await supabase.from("blogs").select("slug");
    if (error) {
      console.error("Error fetching slugs:", error.message);
      return [];
    }
    return (
      data?.map(({ slug }) => ({
        blogId: slug,
      })) || []
    );
  } catch (err) {
    console.error("Unexpected error:", err.message);
    return [];
  }
}
export default BlogPage;
