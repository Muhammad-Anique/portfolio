import Image from "next/image";
import React from "react";


const LaptopSS = ({ src, alt }) => {
  return (
    <div className="w-full h-auto flex py-16 ">
      <div className="relative w-full h-auto max-w-[1680px]  mx-auto flex items-center z-20 justify-center ">
        <Image
          src="/laptop-mockup.avif"
          width={1680}
          height={900}
          alt="laptop-mockup-transparent"
          className="w-full h-auto " // Make image fully responsive
        />
        <div className="absolute inset-0 -z-10 flex justify-center items-center w-[67%] h-[80%] left-auto right-auto  translate-y-[8%]">
          <div className="bg-zinc-900  rounded-t-[35px] overflow-hidden  shadow-lg flex items-center justify-center">
            <Image
              src={src} // Replace with your screenshot's path
              alt={alt}
              fill
              objectFit="cover" // Ensure it scales properly
              className="rounded-t-[5px] md:ounded-t-[10px] xl:ounded-t-[20px] lg:rounded-t-[10px]" // Match rounded corners
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopSS;
