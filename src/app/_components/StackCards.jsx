import Image from "next/image";
import React from "react";

const StackCards = ({ body }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 h-auto justify-items-center space-x-5  ">
      {body[0] && (
        <div className="w-[350px] lg:w-[340px] 2xl:w-[400px]  h-auto relative shrink-0 mx-2 hover:scale-105 ease-in duration-200 cursor-pointer ">
          <Image
            src="/card1.svg"
            width={600}
            height={600}
            alt="card1"
            className=""
          />

          <div className="absolute p-10 top-0 z-10">
            <h1 className="font-manrope text-zinc-900 dark:text-zinc-200  text-2xl font-bold ">
              {" "}
              {body[0]?.stack.title}
            </h1>
            <p className="text-zinc-300 text-lg mt-2">
              {body[0]?.stack?.technologies?.map((tech, index) => {
                <b key={index}>{tech} |</b>;
              })}
            </p>
          </div>
        </div>
      )}

      {body[1] && (
        <div className="w-[350px] lg:w-[340px] 2xl:w-[400px] h-auto relative shrink-0 mt-5 md:mt-0 mx-2 hover:scale-105 ease-in duration-200 cursor-pointer">
          <Image
            src="/card2.svg"
            width={600}
            height={600}
            alt="card1"
            className=""
          />
          <div className="absolute p-10 top-0 z-10">
            <h1 className="font-manrope text-zinc-900 dark:text-zinc-200  text-2xl font-bold ">
              {" "}
              {body[1]?.stack.title}
            </h1>
            <p className="text-zinc-300 text-lg mt-2">
              {body[1]?.stack?.technologies?.map((tech, index) => {
                <b key={index}>{tech} |</b>;
              })}
            </p>
          </div>
        </div>
      )}

      {body[2] && (
        <div className="w-[350px] lg:w-[340px] 2xl:w-[400px] h-auto relative shrink-0 mx-2 hover:scale-105 ease-in duration-200 cursor-pointer">
          <Image
            src="/card3.svg"
            width={600}
            height={600}
            alt="card1"
            className=""
          />

          <div className="absolute p-10 top-0 z-10">
            <h1 className="font-manrope text-zinc-900 dark:text-zinc-200  text-2xl font-bold ">
              {" "}
              {body[2]?.stack.title}
            </h1>
            <p className="text-zinc-300 text-lg mt-2">
              {body[2]?.stack?.technologies?.map((tech, index) => {
                <b key={index}>{tech} |</b>;
              })}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StackCards;
