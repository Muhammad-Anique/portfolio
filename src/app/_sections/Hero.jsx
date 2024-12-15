import { DownloadIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-32 px-4  relative max-h-[1050px] sm:px-10 md:px-16 lg:px-32 w-full h-[94vh]  md:h-[100vh] flex flex-row justify-center ">
      <div className="flex scale-90 lg:scale-110 h-full flex-col md:flex-row md:gap-10 items-center justify-center">
        <div className="flex  items-center justify-center">
          <div className="relative flex items-center justify-center w-[250px] h-[250px] md:w-[350px] md:h-[350px]">
            <Image
              src="/dashed-border.avif"
              alt="dashed-border-gradient-from-top-to-bottom"
              className="absolute translate-y-2"
              width={250}
              priority={false} // to control the loading behavior (optional)
              height={250}
              loading="lazy" // optional, as Next.js handles lazy loading by default
              quality={75}
            />

            <div className="z-10 flex items-start justify-center w-[210px] h-[210px]  md:w-[300px] md:h-[300px] overflow-hidden rounded-full backdrop-blur-sm bg-gradient-to-b  from-[#090909] to-[#36363648] ">
              <Image
                src="/Muhammad-Anique.avif"
                alt="profile-image"
                className="z-10 "
                width={210}
                height={210}
                priority={true} // to control the loading behavior (optional)
                quality={75}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div className="mt-5 w-full relative">
          <p
            className={`shadow-basic text-5xl md:text-7xl  font-hand text-p1 absolute top-0 -translate-y-10 -translate-x-6 left-5 -rotate-12`}
          >
            I am
          </p>

          <div className="flex flex-col">
            <p className="text-zinc-200 font-manrope text-5xl md:text-8xl font-extrabold">
              ANIQUE
            </p>
            <p className="text-zinc-200 font-manrope text-3xl md:text-4xl font-thin">
              Full Stack Developer {":)"}
            </p>

            <div className="w-full flex items-center gap-10 flex-row mt-5">
              <hr className="w-[50px]" />
              <p className="text-zinc-200 h-full font-manrope text-sm md:text-md font-thin tracking-wider ">
                CHECK MY RESUME
              </p>
              <div className="flex items-center justify-center">
                <DownloadIcon className="w-4 h-4 text-zinc-200 " />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 w-full h-[50px] flex items-center justify-center gap-10 ">
        <div className="text-zinc-200 flex flex-row gap-10 items-center justify-center w-full">
          <hr className="w-[5%] hidden md:block md:w-[10%] lg:w-[20%]" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>

          <hr className="w-[5%] hidden md:block md:w-[10%] lg:w-[20%]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
