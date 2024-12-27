import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

          <Link
            href={
              "https://mail.google.com/mail/?view=cm&fs=1&to=anique.cs@gmail.com&su=Inquiry%20Regarding%20Your%20Availability%20for%20Full%20Stack%20Development%20Projects&body=Dear%20Anique%2C%0A%0AI%20hope%20this%20email%20finds%20you%20well.%20I%20am%20writing%20to%20inquire%20about%20your%20availability%20for%20upcoming%20full%20stack%20development%20projects.%20Please%20let%20me%20know%20if%20you%20are%20currently%20available%20to%20take%20on%20new%20projects%20and%20if%20so%2C%20your%20availability%20for%20the%20next%20few%20weeks.%0A%0AThank%20you%20for%20your%20time%2C%0A[Your%20Name]"
            }
            target="_blank"
            className="bg-gradient-to-r cursor-pointer group dark:from-[#2b2b2bd3] dark:to-[#00000049] from-zinc-200/40 to-zinc-300/40 rounded-full w-[220px] h-[40px] flex items-center justify-between"
          >
            <h1 className="px-4 text-lg font-manrope font-medium group-hover:translate-x-[130px] duration-300 transition-transform ease-in-out">
              Inquire
            </h1>
            <div
              data-name="circle"
              className="rounded-full group-hover:-translate-x-[180px] duration-300 transition-transform ease-in-out w-[35px] h-[35px] bg-gradient-to-b flex items-center justify-center from-p1 to-orange-400 "
            >
              <ChevronRight className="w-5 h-5 text-zinc-200 " />
            </div>
          </Link>
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
              I specialize in using <b>AI</b> to help businesses grow and run
              more efficiently. I create custom <b>AI software solutions</b>{" "}
              tailored to your specific needs. With significant experience, I
              can help you <b>improve processes</b>,{" "}
              <b>enhance customer experiences</b>, <b>automate tasks</b>, and
              <b>drive overall growth</b> through AI technology. Whether{" "}
              {"you're"}
              looking to streamline operations, make smarter decisions, or
              improve customer engagement, I can build the right AI tools for
              you. Let’s <b>set up a meeting</b> to discuss how we can turn your
              ideas into real, impactful AI solutions.
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Inquire;
