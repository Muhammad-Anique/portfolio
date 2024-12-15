import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div id="about-me" className="w-full max-h-[1050px] h-auto py-16 md:py-64  bg-transparent flex items-center justify-center">
      <div className="max-w-[1500px]  w-auto h-full flex xl:flex-row flex-col items-center justify-center gap-16 ">
        <div className="grid grid-cols-4 gap-4 bg-transparent w-[280px] sm:w-[400px] xl:w-[400px] h-[300px] xl:h-[500px] ">
          <div className="bg-zinc-800 relative t-saturate-0">
            <Image
              src="/gif2.gif"
              alt="Front-end development"
              sizes="100px"
              className="saturate-0"
              priority={false} // to control the loading behavior (optional)
              loading="lazy" // optional, as Next.js handles lazy loading by default
              quality={75}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="bg-zinc-800 relative t-saturate-0">
            <Image
              src="/gif2.gif"
              alt="Front-end development"
            sizes="100px"
              className="saturate-0"
              priority={false} // to control the loading behavior (optional)
              loading="lazy" // optional, as Next.js handles lazy loading by default
              quality={75}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="bg-zinc-800 relative t-saturate-0">
            <Image
              src="/gif2.gif"
              alt="Front-end development"
            sizes="100px"
              className="saturate-0"
              priority={false} // to control the loading behavior (optional)
              loading="lazy" // optional, as Next.js handles lazy loading by default
              quality={75}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="bg-zinc-800 relative  t-saturate-0">
            <Image
              src="/gif2.gif"
              alt="Front-end development"
            sizes="100px"
              className="saturate-0"
              priority={false} // to control the loading behavior (optional)
              loading="lazy" // optional, as Next.js handles lazy loading by default
              quality={75}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className=" w-[280px] xs:w-[400px] sm:w-[500px] md:w-full lg:max-w-[800px]  flex  flex-col ">
          <h1 className=" text-5xl big-winks-text md:text-7xl lg:text-7xl xl:text-8xl text-p1">
            About Me
          </h1>
          <div className="flex flex-col  w-full overflow-hidden ">
            <p className="w-auto text-center xs:text-left pr-2 text-md md:text-xl lg:max-w-3xl max-w-2xl xl:text-xl lg:leading-9 font-manrope font-extralight mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
