import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
const Inquire = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="w-full py-16 max-w-[1250px] px-10">
        <div className="flex flex-col gap-2 md:gap-4 justify-end items-end ">
          <h1 className="text-2xl md:text-5xl big-winks-text text-zinc-900 dark:text-zinc-200  text-right">
            Have an Idea in mind <span className="font-hand">?</span>
          </h1>
          <p className="text-zinc-700 dark:text-zinc-400 text-md md:text-lg text-right">
            I cant wait to make indcredible things with you !
          </p>

          <div className="bg-gradient-to-r dark:from-[#2b2b2bd3] dark:to-[#00000049] from-zinc-200/40 to-zinc-300/40 rounded-full w-[220px] h-[40px] flex items-center justify-between">
            <h1 className="px-4 text-lg font-manrope font-medium">Inquire</h1>
            <div
              data-name="circle"
              className="rounded-full w-[35px] h-[35px] bg-gradient-to-b flex items-center justify-center from-p1 to-orange-400 dark:via-p2 dark:to-p3"
            >
              <ChevronRight className="w-5 h-5 text-zinc-200 " />
            </div>
          </div>
        </div>

        <div className="w-full relative">
          <div className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center">
            <Image
              src="/spot2.png"
              alt="Spot-water-color"
              className="absolute top-0 left-0 dark:opacity-100 opacity-25"
              width={1000}
              height={1000}
            />

            <Image
              src="/spot1.png"
              alt="Spot-water-color"
              className="absolute top-0 left-0 -translate-y-16 -translate-x-16 opacity-[0.1]  dark:opacity-5"
              width={1000}
              height={1000}
            />

            <p className="text-zinc-900 dark:text-zinc-200  -rotate-6 big-winks-text text-center absolute text-2xl md:text-4xl max-w-4xl  tracking-widest ">
              {" "}
              <span className="font-hand text-4xl">{'"'}</span> As a full{" "}
              <span className="font-hand">-</span> stack developer
              <span className="font-hand">,</span> I can help transform your
              ideas into reality by leveraging both front
              <span className="font-hand">-</span> end and back
              <span className="font-hand">-</span>end expertise to build
              seamless<span className="font-hand">,</span> efficient
              <span className="font-hand">,</span> and scalable web applications
              <span className="font-hand">.</span>{" "}
              <span className="font-hand text-4xl">{'"'}</span>{" "}
            </p>
          </div>

          <div className="w-full flex items-center justify-center z-[30]">
            <p className="text-zinc-700 dark:text-zinc-300 text-sm md:text-md max-w-3xl text-center font-manrope mb-32">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi. Proin
              porttitor, orci nec nonummy molestie, enim est eleifend mi, non
              fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
              scelerisque vitae, consequat in, pretium a, enim. Pellentesque
              congue.
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Inquire;
