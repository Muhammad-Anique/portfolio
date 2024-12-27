import Image from "next/image";
import { getBlogData } from "../../lib/api";
import CodeBlock from "@/app/_components/CodeBlock";
import ListBlock from "../../_components/ListBlock";
import Heading from "../../_components/Heading";
import Paragraph from "../../_components/Paragraph";
import ImageBlock from "../../_components/ImageBlock";
import FooterNormal from "@/app/_sections/FooterNormal";
import BlogHeadings from "../../_components/BlogHeadings";
import { supabase } from "@/app/lib/supabase";
import OptimizedBackground from "@/app/_components/OptimizedBackground";
import { ClockIcon } from "lucide-react";

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
const BlockSelector = (props) => {
  const blockType = props?.blockType;
  const index = props?.index;
  const body = props?.body;
  if (blockType === "codeBlock" || blockType === "codeblock")
    return <CodeBlock language={body?.language} code={body?.code} />;
  else if (blockType === "list") {
    return (
      <div className="mt-8">
        <ListBlock
          type={body?.type}
          elements={body?.elements}
          noCols={body?.noCols}
        />
      </div>
    );
  } else if (blockType === "heading") {
    return <Heading content={body?.content} />;
  } else if (blockType === "paragraph") {
    return <Paragraph index={index} content={body?.content} />;
  } else if (blockType === "image") {
    return <ImageBlock src={body?.src} alt={body?.alt} />;
  }
};

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

const BlogPage = async ({ params }) => {
  const { blogId } = params;
  const blogData = await getBlogData(blogId);

  return (
    <div className="w-full h-full min-h-screen bg-transparent flex justify-center ">
      <OptimizedBackground src={"/l1.jpg"} opacity={10} />

      {blogData ? (
        <div className="max-w-[1520px] z-10 w-full  px-2   flex flex-row gap-10">
          <div className="w-full xl:max-w-[100%] pt-32 pb-0  backdrop-blur-md px-5 sm:px-10 md:px-16  flex flex-col gap-24">
            <div className="flex flex-col gap-5 items-center justify-center h-auto ">
              <div className="flex flex-col w-full items-center justify-center  h-full">
                <h1 className="text-5xl max-w-3xl md:text-6xl text-center xl:text-7xl text-zinc-900 dark:text-zinc-200 font-extrabold  font-lato">
                  {blogData?.blogTitle}
                </h1>
              </div>

              <div className="flex flex-col w-full lg:w-[55%] gap-7 h-full  items-center justify-center  ">
                <p className="max-w-sm text-center text-zinc-900 dark:text-zinc-200  text-sm xl:text-md h-full t">
                  {blogData?.blogExcerpt}
                </p>
                <div className="flex flex-row items-center  gap-3   ">
                  <p className="text-zinc-800 dark:text-zinc-200 font-lato text-md ">
                    {formatTimestamp(blogData?.created_at)}
                  </p>
                  <p className="text-zinc-800 dark:text-zinc-200 text-md">|</p>
                  <ClockIcon className="w-4 h-4 text-p1" />
                  <p className="text-zinc-800 dark:text-zinc-200 font-lato text-md">
                    6 minute read
                  </p>
                </div>

                <div className="h-[6px] w-[200px] bg-gradient-to-r  from-[#EC420F] dakr:via-[#c79573] via-[#EC420F] dark:to-[#39C8C1] to-[#d8681d]  "></div>
                <div className="flex flex-col h-full w-full  justify-between">
                  <div className="flex flex-row items-center justify-center">
                    <div className="w-[50px] h-[50px] rounded-full relative bg-zinc-300 dark:bg-[#616161] overflow-hidden">
                      <Image
                        src="/Muhammad-Anique.avif"
                        alt={` Avatar`}
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                  <h1 className="font-manrope  text-center text-zinc-900 dark:text-zinc-200  text-lg leading-3 mt-3">
                    <span className="big-winks-text "> Muh. Anique </span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-2">
              <div className="relative">
                <div className=" w-full h-full flex flex-col items-center justify-center -z-10">
                  <div className="w-full aspect-[16/9] dakr:bg-zinc-900 bg-zinc-300 relative  rounded-xl overflow-hidden">
                    {
                      <Image
                        src={blogData?.blogFeatureImage}
                        alt={blogData?.blogFeatureAlt}
                        fill
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    }
                  </div>
                </div>

                <div className="w-full h-full aspect-[16/9]  p-10 rounded-xl  absolute top-0 z-10">
                  <div className="absolute hidden md:flex flex-row flex-wrap gap-2">
                    {blogData?.blogBody?.tags.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className="px-3 py-2 dark:bg-zinc-950/95 shadow-md bg-zinc-100/95 rounded-lg backdrop-blur-md "
                        >
                          <h1 className="text-zinc-900 dark:text-zinc-200  text-md font-lato">
                            {tag}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex md:hidden flex-row flex-wrap gap-3">
                {blogData?.blogBody?.tags.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      className="px-2 py-1 dark:bg-gradient-to-b dark:from-zinc-950/70 p-10 from-zinc-200 to-zinc-300/60 dark:to-zinc-950/20 rounded-lg backdrop-blur-md "
                    >
                      <h1 className="text-zinc-900 dark:text-zinc-200  text-sm font-lato">
                        {tag}
                      </h1>
                    </div>
                  );
                })}
              </div>

              <div name="blog-cont" className="flex flex-row gap-10">
                {/* <div className="sticky flex flex-col gap-4 w-[15%] mt-16 top-16 self-start">
                  <div className="flex  flex-col gap-3">
                    <div className="flex flex-col h-full w-full  justify-between">
                      <div className="flex flex-row items-center justify-center">
                        <div className="w-[50px] h-[50px] rounded-full relative bg-zinc-300 dark:bg-[#616161] overflow-hidden">
                          <Image
                            src="/Muhammad-Anique.avif"
                            alt={` Avatar`}
                            width={500}
                            height={500}
                          />
                        </div>
                      </div>
                      <h1 className="font-manrope  text-center text-zinc-900 dark:text-zinc-200  text-lg leading-3 mt-3">
                        <span className="big-winks-text "> Muh. Anique </span>
                      </h1>
                    </div>
                  </div>
                  <p className="max-w-sm text-center text-zinc-900 dark:text-zinc-200  text-sm xl:text-md h-full t">
                    {blogData?.blogExcerpt}
                  </p>
                </div> */}
                <div
                  name="blog"
                  className=" w-full xl:w-[78%]  flex flex-col gap-2"
                >
                  {blogData?.blogBody?.blocks.map((block, index) => {
                    return (
                      <BlockSelector
                        blockType={block.blockType}
                        key={index}
                        index={index}
                        body={block.body}
                      />
                    );
                  })}
                </div>
                <div
                  name="table-of-content"
                  className="sticky hidden xl:flex mt-16 ml-2 w-[15%] top-16 self-start "
                >
                  <div className="flex flex-col ">
                    <p className="font-extrabold text-xl mb-1 text-zinc-800 dark:text-zinc-200">
                      Content
                    </p>
                    <div className="h-[4px] rounded-full w-[40%] bg-p1"></div>
                    {blogData && (
                      <div className=" xl:w-[190px] 2xl:w-[230px] hidden   z-30 xl:flex   py-2">
                        <BlogHeadings blogData={blogData} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <hr className="h-[5px] mt-16 w-[60%] self-center border-none skew-x-[60deg] bg-gradient-to-r from-p1 dark:via-p2  to-p2 dark:to-p3" />

            <FooterNormal />
          </div>
        </div>
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
