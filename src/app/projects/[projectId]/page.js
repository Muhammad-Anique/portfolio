import OptimizedBackground from "@/app/_components/OptimizedBackground";
import { supabase } from "@/app/lib/supabase";
import CodeBlock from "@/app/_components/CodeBlock";
import ListBlock from "../../_components/ListBlock";
import ProjectPageHeader from "../../_components/ProjectPageHeader";
import Heading from "../../_components/Heading";
import Paragraph from "../../_components/Paragraph";
import ImageBlock from "../../_components/ImageBlock";
import FooterNormal from "@/app/_sections/FooterNormal";
import ProjectHeadings from "../../_components/ProjectHeadings";
import LaptopSS from "../../_components/LaptopSS";
import MobileSSArray from "../../_components/MobileSSArray";
// import StackCards from "../../_components/StackCards";

import { getProjectData } from "../../lib/api";
import Image from "next/image";
export async function generateMetadata({ params }) {
  const { projectId } = params;
  const projectData = await getProjectData(projectId);
  return {
    title: projectData?.projectTitle,
    description: projectData?.projectExcerpt,
    openGraph: {
      images: [
        {
          url: projectData?.projectFeatureImage,
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
      <div className="mt-5 md:mt-8">
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
  } else if (blockType === "laptop-ss") {
    return <LaptopSS src={body?.src} alt={body?.alt} />;
  }
  // else if (blockType === "stack-cards") {
  //   return <StackCards body={body} />;
  else if (blockType === "mobile-ss") {
    return <MobileSSArray body={body} />;
  }
};

const ProjectPage = async ({ params }) => {
  const projectId = params.projectId;
  console.log("ProjId : ", projectId);
  const projectData = await getProjectData(projectId);
  console.log("project Data", projectData);

  return (
    <div className="w-full h-full min-h-screen bg-transparent flex justify-center ">
      <OptimizedBackground src={"/l1.jpg"} opacity={10} />

      {projectData ? (
        <div className="max-w-[1400px] w-full 2xl:py-32   flex flex-col gap-2 ">
          <div className="w-full xl:max-w-[85%] pt-32 pb-0  2xl:max-w-[90%] backdrop-blur-md px-5 sm:px-10 md:px-16  flex flex-col gap-24">
            <ProjectPageHeader project={projectData} />
            <div className="flex flex-col w-full gap-2">
              <div className="relative">
                <div className=" w-full h-full -z-10">
                  <div className="w-full aspect-[16/9] dark:bg-zinc-900 bg-zinc-300 relative  rounded-xl overflow-hidden">
                    {
                      <Image
                        src={projectData?.projectFeatureImage}
                        alt={projectData?.projectFeatureAlt}
                        fill
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    }
                  </div>
                </div>

                <div className="w-full h-full aspect-[16/9]  p-10 rounded-xl  absolute top-0 z-10">
                  <div className="absolute hidden md:flex flex-row flex-wrap gap-2">
                    {projectData?.projectBody?.tags.map((tag, index) => {
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
                {projectData?.projectBody?.tags.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      className="px-2 py-1 bg-gradient-to-r dark:from-zinc-800/30 dark:to-zinc-950/40 from:bg-zinc-200/90 to-zinc-200/80 rounded-lg backdrop-blur-md "
                    >
                      <h1 className="text-zinc-900 dark:text-zinc-200  text-sm font-lato">
                        {tag}
                      </h1>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-5">
                {projectData?.projectBody?.blocks.map((block, index) => {
                  return (
                    <BlockSelector
                      blockType={block.blockType}
                      key={index}
                      body={block.body}
                    />
                  );
                })}
              </div>
            </div>

            <hr className="h-[5px] w-[60%] self-center border-none skew-x-[60deg] bg-gradient-to-r from-p1 via-p2 to-p3" />
            <FooterNormal />
          </div>

          <div className="xl:flex flex-col hidden  fixed z-30 xl:w-[190px] 2xl:w-[230px]   xl:right-[3%] 2xl:right-[5%] top-[16%] ">
            <p className="font-extrabold">Content</p>
            <div className="h-[5px] rounded-full w-[40%] bg-p1 mt-2"></div>
            {projectData && (
              <div className="flex flex-col py-2">
                <ProjectHeadings projectData={projectData} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export async function generateStaticParams() {
  try {
    const { data, error } = await supabase.from("projects").select("slug");
    if (error) {
      console.error("Error fetching slugs:", error.message);
      return [];
    }
    return (
      data?.map(({ slug }) => ({
        projectId: slug,
      })) || []
    );
  } catch (err) {
    console.error("Unexpected error:", err.message);
    return [];
  }
}

export default ProjectPage;
