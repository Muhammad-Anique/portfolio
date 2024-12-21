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
  console.log("BlocTupe = ", blockType);
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
    return <Paragraph content={body?.content} />;
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
        <div className="max-w-[1400px] z-10 w-full  px-2   flex flex-row gap-10">
          <div className="w-full xl:max-w-[85%] pt-32 pb-0  2xl:max-w-[90%] backdrop-blur-md px-5 sm:px-10 md:px-16  flex flex-col gap-24">
            <div className="flex flex-col gap-5  h-auto ">
              <div className="flex flex-col w-full  h-full">
                <h1 className="text-5xl md:text-6xl xl:text-7xl text-zinc-900 dark:text-zinc-200  font-playfair">
                  {blogData?.blogTitle}
                </h1>
              </div>

              <div className="flex flex-col self-end lg:flex-row w-full lg:w-[55%] gap-7 h-full lg:items-center items-end justify-end mt-10 ">
                <p className="max-w-sm text-zinc-900 dark:text-zinc-200  text-sm xl:text-md h-full text-right">
                  {blogData?.blogExcerpt}
                </p>
                <div className="h-[4px] lg:h-full lg:min-h-[120px] w-[50%] lg:w-[4px] lg:skew-y-[60deg] bg-gradient-to-r lg:bg-gradient-to-b from-[#EC420F] dakr:via-[#c79573] via-[#EC420F] dark:to-[#39C8C1] to-[#d8681d]  "></div>
                <div className="flex flex-col h-full w-full lg:w-auto text-right justify-between">
                  <div className="flex flex-row self-end items-center justify-center">
                    <div className="w-[50px] h-[50px] rounded-full relative bg-zinc-300 dark:bg-[#616161] overflow-hidden">
                      <Image
                        src="/Muhammad-Anique.avif"
                        alt={` Avatar`}
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                  <h1 className="w-auto font-manrope  text-zinc-900 dark:text-zinc-200  text-lg leading-3 mt-3">
                    <span className="big-winks-text "> Muh. Anique </span>
                  </h1>
                  <p className="self-end text-zinc-500 text-sm">
                    {formatTimestamp(blogData?.created_at)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-2">
              <div className="relative">
                <div className=" w-full h-full -z-10">
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

                <div className="w-full h-full aspect-[16/9] dark:bg-gradient-to-b dark:from-zinc-950/70 p-10 rounded-xl dark:to-zinc-950/20 absolute top-0 z-10">
                  <div className="absolute hidden md:flex flex-row flex-wrap gap-2">
                    {blogData?.blogBody?.tags.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className="px-3 py-2 dark:bg-zinc-950/50 bg-zinc-100/80 rounded-lg backdrop-blur-md "
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
                      className="px-2 py-1 dark:bg-gradient-to-b dark:from-zinc-950/70 p-10 bg-zinc-200 dark:to-zinc-950/20 rounded-lg backdrop-blur-md "
                    >
                      <h1 className="text-zinc-900 dark:text-zinc-200  text-sm font-lato">
                        {tag}
                      </h1>
                    </div>
                  );
                })}
              </div>

              {blogData?.blogBody?.blocks.map((block, index) => {
                return (
                  <BlockSelector
                    blockType={block.blockType}
                    key={index}
                    body={block.body}
                  />
                );
              })}
            </div>

            <hr className="h-[5px] w-[60%] self-center border-none skew-x-[60deg] bg-gradient-to-r from-p1 dark:via-p2  to-p2 dark:to-p3" />
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

      {blogData && (
        <div className=" xl:w-[190px] 2xl:w-[230px] hidden absolute xl:right-[3%] 2xl:right-[4%] top-[16%] z-30 xl:flex h-full  py-2">
          <BlogHeadings blogData={blogData} />
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
