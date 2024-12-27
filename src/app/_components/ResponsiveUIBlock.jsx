"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LaptopIcon, SmartphoneIcon } from "lucide-react";
import { motion } from "framer-motion";

const ResponsiveUIBlock = (props) => {
  const [screen, setScreen] = useState(1);

  return (
    <>
      <div className="w-full z-50 mt-5 flex flex-col items-end justify-end self-end  ">
        <div className="hidden lg:flex items-center justify-center gap-2 z-20">
          <button
            onClick={() => {
              setScreen(1);
            }}
            style={{
              backgroundColor: screen === 1 ? props.tertiaryColor : "",
            }}
            className={`bg-zinc-900 duration-200 ease-in-out ${
              screen === 1 ? "scale-125" : "scale-[0.8]"
            } border-zinc-50  dark:border-zinc-700 transition-transform hover:bg-zinc-800 rounded-full h-10 w-10 flex items-center justify-center`}
          >
            <LaptopIcon className="w-5 h-5 text-zinc-200" />
          </button>
          <button
            onClick={() => {
              setScreen(2);
            }}
            style={{
              backgroundColor: screen === 2 ? props.tertiaryColor : "",
            }}
            className={`bg-zinc-900 rounded-full h-10 w-10 duration-200  ${
              screen === 2 ? "scale-125" : "scale-[0.8]"
            }  ease-in-out   border-zinc-50 dark:border-zinc-700  transition-transform hover:bg-zinc-800 flex items-center justify-center`}
          >
            <SmartphoneIcon className="w-5 h-5 text-zinc-200" />
          </button>
        </div>
      </div>

      <div className="hidden w-full h-auto relative rounded-xl overflow-hidden md:flex items-center justify-center">
        {screen === 1 ? (
          <motion.div
            key="laptop"
            className="w-full"
            initial={{ opacity: 0.9, scaleX: 0.1 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={props?.laptop}
              alt={props?.alt}
              layout="responsive"
              width={16} // Example aspect ratio, adjust accordingly
              height={9} // Example aspect ratio, adjust accordingly
              className="rounded-lg"
              priority
            />
          </motion.div>
        ) : (
          <>
            <div className="hidden -translate-y-8 lg:flex">
              <motion.div
                key="mobile"
                initial={{ opacity: 0.9, scaleX: 1.9 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="relative w-[320px] z-10 lg:w-[720px] h-[1000px]"
              >
                <Image
                  src="/mobile-mockup.avif"
                  alt="mobile mockup transparent png"
                  fill
                  objectFit="cover"
                  className="rounded-lg"
                  priority
                />

                <div className="absolute left-[22%] top-[8.7%]">
                  <div className="relative z-30 w-[320px] no-scrollbar lg:w-[405px] h-screen max-h-[822px] rounded-xl overflow-y-auto self-center">
                    <Image
                      src={props?.mobile}
                      alt={props?.alt}
                      width={520}
                      height={2000}
                      className="rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </div>

      <div className="flex md:hidden w-full relative h-auto ">
        <Image
          src={props?.mobile}
          alt="Laptop UI"
          layout="responsive"
          width={16} // Example aspect ratio, adjust accordingly
          height={9} // Example aspect ratio, adjust accordingly
          className="rounded-lg"
          priority
        />
      </div>
    </>
  );
};

export default ResponsiveUIBlock;

{
}
