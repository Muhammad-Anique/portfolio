"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const LaptopSS = ({ body }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 }); // Track cursor position
  const [loading, setLoading] = useState(false); // Track image loading state

  const handleNextImage = () => {
    setLoading(true); // Start loading when the button is clicked
    setCurrentIndex((prevIndex) => (prevIndex + 1) % body.length); // Loop to the first image
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left, // Cursor X relative to the element
      y: e.clientY - rect.top, // Cursor Y relative to the element
    });
  };

  // Handle image loading event
  const handleImageLoad = () => {
    setLoading(false); // Stop loading when image is loaded
  };

  return (
    <div className="w-full h-auto flex ">
      <div
        className="relative w-full h-auto mx-auto flex items-center z-20 justify-center"
        onMouseEnter={() => setIsHovered(true)} // Set hover state
        onMouseLeave={() => setIsHovered(false)} // Unset hover state
        onMouseMove={handleMouseMove} // Track cursor movement
      >
        <Image
          src="/laptop-mockup.png"
          layout="responsive"
          width={16}
          height={9}
          alt="laptop-mockup-transparent"
          className="w-full h-auto scale-y-[0.92]"
        />

        {isHovered &&
          !loading && ( // Show button only on hover and not loading
            <button
              onClick={handleNextImage}
              style={{
                left: cursorPosition.x,
                top: cursorPosition.y,
                position: "absolute",
              }}
              className="z-20 h-[120px] w-[120px]  -translate-x-[60px] -translate-y-[60px] transform backdrop-blur-sm bg-gradient-to-b from-zinc-950/80 to-zinc-900/60   rounded-full flex items-center justify-center"
            >
              <ChevronRight className="w-16 h-16 text-zinc-50" />
              <div className="rounded-full w-[60px] h-[60px] backdrop-blur-sm bg-gradient-to-b from-p1 to-orange-400  flex items-center justify-center absolute translate-x-12  -translate-y-12">
                <p className="text-zinc-200 font-extrabold font-lato">
                  {currentIndex + 1}/{body?.length + 1}
                </p>
              </div>
            </button>
          )}

        {loading && ( // Show loader while the image is loading
          <div className="absolute z-30 flex items-center justify-center w-full h-full">
            <div className="spinner  flex items-center justify-center rounded-full w-16 h-16"></div>
          </div>
        )}

        <div
          name="image"
          className="absolute inset-0 -z-10 flex justify-center items-center w-[75%] left-auto right-auto"
        >
          <div className="overflow-auto flex items-center justify-center">
            <Image
              name="ss-image"
              src={body[currentIndex].src} // Dynamically set current image
              alt={body[currentIndex].alt}
              layout="responsive"
              width={16}
              height={9}
              objectFit="cover"
              className=""
              onLoadingComplete={handleImageLoad} // Call this when image has finished loading
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopSS;
