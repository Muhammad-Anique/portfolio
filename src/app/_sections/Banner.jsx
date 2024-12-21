"use client";
import React, { useState, useEffect, useRef } from "react";

const Banner = () => {
  return (
    <div className="w-full h-auto py-0 flex items-center justify-center">
      <div className="max-w-[1250px] w-full h-auto">
        <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 h-auto w-full justify-items-center gap-20 md:gap-0">
          <BannerElement num={24} text="clients" />
          <BannerElement num={50} text="projects" />
          <BannerElement num={100} text="awards" />
        </div>
      </div>
    </div>
  );
};

const BannerElement = ({ num, text }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          // Start counting when half the section is visible
          animateCounter();
        } else if (!entry.isIntersecting) {
          // Reset counter when the section is out of view
          setCount(0);
        }
      },
      { threshold: [0, 0.5] }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [num]);

  const animateCounter = () => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = Math.ceil((num / duration) * 50); // Increase value every 50ms
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        start = num;
        clearInterval(timer);
      }
      setCount(start);
    }, 50);
  };

  return (
    <div ref={elementRef} className="flex flex-col items-center justify-center">
      <h1 className="text-[140px] dark:text-zinc-200 text-zinc-800 md:text-[100px] lg:text-[180px] stroky_dark dark:stroky leading-[150px] md:leading-[110px] lg:leading-[190px]">
        {count}+
      </h1>
      <p className="text-4xl font-thin big-winks-text text-p1 dark:text-zinc-300">
        {text}
      </p>
    </div>
  );
};

export default Banner;
