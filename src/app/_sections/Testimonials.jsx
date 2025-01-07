"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: `1`,
      body: `Muhammad Anique is an exceptionally skilled and dedicated full-stack developer with a passion for delivering high-quality solutions. His ability to seamlessly handle both front-end and back-end development showcases his versatility and deep understanding of modern web technologies.`,
      author: `Mr. Sebastian`,
      country: `Germany`,
      icon: `🇩🇪`,
      date: `6/23/2024`,
    },
    {
      id: `2`,
      body: `Working with Muhammad Anique was a game-changer for our project. His expertise in creating scalable solutions and his problem-solving skills made the entire process seamless and efficient.`,
      author: `Ms. Clara`,
      country: `United States`,
      icon: `🇺🇸`,
      date: `7/01/2024`,
    },
    {
      id: `3`,
      body: `Muhammad’s ability to quickly understand complex requirements and deliver top-notch results is truly impressive. He is a developer who exceeds expectations in every way.`,
      author: `Mr. Akihiko`,
      country: `Japan`,
      icon: `🇯🇵`,
      date: `6/18/2024`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to handle previous testimonial
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate testimonials every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 15000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full flex items-center justify-center  -translate-y-10 py-10 md:-translate-y-0  md:py-24 h-auto">
      <div className="w-full max-w-[1250px] pb-16 h-full bg-transparent flex items-center justify-center relative">
        <div className="absolute -z-10 left-0">
          <div className="relative w-[700px] h-[700px] skew-y-12 rotate-45 dark:opacity-[0.08] opacity-[0.8] -translate-x-20 -translate-y-20">
            <Image
              className="w-full"
              src="/spot1.png"
              alt="Water-Spot"
              width={700}
              height={700}
            />
          </div>
        </div>

        <div className="absolute -translate-y-24  top-0 left-[9%] md:left-[16%] z-20 block ">
          <div className="relative w-[170px] h-[170px] scale-50 sm:scale-75 md:scale-90">
            <Image
              className="w-full"
              src="/quote2.png"
              alt="Water-Spot"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div className="w-[75%] duration-200 ease-in-out transition-transform  h-auto min-h-[550px] dark:bg-zinc-50/0 dark:bg-gradient-to-b dark:from-[#131313] flex flex-col gap-1 items-center justify-center dark:backdrop-blur-0 dark:rounded-none backdrop-blur-sm bg-zinc-50/70 rounded-lg dark:to-[#21212100] pt-12 md:pt-20  p-7">
          <h1 className="font-manrope duration-200 ease-in-out transition-transform text-md md:text-xl text-zinc-700 dark:text-zinc-300 text-center max-w-xl ">
            {currentTestimonial.body}
          </h1>

          <h1 className="text-zinc-800 dark:text-zinc-300 duration-200 ease-in-out transition-transform text-2xl md:text-4xl big-winks-text mt-10">
            {currentTestimonial.author}
          </h1>

          <div className="w-[250px] duration-200 ease-in-out transition-transform flex flex-row items-center justify-center gap-3">
            <div className="bg-p2 dark:bg-zinc-400 sm:h-[1px] sm:w-full hidden sm:block" />
            <span>{currentTestimonial.icon}</span>
            <h1 className="text-zinc-700 dark:text-zinc-300 text-center leading-4 sm:w-full text-md md:text-xl font-playfair">
              {currentTestimonial.country.toUpperCase()}
            </h1>
            <span>{currentTestimonial.icon}</span>
            <div className="bg-p2 dark:bg-zinc-400 sm:h-[1px] sm:w-full hidden sm:block" />
          </div>

          <div className="mt-12 flex items-center justify-between gap-10">
            <ChevronLeftIcon
              onClick={handlePrev}
              className="w-5 h-5 text-zinc-900 dark:text-zinc-200  cursor-pointer hover:text-p1"
            />
            <ChevronRightIcon
              onClick={handleNext}
              className="w-5 h-5 text-zinc-900 dark:text-zinc-200  cursor-pointer hover:text-p1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
