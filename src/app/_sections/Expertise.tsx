"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useBreakpoint } from "../_components/useBreakpoint";

const Expertise = () => {
  const breakpoint = useBreakpoint();

  const [isClicked, setIsClicked] = useState(false);
  const [activatedSection, setActivatedSection] = useState(0);

  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const paragraphRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const divisionRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);

  const image1 = useRef<HTMLDivElement | null>(null);
  const image2 = useRef<HTMLDivElement | null>(null);
  const image3 = useRef<HTMLDivElement | null>(null);
  interface Section {
    title: string;
    description: string;
    skills: { name: string; percentage: number }[];
  }

  const sections: Section[] = [
    {
      title: "Front End",
      description:
        "Crafting visually appealing, interactive, and responsive user interfaces using the latest technologies.",
      skills: [
        { name: "React Js", percentage: 80 },
        { name: "Next Js", percentage: 70 },
        { name: "Tailwind CSS", percentage: 90 },
        { name: "Lucide", percentage: 75 },
      ],
    },
    {
      title: "Back End",
      description:
        "Building robust, scalable, and secure server-side applications tailored to business needs.",
      skills: [
        { name: "Node.js", percentage: 85 },
        { name: "Express.js", percentage: 80 },
        { name: "MongoDB", percentage: 75 },
        { name: "PostgreSQL", percentage: 70 },
      ],
    },
    {
      title: "DevOps",
      description:
        "Implementing CI/CD pipelines and maintaining scalable infrastructure for seamless deployment.",
      skills: [
        { name: "Docker", percentage: 80 },
        { name: "Kubernetes", percentage: 70 },
        { name: "AWS", percentage: 75 },
        { name: "Jenkins", percentage: 65 },
      ],
    },
  ];

  useEffect(() => {
    if (
      isClicked &&
      divisionRef.current &&
      headingRef.current &&
      paragraphRef.current &&
      imageContainerRef.current &&
      buttonRef.current &&
      skillRef.current
    ) {
      if (breakpoint === "xl") {
        divisionRef.current.style.transform = `translateX(640px) translateY(-70px) `;
        divisionRef.current.style.scale = `1.0`;
      } else {
        divisionRef.current.style.transform = `translateX(670px) translateY(-90px) `;
        divisionRef.current.style.scale = `1.0`;
      }

      if (breakpoint === "md") {
        buttonRef.current.style.transform = `translate(430px, -190px) rotate(170deg)`;
      } else if (breakpoint !== "xs" && breakpoint !== "sm") {
        buttonRef.current.style.transform =
          "translateX(250px) translateY(-70px) rotate(170deg) ";
      } else {
        const buttonBounds = buttonRef.current.getBoundingClientRect();
        const translateX = window.innerWidth / 2 - buttonBounds.width / 2;
        buttonRef.current.style.transform = `translate(${translateX}px, -180px) rotate(170deg)`;
      }

      headingRef.current.style.fontSize = "70px";

      paragraphRef.current.style.display = "block";
      if (breakpoint !== "xs" && breakpoint !== "sm") {
        imageContainerRef.current.style.transform =
          "rotate(-10deg) translateX(-290px) ";
      } else {
        imageContainerRef.current.style.transform =
          "rotate(-10deg) translateX(0px) ";
      }

      skillRef.current.style.display = "flex";
    } else if (
      !isClicked &&
      divisionRef.current &&
      headingRef.current &&
      paragraphRef.current &&
      imageContainerRef.current &&
      buttonRef.current &&
      skillRef.current
    ) {
      divisionRef.current.style.transform = "translateX(0px) translateY(0px) ";

      if (breakpoint === "xs" || breakpoint === "sm") {
        headingRef.current.style.fontSize = "30px";
      } else {
        headingRef.current.style.fontSize = "70px";
      }
      buttonRef.current.style.transform =
        "translateX(0px) translateY(0px) rotate(0deg) ";
      paragraphRef.current.style.display = "none";
      imageContainerRef.current.style.transform =
        "rotate(10deg) translateX(0px) ";

      skillRef.current.style.display = "none";
    }
  }, [isClicked, breakpoint]);

  const handleMouseEnter = () => {
    if (imageContainerRef.current && !isClicked) {
      imageContainerRef.current.style.transform = "rotate(-10deg) ";
    }
  };

  const handleMouseLeave = () => {
    if (imageContainerRef.current && !isClicked) {
      imageContainerRef.current.style.transform = "rotate(10deg) ";
    }
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const handleChangeContent = () => {
      if (
        image1.current &&
        image2.current &&
        image3.current &&
        imageContainerRef.current
      ) {
        const containerBounds =
          imageContainerRef.current.getBoundingClientRect();
        const imgBounds1 = image1.current.getBoundingClientRect();
        const imgBounds2 = image2.current.getBoundingClientRect();
        const imgBounds3 = image3.current.getBoundingClientRect();

        if (
          imgBounds1.top > 0 &&
          imgBounds1.top <= containerBounds.height / 2
        ) {
          setActivatedSection(0);
        } else if (
          imgBounds2.top > 0 &&
          imgBounds2.top <= containerBounds.height / 2
        ) {
          setActivatedSection(1);
        } else if (
          imgBounds3.top > 0 &&
          imgBounds3.top <= containerBounds.height / 2
        ) {
          setActivatedSection(2);
        }
      }
    };

    const container = imageContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleChangeContent);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleChangeContent);
      }
    };
  }, []);

  return (
    <div
      data-name="section-expertise"
      className="w-full max-h-[1050px]  h-auto flex flex-col items-center justify-center min-h-[100vh] "
    >
      <div
        className={`w-full hidden xl:flex ${
          isClicked
            ? "xl:-translate-x-4 2xl:-translate-x-9"
            : " xl:translate-x-4 2xl:translate-x-10"
        }  h-full  items-center justify-center pl-10`}
      >
        <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px]  xl:w-[600px] xl:h-[600px] flex items-center justify-center rotate-[10deg] relative transition-transform duration-500">
          <div
            ref={imageContainerRef}
            data-name="Image-Container"
            className="w-full h-full overflow-y-auto no-scrollbar transition-transform duration-500"
          >
            <div
              ref={image1}
              className="relative w-full h-[300px] md:h-[450px] xl:h-[600px]"
              data-image
            >
              <Image
                src="/pat1.jpg"
                alt="pattern1"
                fill
                sizes="300px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              ref={image2}
              className="relative w-full  h-[300px] md:h-[450px] xl:h-[600px] mt-12"
            >
              <Image
                src="/pat2.jpg"
                alt="pattern2"
                sizes="300px"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              ref={image3}
              className="relative w-full  h-[300px] md:h-[450px] xl:h-[600px] mt-12"
            >
              <Image
                src="/pat3.jpg"
                alt="pattern3"
                sizes="300px"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Heading */}
          <div className="absolute translate-y-[60px] lg:translate-y-[100px] -translate-x-[85px] md:-translate-x-[100px] lg:-translate-x-[125px]  xl:-translate-x-[350px]">
            <div
              ref={divisionRef}
              className="flex flex-col transition-transform ease-in-out duration-500"
            >
              <h1
                data-name="Heading"
                ref={headingRef}
                className="text-zinc-900 dark:text-zinc-200  font-playfair text-3xl md:text-5xl -rotate-[10deg] transition-transform duration-500"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {sections[activatedSection]?.title} <br />
                <span className="ml-12">Development</span>
              </h1>

              <p
                ref={paragraphRef}
                className="font-manrope ml-5 text-md -rotate-[10deg] mt-10 leading-7 text-zinc-700 dark:text-zinc-400 max-w-xl hidden"
              >
                {sections[activatedSection]?.description}
              </p>

              <div
                ref={skillRef}
                className="hidden gap-4 flex-col items-center pr-5 overflow-y-auto ml-14 mt-10 w-full h-[300px]   -rotate-[10deg]"
              >
                <div className="w-full h-[60px] shrink-0 rounded-tl-full rounded-br-full rounded-tr-full bg-gradient-to-r from-[#2f2f2f43] to-[#2f2f2fbe] flex items-center px-7">
                  <h1 className="font-manrope text-2xl text-zinc-900 dark:text-zinc-200  ">
                    React Js
                  </h1>
                </div>
                <div className="w-full h-[60px] shrink-0 rounded-tl-full rounded-br-full rounded-tr-full bg-gradient-to-r from-[#2f2f2f43] to-[#2f2f2fbe] flex items-center px-7">
                  <h1 className="font-manrope text-2xl text-zinc-900 dark:text-zinc-200  ">
                    Next Js
                  </h1>
                </div>
                <div className="w-full h-[60px] shrink-0 rounded-tl-full rounded-br-full rounded-tr-full bg-gradient-to-r from-[#2f2f2f43] to-[#2f2f2fbe] flex items-center px-7">
                  <h1 className="font-manrope text-2xl text-zinc-900 dark:text-zinc-200  ">
                    Tailwind CSS
                  </h1>
                </div>
                <div className="w-full h-[60px] shrink-0 rounded-tl-full rounded-br-full rounded-tr-full bg-gradient-to-r from-[#2f2f2f43] to-[#2f2f2fbe] flex items-center px-7">
                  <h1 className="font-manrope text-2xl text-zinc-900 dark:text-zinc-200  ">
                    Lucide
                  </h1>
                </div>
              </div>
            </div>

            <div
              onClick={handleClick}
              ref={buttonRef}
              className=" w-[60px] h-[60px]  md:w-[75px] md:h-[75px] lg:w-[100px] lg:h-[100px] cursor-pointer transition-transform duration-500 ml-12 mt-7 lg:mt-12  border-2 border-zinc-800 border-dashed rounded-full flex items-center justify-center"
            >
              <div className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] rounded-full bg-gradient-to-b from-p1 via-p2 to-p3 flex items-center justify-center">
                <ChevronRight className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-zinc-900 dark:text-zinc-200 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
