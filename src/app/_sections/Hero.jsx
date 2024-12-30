"use client";
import { useEffect, useRef, useState } from "react";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import GithubLink from "../_components/GithubLink";
import InstagramLink from "../_components/InstagramLink";
import LinkedInLink from "../_components/LinkedInLink";

const Hero = () => {
  const [imageHeight, setImageHeight] = useState(0);
  const imageRef = useRef(null);
  const rightContainerRef = useRef(null);

  // Function to adjust the height of the right container
  useEffect(() => {
    const adjustHeight = () => {
      if (imageRef.current && rightContainerRef.current) {
        setImageHeight(imageRef.current.offsetHeight);
      }
    };

    // Adjust height on mount and when window resizes
    adjustHeight();
    window.addEventListener("resize", adjustHeight);

    return () => {
      window.removeEventListener("resize", adjustHeight);
    };
  }, []);

  return (
    <div className="px-4 py-20 md:py-32 relative sm:px-10 md:px-16 min-h-screen lg:px-10 h-auto xl:px-32 w-full flex flex-row items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center  w-full  h-auto max-w-[1050px]">
        {/* Left Section */}
        <div
          ref={imageRef}
          className=" flex-1 flex flex-col h-auto max-h-[660px]"
        >
          <div className="flex justify-center lg:justify-end flex-row w-full overflow-hidden">
            <div className="w-fit hidden md:flex h-full  ">
              <h1
                className="font-extrabold text-left  font-lato mr-2 dark:text-zinc-200 tracking-tighter text-5xl 2xl:text-6xl text-zinc-900"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                FULL <span className="font-light">STACK</span>
                <i className="font-extrabold font-lato text-p1 tracking-tighter">
                  DEVELOPER
                </i>
              </h1>
            </div>
            <div className="relative t-saturate-no w-full">
              <Image
                src="/anique-cover.png"
                alt="profile-image"
                className="z-10 t-saturate-no"
                width={510}
                layout="responsive"
                height={510}
                priority={true}
                quality={75}
                style={{ width: "auto", height: "fit" }}
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          ref={rightContainerRef} // Reference for right container
          className=" flex-1 flex flex-col items-start justify-between"
          style={{ height: imageHeight }} // Dynamic height
        >
          <div className="flex flex-col h-full  p-5">
            <p className="text-zinc-900 mt-6 md:mt-0 big-winks-text text-5xl md:text-6xl dark:text-zinc-200 2xl:text-7xl -rotate-2">
              Muhammad
            </p>
            <h1 className="font-lato -translate-y-2 md:-translate-y-3  dark:text-zinc-200 leading-12 font-extrabold tracking-tighter text-6xl md:text-7xl 2xl:text-8xl text-zinc-950">
              An<span className="text-p1">i</span>que
            </h1>

            <i className=" font-lato  tracking-tighter mt-1  text-justify text-lg ">
              {"I'"}m a passionate and skilled Full Stack Web Developer with
              expertise in modern web technologies, including <b>Next.js</b> ,
              <b>React.js</b>, <b>Node.js</b> , and <b>Express.js</b>. I
              specialize in creating innovative{" "}
              <b>AI-powered SaaS applications</b> and tools that connects
              technology and business needs.
            </i>
            <div className="w-full flex md:pr-5 justify-between items-center gap-10 text-zinc-900 dark:text-zinc-200 flex-row mt-5 md:mt-5">
              <p className="text-zinc-900 whitespace-nowrap font-bold dark:text-zinc-200  h-full font-manrope  text-sm md:text-md  w-fit ">
                CHECK MY RESUME
              </p>
              <div className="w-full  h-[1px] bg-zinc-800 dark:bg-zinc-200 border-none "></div>
              <button
                className="flex items-center justify-center hover:scale-105 duration-150 ease-out transition-transform"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href =
                    "https://exggfeypqucbibabxodx.supabase.co/storage/v1/object/public/Anique-Portfolio-Image/BlogFeatureImages/Muhammad-Anique-Resume.pdf";
                  link.download = "Muhammad-Anique-Resume.pdf"; // Suggests the filename
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <DownloadIcon className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
              </button>
            </div>
          </div>
          <div className="text-zinc-900 mt-20 md:mt-10 dark:text-zinc-200 flex flex-row gap-10 items-center justify-center w-full">
            {" "}
            <div className="w-[5%] hidden md:block md:w-[10%] h-[1px] bg-zinc-800 dark:bg-zinc-200 lg:w-[20%]" />
            <GithubLink />
            <InstagramLink />
            <LinkedInLink />{" "}
            <div className="w-[5%] hidden md:block md:w-[10%] h-[1px] bg-zinc-800 dark:bg-zinc-200 lg:w-[20%]" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="flex flex-col h-full bg-green-500">
            <p className="text-zinc-900 mt-6 md:mt-0 big-winks-text text-5xl md:text-6xl dark:text-zinc-200 2xl:text-7xl -rotate-2">
              Muhammad
            </p>
            <h1 className="font-lato -translate-y-2 md:-translate-y-3  dark:text-zinc-200 leading-12 font-extrabold tracking-tighter text-6xl md:text-7xl 2xl:text-8xl text-zinc-950">
              An<span className="text-p1">i</span>que
            </h1>

            <i className=" font-lato  tracking-tighter mt-1  text-justify text-lg ">
              {"I'"}m a passionate and skilled Full Stack Web Developer with
              expertise in modern web technologies, including <b>Next.js</b> ,
              <b>React.js</b>, <b>Node.js</b> , and <b>Express.js</b>. I
              specialize in creating innovative{" "}
              <b>AI-powered SaaS applications</b> and tools that connects
              technology and business needs.
            </i>
            <div className="w-full flex md:pr-5 justify-between items-center gap-10 text-zinc-900 dark:text-zinc-200 flex-row mt-5 md:mt-5">
              <p className="text-zinc-900 font-bold dark:text-zinc-200  h-full font-manrope  text-sm md:text-md   ">
                CHECK MY RESUME
              </p>
              <div className="w-[50px] md:min-w-[50px]  md:max-w-[100px]  h-[1px] bg-zinc-800 dark:bg-zinc-200 border-none "></div>
              <button
                className="flex items-center justify-center hover:scale-105 duration-150 ease-out transition-transform"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href =
                    "https://exggfeypqucbibabxodx.supabase.co/storage/v1/object/public/Anique-Portfolio-Image/BlogFeatureImages/Muhammad-Anique-Resume.pdf";
                  link.download = "Muhammad-Anique-Resume.pdf"; // Suggests the filename
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <DownloadIcon className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
              </button>
            </div>
          </div> */
}
//  <div className="flex w-full h-full flex-col gap-3 lg:flex-row items-center lg:min-h-[700px]  2xl:min-h-[800px] justify-center">
//    <div className=" flex  justify-center lg:justify-end flex-row w-full h-full lg:max-h-[700px] 2xl:max-h-[800px] lg:w-[50%] xl:w-[50%] 2xl:w-[40%] overflow-hidden  ">
//      <div className=" w-fit hidden md:flex h-full  items-center  justify-center">
//        <h1
//          className="font-extrabold font-lato mr-2 dark:text-zinc-200 tracking-tighter text-5xl 2xl:text-6xl text-zinc-900"
//          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
//        >
//          FULL <span className="font-light">STACK</span>
//          <i className="font-extrabold font-lato text-p1 tracking-tighter">
//            DEVELOPER
//          </i>
//        </h1>
//      </div>
//      <div className="relative t-saturate-no ">
//        <Image
//          src="/anique-cover.png"
//          alt="profile-image"
//          className="z-10  t-saturate-no"
//          width={510}
//          height={510}
//          priority={true} // to control the loading behavior (optional)
//          quality={75}
//          style={{ width: "auto", height: "full" }}
//        />
//      </div>
//    </div>
//    <div className="w-full    md:py-10 lg:w-[45%] xl:w-[40%] lg:max-h-[700px]  2xl:max-h-[800px] 2xl:w-[40%] pl-5 flex h-full   ">
//      <div className="flex  z-30 flex-col   h-full pr-10">
//        <div className="flex flex-col">
//          <p className="text-zinc-900 mt-6 md:mt-0 big-winks-text text-5xl md:text-6xl dark:text-zinc-200 2xl:text-7xl -rotate-2">
//            Muhammad
//          </p>
//          <h1 className="font-lato -translate-y-2 md:-translate-y-3  dark:text-zinc-200 leading-12 font-extrabold tracking-tighter text-6xl md:text-7xl 2xl:text-8xl text-zinc-950">
//            An<span className="text-p1">i</span>que
//          </h1>

//          <i className=" font-lato  tracking-tighter mt-1  text-justify text-lg ">
//            {"I'"}m a passionate and skilled Full Stack Web Developer with
//            expertise in modern web technologies, including <b>Next.js</b> ,
//            <b>React.js</b>, <b>Node.js</b> , and <b>Express.js</b>. I specialize
//            in creating innovative <b>AI-powered SaaS applications</b> and tools
//            that connects technology and business needs.
//          </i>
//          <div className="w-full flex md:pr-5 justify-between items-center gap-10 text-zinc-900 dark:text-zinc-200 flex-row mt-5 md:mt-5">
//            <p className="text-zinc-900 font-bold dark:text-zinc-200  h-full font-manrope  text-sm md:text-md   ">
//              CHECK MY RESUME
//            </p>
//            <div className="w-[50px] md:min-w-[50px]  md:max-w-[100px]  h-[1px] bg-zinc-800 dark:bg-zinc-200 border-none "></div>
//            <button
//              className="flex items-center justify-center hover:scale-105 duration-150 ease-out transition-transform"
//              onClick={() => {
//                const link = document.createElement("a");
//                link.href =
//                  "https://exggfeypqucbibabxodx.supabase.co/storage/v1/object/public/Anique-Portfolio-Image/BlogFeatureImages/Muhammad-Anique-Resume.pdf";
//                link.download = "Muhammad-Anique-Resume.pdf"; // Suggests the filename
//                document.body.appendChild(link);
//                link.click();
//                document.body.removeChild(link);
//              }}
//            >
//              <DownloadIcon className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
//            </button>
//          </div>
//        </div>
//        {/* <div className="text-zinc-900 mt-20 md:mt-10 dark:text-zinc-200 flex flex-row gap-10 items-center justify-center w-full">
//               {" "}
//               <div className="w-[5%] hidden md:block md:w-[10%] h-[1px] bg-zinc-800 dark:bg-zinc-200 lg:w-[20%]" />
//               <GithubLink />
//               <InstagramLink />
//               <LinkedInLink />{" "}
//               <div className="w-[5%] hidden md:block md:w-[10%] h-[1px] bg-zinc-800 dark:bg-zinc-200 lg:w-[20%]" />{" "}
//             </div> */}
//      </div>
//    </div>
//  </div>;

// <div className="py-32 px-4  relative max-h-[1050px] sm:px-10 md:px-16 lg:px-32 w-full  h-[100vh] flex flex-row justify-center ">
//   <div className="flex scale-90 lg:scale-110 h-full flex-col md:flex-col md:gap-0 items-center justify-center">
//     <h1 className="font-lato text-5xfont-extrabold tracking-tighter text-zinc-900">
//       ANIQUE
//     </h1>
//     <div className="absolute w-auto h-auto z-30">
//       <div className="z-10 relative flex items-start justify-center overflow-hidden dark:rounded-full  bg-gradient-to-b  dark:from-[#090909] dark:to-[#36363648] ">
//         <div className="absolute z-10 bg-red-500  -rotate-6">
//           <div className="relative w-[460px] h-[460px]">
//             <Image
//               src="/anique4.jpeg"
//               alt="profile-image"
//               className="z-10  t-saturate-no"
//               width={510}
//               height={510}
//               priority={true} // to control the loading behavior (optional)
//               quality={75}
//               style={{ width: "auto", height: "auto" }}
//             />
//           </div>
//         </div>

//         <div className="absolute z-20  h-[460px] w-full">
//           <div className="relative  w-[460px] h-[460px]">
//             <Image
//               src="/orange-bg.png"
//               alt="profile-image"
//               className="z-20  "
//               fill
//               objectFit="cover"
//             />
//           </div>
//         </div>
//         <div className="backdrop-blur-sm z-30 absolute w-full h-full"></div>
//       </div>
//     </div>

//     {/* <div className="flex  items-center justify-center">
//           <div className="relative  flex items-center justify-center w-[250px] h-[250px] md:w-[350px] md:h-[350px]">
//             <div className="z-10 flex items-start justify-center w-[210px] h-[210px]  md:w-[300px] md:h-[300px] overflow-hidden rounded-lg dark:rounded-full  bg-gradient-to-b  dark:from-[#090909] dark:to-[#36363648] ">
//               <Image
//                 src="/logo-anique.png"
//                 alt="profile-image"
//                 className="z-10 "
//                 width={210}
//                 height={210}
//                 priority={true} // to control the loading behavior (optional)
//                 quality={75}
//                 style={{ width: "auto", height: "auto" }}
//               />
//             </div>
//           </div>
//         </div> */}

//     {/* <div className="mt-5 w-full relative">
//           <p
//             className={`dark:shadow-basic text-5xl md:text-7xl  font-hand text-p1 absolute top-0 -translate-y-10 -translate-x-6 left-5 -rotate-12`}
//           >
//             I am
//           </p>

//           <div className="flex flex-col w-full ">
//             <p className="text-zinc-800 dark:text-zinc-200  font-manrope text-5xl md:text-8xl font-extrabold">
//               ANIQUE
//             </p>
//             <div className="flex flex-row items-center justify-between w-full gap-3">
//               <p className="text-zinc-800 dark:text-zinc-200  font-manrope text-3xl md:text-4xl font-thin">
//                 Full Stack Developer
//               </p>
//               <p className="text-3xl md:text-4xl">😎</p>
//             </div>

//             <div className="w-full flex  justify-between items-center gap-10 text-zinc-900 dark:text-zinc-200 flex-row mt-3 md:mt-5">
//               <p className="text-zinc-900 dark:text-zinc-200  h-full font-manrope  text-sm md:text-md  tracking-wider ">
//                 CHECK MY RESUME
//               </p>
//               <div className="w-[50px] md:min-w-[50px]  md:max-w-[100px] md:w-full h-[1px] bg-zinc-800 dark:bg-zinc-200 border-none "></div>
//               <button
//                 className="flex items-center justify-center hover:scale-105 duration-150 ease-out transition-transform"
//                 onClick={() => {
//                   const link = document.createElement("a");
//                   link.href =
//                     "https://exggfeypqucbibabxodx.supabase.co/storage/v1/object/public/Anique-Portfolio-Image/BlogFeatureImages/Muhammad-Anique-Resume.pdf";
//                   link.download = "Muhammad-Anique-Resume.pdf"; // Suggests the filename
//                   document.body.appendChild(link);
//                   link.click();
//                   document.body.removeChild(link);
//                 }}
//               >
//                 <DownloadIcon className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div> */}

//     {/* <div className="absolute bottom-5 w-full h-[50px] flex items-center justify-center gap-10 ">
//         <div className="text-zinc-900 dark:text-zinc-200  flex flex-row gap-10 items-center justify-center w-full">
//           <div className="w-[5%] hidden md:block md:w-[10%] h-[1px] bg-zinc-800 dark:bg-zinc-200 lg:w-[20%]" />
//           <GithubLink />
//           <InstagramLink />
//           <LinkedInLink />

//           <div className="w-[5%] hidden md:block md:w-[10%] h-[1px] bg-zinc-800 dark:bg-zinc-200 lg:w-[20%]" />
//         </div>*/}
//   </div>
// </div>;

//  <button
//                 className="flex items-center justify-center hover:scale-105 duration-150 ease-out transition-transform"
//                 onClick={() => {
//                   const link = document.createElement("a");
//                   link.href =
//                     "https://exggfeypqucbibabxodx.supabase.co/storage/v1/object/public/Anique-Portfolio-Image/BlogFeatureImages/Muhammad-Anique-Resume.pdf";
//                   link.download = "Muhammad-Anique-Resume.pdf"; // Suggests the filename
//                   document.body.appendChild(link);
//                   link.click();
//                   document.body.removeChild(link);
//                 }}
//               >
//                 <DownloadIcon className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
//               </button>
