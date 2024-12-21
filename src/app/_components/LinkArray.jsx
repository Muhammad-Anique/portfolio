import Image from "next/image";
import React from "react";

const LinkArray = () => {
  return (
    <div className="w-full flex flex-row h-[100px] gap-6 flex-wrap items-center justify-center ">
      <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#0d0d0d43] to-[#383838bf]">
        <div className="w-[30px] h-[30px] hover:scale-110 duration-200 ease-in-out cursor-pointer relative">
          <Image
            src="/figma-logo.png"
            alt="Figma-Logo-PNG-Transparent"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className="w-[70px] h-[70px] flex items-center justify-center rounded-full bg-gradient-to-b from-[#0d0d0d43] to-[#383838bf]">
        <div className="w-[40px] h-[40px] hover:scale-110 duration-200 ease-in-out cursor-pointer relative">
          <Image
            src="/github-logo.png"
            alt="Figma-Logo-PNG-Transparent"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default LinkArray;
