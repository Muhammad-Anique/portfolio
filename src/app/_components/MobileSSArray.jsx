import Image from "next/image";
import React from "react";

const MobileSS = ({ src, alt, index }) => {
  return (
    <div
      className={`relative w-full h-full max-w-[900px] mx-auto flex items-center justify-center scale-125 ${
        index === 1 ? "mt-16" : ""
      } `}
    >
      <Image
        src="/mobile-mockup.avif"
        width={1000}
        height={1500}
        alt="mobile-mockup-transparent"
        className="w-full h-auto  " // Make image fully responsive
      />
      <div className="absolute inset-0 flex justify-center items-center w-[40%] xl:h-[70%] 2xl:h-[57%] left-auto right-auto  xl:top-[15%] 2xl:top-[21%]">
        <div className="bg-zinc-900   rounded-[20px] overflow-hidden  shadow-lg flex items-center justify-center">
          <Image
            src={src} // Replace with your screenshot's path
            alt={alt}
            fill
            objectFit="cover" // Ensure it scales properly
            className="scale-y-105 rounded-[5px] md:rounded-[10px] xl:rounded-[10px] lg:rounded-[10px]" // Match rounded corners
          />
        </div>
      </div>
    </div>
  );
};
const MobileSSArray = ({ body }) => {
  return (
    <div className="py-16 hidden xl:flex">
      <div className="w-full 2xl:h-[600px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {body.map((ss, index) => {
          return (
            <MobileSS key={index} src={ss.src} alt={ss.alt} index={index} />
          );
        })}
      </div>
    </div>
  );
};

export default MobileSSArray;
