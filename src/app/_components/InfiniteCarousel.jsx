"use client";
import React, { useState, useEffect, useRef } from "react";

const InfiniteCarousel = () => {
  const originalItems = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];
  const items = [
    originalItems[originalItems.length - 1],
    ...originalItems,
    originalItems[0],
  ]; // Add duplicate slides
  const [currentIndex, setCurrentIndex] = useState(1); // Start from the "real" first slide
  const transitionRef = useRef(true);

  //   // Automatically move to the next slide
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       goToNextSlide();
  //     }, 2000); // Adjust the delay as needed
  //     return () => clearInterval(interval); // Clean up on unmount
  //   }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    transitionRef.current = true;
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
    transitionRef.current = true;
  };

  // Reset index to create an infinite loop effect without transition
  useEffect(() => {
    if (currentIndex === items.length - 1) {
      setTimeout(() => {
        setCurrentIndex(1);
        transitionRef.current = false;
      }, 500); // Match this timeout to the transition duration
    }
    if (currentIndex === 0) {
      setTimeout(() => {
        setCurrentIndex(items.length - 2);
        transitionRef.current = false;
      }, 500); // Match this timeout to the transition duration
    }
  }, [currentIndex, items.length]);

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: transitionRef.current
            ? "transform 0.5s ease-in-out"
            : "none",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-64 flex items-center justify-center p-5 rounded-lg  text-xl"
          >
            <div className="w-full h-full bg-green-800 flex items-center justify-center rounded-lg">
              <h1> {item}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-zinc-200 p-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-zinc-200 p-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
};

export default InfiniteCarousel;
