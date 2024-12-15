import Image from "next/image";

import { getProjectData } from "../../lib/api";
import OptimizedBackground from "@/app/_components/OptimizedBackground";

const ProjectPage = async ({ params }) => {
  const projectId = params.projectId;
  const projectData = await getProjectData(projectId);

  return (
    <div className="w-full h-full min-h-screen bg-transparent flex justify-center ">
      <OptimizedBackground src={"/l1.jpg"} opacity={10} />
      <div className="max-w-[1400px] w-full py-32  px-16 flex flex-col gap-24">
        <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center justify-between h-auto lg:min-h-[120px] xl:min-h-[150px]">
          <div className="flex flex-col w-full lg:w-[35%] h-full">
            <h1 className="text-6xl xl:text-7xl text-zinc-200 font-playfair">
              Helloworld
            </h1>
            <h1 className="text-6xl xl:text-7xl text-zinc-200 font-playfair lg:self-end mb-5 lg:mb-0">
              WebApp
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row w-full lg:w-[55%] gap-7 h-full lg:items-center items-end lg:justify-center   ">
            <p className="max-w-sm text-zinc-200 text-sm xl:text-md h-full text-right">
              Helloworld is an innovative platform that leverages advanced
              Artificial Intelligence to create websites effortlessly. With
              Helloworld, users can design and launch fully functional,
              aesthetically pleasing websites tailored to their specific needs
              in a matter of minutes {projectData?.body}
            </p>
            <div className="h-[4px] lg:h-full lg:min-h-[120px] w-[50%] lg:w-[4px] lg:skew-y-[60deg] bg-gradient-to-r lg:bg-gradient-to-b from-p1 via-p2 to-p3 "></div>
            <div className="flex flex-col h-full w-full lg:w-auto lg:justify-between justify-end text-right">
              <h1 className="w-auto font-playfair  text-zinc-200 text-xl xl:text-2xl">
                Lead Developer <br /> AI Specialist
              </h1>
              <p className="text-zinc-200 mt-7">2021 - 2024</p>
            </div>
          </div>
        </div>

        <div className="w-full h-[60vh] bg-zinc-900"></div>

        <div className="w-full h-auto flex flex-col">
          <h1 className="text-3xl md:text-4xl font-playfair text-zinc-200">
            Project Overview
          </h1>
          <p className="font-normal text-md md:text-lg mt-4 text-zinc-200 font-manrope text-justify">
            I have developed Helloworld, an AI-powered platform designed to
            create websites effortlessly. As a full-stack developer, I utilized
            React for the frontend, Node.js for the backend, and Supabase for
            the database and authentication layers. Helloworld allows users to
            design and deploy professional-grade websites in minutes, automating
            complex tasks like content generation, layout design, and
            responsiveness, making it accessible to users of all skill levels.
            My expertise in these technologies ensures a seamless, scalable, and
            efficient user experience.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 h-auto justify-items-center space-x-5  ">
          <div className="w-[350px] lg:w-[340px] 2xl:w-[400px]  h-auto relative shrink-0 mx-2 hover:scale-105 ease-in duration-200 cursor-pointer ">
            <Image
              src="/card1.svg"
              width={600}
              height={600}
              alt="card1"
              className=""
            />

            <div className="absolute p-10 top-0 z-10">
              <h1 className="font-manrope text-zinc-200 text-2xl font-bold ">
                {" "}
                Front-End Development
              </h1>
              <p className="text-zinc-300 text-lg mt-2">
                React Js | TailwindCSS | Node Js{" "}
              </p>
            </div>
          </div>

          <div className="w-[350px] lg:w-[340px] 2xl:w-[400px] h-auto relative shrink-0 mt-5 md:mt-0 mx-2 hover:scale-105 ease-in duration-200 cursor-pointer">
            <Image
              src="/card2.svg"
              width={600}
              height={600}
              alt="card1"
              className=""
            />
            <div className="absolute p-10 top-0 z-10">
              <h1 className="font-manrope text-zinc-200 text-2xl font-bold ">
                {" "}
                Back-End Development
              </h1>
              <p className="text-zinc-300 text-lg mt-2">
                Node Js | Express Js | Supabase{" "}
              </p>
            </div>
          </div>

          <div className="w-[350px] lg:w-[340px] 2xl:w-[400px] h-auto relative shrink-0 mx-2 hover:scale-105 ease-in duration-200 cursor-pointer">
            <Image
              src="/card3.svg"
              width={600}
              height={600}
              alt="card1"
              className=""
            />

            <div className="absolute p-10 top-0 z-10">
              <h1 className="font-manrope text-zinc-200 text-2xl font-bold ">
                {" "}
                DevOps
              </h1>
              <p className="text-zinc-300 text-lg mt-2">
                AWS | Railway | Vercel{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col">
          <h1 className=" text-4xl font-playfair text-zinc-200">
            Project Overview
          </h1>
          <p className="font-normal text-lg mt-4 text-zinc-200 font-manrope text-justify">
            I have developed Helloworld, an AI-powered platform designed to
            create websites effortlessly. As a full-stack developer, I utilized
            React for the frontend, Node.js for the backend, and Supabase for
            the database and authentication layers. Helloworld allows users to
            design and deploy professional-grade websites in minutes, automating
            complex tasks like content generation, layout design, and
            responsiveness, making it accessible to users of all skill levels.
            My expertise in these technologies ensures a seamless, scalable, and
            efficient user experience.
          </p>
        </div>

        <div className="w-full h-auto flex ">
          <div className="relative w-full h-auto max-w-[1680px] mx-auto flex items-center justify-center ">
            <Image
              src="/laptop-mockup.avif"
              width={1680}
              height={900}
              alt="laptop-mockup-transparent"
              className="w-full h-auto " // Make image fully responsive
            />
            <div className="absolute inset-0 flex justify-center items-center w-[67%] h-[80%] left-auto right-auto  top-[6%]">
              <div className="bg-zinc-900  rounded-t-[20px] overflow-hidden  shadow-lg flex items-center justify-center">
                <Image
                  src="/ss2.png" // Replace with your screenshot's path
                  alt="screenshot"
                  width={1000}
                  objectFit="cover" // Ensure it scales properly
                  className="rounded-t-[5px] md:ounded-t-[10px] xl:ounded-t-[20px] lg:rounded-t-[10px]" // Match rounded corners
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col">
          <h1 className=" text-4xl font-playfair text-zinc-200">
            Project Overview
          </h1>
          <p className="font-normal text-lg mt-4 text-zinc-200 font-manrope text-justify">
            I have developed Helloworld, an AI-powered platform designed to
            create websites effortlessly. As a full-stack developer, I utilized
            React for the frontend, Node.js for the backend, and Supabase for
            the database and authentication layers. Helloworld allows users to
            design and deploy professional-grade websites in minutes, automating
            complex tasks like content generation, layout design, and
            responsiveness, making it accessible to users of all skill levels.
            My expertise in these technologies ensures a seamless, scalable, and
            efficient user experience.
          </p>
        </div>

        <div className="w-full hidden h-[600px] lg:grid  grid-cols-3">
          <div className="relative w-full h-full max-w-[900px] mx-auto flex items-center justify-center scale-125 ">
            <Image
              src="/mobile-mockup.avif"
              width={1500}
              height={900}
              alt="mobile-mockup-transparent"
              className="w-full h-auto " // Make image fully responsive
            />
            <div className="absolute inset-0 flex justify-center items-center w-[40%] h-[60%] left-auto right-auto  top-[20%]">
              <div className="bg-zinc-900  rounded-[20px] overflow-hidden  shadow-lg flex items-center justify-center">
                <Image
                  src="/ss2.png" // Replace with your screenshot's path
                  alt="screenshot"
                  width={1000}
                  objectFit="cover" // Ensure it scales properly
                  className="rounded-[5px] md:rounded-[10px] xl:rounded-[10px] lg:rounded-[10px]" // Match rounded corners
                />
              </div>
            </div>
          </div>

          <div className="relative w-full h-auto max-w-[900px]  mx-auto flex items-center justify-center place-self-end scale-125 ">
            <Image
              src="/mobile-mockup.avif"
              width={1500}
              height={900}
              alt="mobile-mockup-transparent"
              className="w-full h-auto " // Make image fully responsive
            />
            <div className="absolute inset-0 flex justify-center items-center w-[40%] h-[84%] left-auto right-auto  top-[8%]">
              <div className="bg-zinc-900  rounded-[20px] overflow-hidden  shadow-lg flex items-center justify-center">
                <Image
                  src="/ss2.png" // Replace with your screenshot's path
                  alt="screenshot"
                  width={1000}
                  objectFit="cover" // Ensure it scales properly
                  className="rounded-[5px] md:rounded-[10px] xl:rounded-[10px] lg:rounded-[10px]" // Match rounded corners
                />
              </div>
            </div>
          </div>

          <div className="relative w-full h-auto max-w-[900px] mx-auto flex items-center justify-center scale-125  ">
            <Image
              src="/mobile-mockup.avif"
              width={1500}
              height={900}
              alt="mobile-mockup-transparent"
              className="w-full h-auto " // Make image fully responsive
            />
            <div className="absolute inset-0 flex justify-center items-center w-[40%] h-[60%] left-auto right-auto  top-[20%]">
              <div className="bg-zinc-900  rounded-[20px] overflow-hidden  shadow-lg flex items-center justify-center">
                <Image
                  src="/ss2.png" // Replace with your screenshot's path
                  alt="screenshot"
                  width={1000}
                  objectFit="cover" // Ensure it scales properly
                  className="rounded-[5px] md:rounded-[10px] xl:rounded-[10px] lg:rounded-[10px]" // Match rounded corners
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col">
          <h1 className=" text-4xl font-playfair text-zinc-200">
            Project Overview
          </h1>
          <p className="font-normal text-lg mt-4 text-zinc-200 font-manrope text-justify">
            I have developed Helloworld, an AI-powered platform designed to
            create websites effortlessly. As a full-stack developer, I utilized
            React for the frontend, Node.js for the backend, and Supabase for
            the database and authentication layers. Helloworld allows users to
            design and deploy professional-grade websites in minutes, automating
            complex tasks like content generation, layout design, and
            responsiveness, making it accessible to users of all skill levels.
            My expertise in these technologies ensures a seamless, scalable, and
            efficient user experience.
          </p>
        </div>

        <hr className="h-[5px] w-[60%] self-center border-none skew-x-[60deg] bg-gradient-to-r from-p1 via-p2 to-p3" />

        <div className="w-full flex flex-row h-[100px] gap-6 flex-wrap items-center justify-center ">
          <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#0d0d0d43] to-[#383838bf]">
            <div className="w-[30px] h-[30px] hover:scale-110 duration-200 ease-in-out cursor-pointer relative">
              <Image
                src="/figma-logo.png"
                alt="Figma-Logo-PNG-Transparent"
                width={200}
                height={200}
              />
            </div>
          </div>

          <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#0d0d0d43] to-[#383838bf]">
            <div className="w-[40px] h-[40px] hover:scale-110 duration-200 ease-in-out cursor-pointer relative">
              <Image
                src="/github-logo.png"
                alt="Figma-Logo-PNG-Transparent"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Generate static paths for dynamic routing with hardcoded blog IDs
export async function generateStaticParams() {
  // Hardcoded list of blog IDs
  const projectIds = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" }, // Add as many blog IDs as needed
  ];

  // Return an array of possible dynamic blog paths
  return projectIds.map((project) => ({
    projectId: project.id, // Each dynamic route param
  }));
}

export default ProjectPage;
