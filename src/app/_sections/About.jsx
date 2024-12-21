import React from "react";
const About = () => {
  return (
    <div
      id="about-me"
      className="w-full max-h-[1050px] h-auto py-16 md:py-64  bg-transparent flex items-center justify-center"
    >
      <div className="max-w-[1500px]  w-auto h-full flex xl:flex-row flex-col items-center justify-center gap-16 ">
        {/* <div className="grid grid-cols-4 gap-4 bg-transparent w-[280px] sm:w-[400px] xl:w-[400px] h-[300px] xl:h-[500px] ">
          <div className="bg-zinc-800 relative dark:t-saturate-0">
            <Image
              src={theme === "dark" ? "/gif2.gif" : "/orange-bg.jpg"}
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
          <div className="bg-zinc-800 relative dark:t-saturate-0">
            <Image
              src={theme === "dark" ? "/gif2.gif" : "/orange-bg.jpg"}
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
          <div className="bg-zinc-800 relative dark:t-saturate-0">
            <Image
              src={theme === "dark" ? "/gif2.gif" : "/orange-bg.jpg"}
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
          <div className="bg-zinc-800 relative  dark:t-saturate-0">
            <Image
              src={theme === "dark" ? "/gif2.gif" : "/orange-bg.jpg"}
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
        </div> */}
        <div className=" w-[280px] xs:w-[400px] sm:w-[500px] md:w-full lg:max-w-[800px]  flex  flex-col  ">
          <h1 className=" text-5xl big-winks-text md:text-7xl lg:text-7xl xl:text-8xl text-p1 text-center">
            About Me
          </h1>
          <div className="flex flex-col  w-full overflow-hidden ">
            <p className="w-auto text-zinc-800 dark:text-zinc-200 text-center xs:text-left pr-2 text-md md:text-xl lg:max-w-3xl max-w-2xl xl:text-xl lg:leading-9 font-lato font-normal mt-5">
              {"I'"}m a passionate and skilled Full Stack Web Developer with
              expertise in modern web technologies, including <b>Next.js</b> ,
              <b>React.js</b>, <b>Node.js</b> , and <b>Express.js</b>. I
              specialize in creating innovative{" "}
              <b>AI-powered SaaS applications</b> and tools that connects
              technology and business needs. <br /> <br /> With a strong
              background in <b>AI integration</b>, I excel at creating
              intelligent <b>bots</b>, <b>fine-tuning LLMs</b> (Large Language
              Models), and building <b>RAG</b> (Retrieval-Augmented Generation)
              systems. My services extend to designing and implementing scalable
              web applications with seamless user experiences. <br /> <br />{" "}
              Currently working on building <b> RAG</b>, I work on solving
              complex problems and delivering solutions as per each clients
              unique requirements.{" "}
              <span className="big-winks-text tracking-widest">
                <br /> <br /> Lets work together to transform your vision into
                reality{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
