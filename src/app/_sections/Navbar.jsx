"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";
import ThemeToggle from "../_components/ThemeToggle";
const NavLink = (props) => {
  return (
    <Link
      href={props.link}
      onClick={() => {
        props.setIsMenuClicked(false);
      }}
      className="flex items-center justify-center group border-b py-4 border-b-zinc-700"
    >
      <div className="flex items-center flex-row justify-center gap-4 group-hover:translate-x-10 ease-in-out duration-300">
        <div className="w-5 h-5 md:w-8 md:h-8 dark:border border-2 dark:border-zinc-200 border-zinc-600 rounded-full flex items-center justify-center bg-transparent">
          <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-p1 hidden duration-300 ease-in-out group-hover:block"></div>
        </div>
        <h1 className="text-3xl md:text-5xl text-zinc-700 dark:text-zinc-200  font-playfair leading-0">
          {props.f} <i className="text-p1 font-manrope">{props.l}</i>
        </h1>
      </div>
    </Link>
  );
};

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <>
      <div className="w-full fixed backdrop-blur-sm 2xl:backdrop-blur-none  h-[8vh] max-h-[100px] md:h-[10vh] top-0 z-50 flex items-center justify-center">
        <div className="w-full px-7 lg:px-16 2xl:px-24 xl:px-16 flex flex-row justify-between items-center">
          <div className="relative w-auto h-auto  flex items-start">
            <Link
              href={"/"}
              className="hover:scale-105 duration-150 ease-in-out transition-transform"
            >
              <h1 className="font-normal  cursor-pointer text-zinc-900 dark:text-zinc-200  text-3xl md:text-6xl font-playfair -translate-y-1 leading-0">
                ma{" "}
              </h1>
            </Link>

            <div className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-p1 right-0 bottom-0 absolute -translate-y-[4px] lg:translate-x-6 translate-x-[10px] md:translate-x-2"></div>
          </div>
          <ThemeToggle />

          <MenuIcon
            onClick={() => {
              setIsMenuClicked(!isMenuClicked);
            }}
            className="text-zinc-900 dark:text-zinc-200  w-6 h-6 md:w-10 md:h-10 hover:text-p1 duration-150 cursor-pointer"
          />
        </div>
      </div>

      <div
        name="MENU"
        className={`z-[100] fixed h-screen w-screen dark:bg-[#101010a3] bg-zinc-100/80  backdrop-blur-md flex flex-col gap-4 items-center justify-center transition-all duration-500 ${
          isMenuClicked
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <NavLink
          setIsMenuClicked={setIsMenuClicked}
          f="About"
          l="Me"
          link="/#about-me"
        />
        <NavLink
          setIsMenuClicked={setIsMenuClicked}
          f="Project"
          l=""
          link="/projects"
        />
        <NavLink
          setIsMenuClicked={setIsMenuClicked}
          f="Skills"
          l=""
          link="/skills"
        />
        <NavLink
          setIsMenuClicked={setIsMenuClicked}
          f="My"
          l="Blogs"
          link="/blogs"
        />
        <NavLink
          setIsMenuClicked={setIsMenuClicked}
          f="Book"
          l="Meeting"
          link="/"
        />
        <X
          onClick={() => {
            setIsMenuClicked(!isMenuClicked);
          }}
          className="w-6 h-6 md:w-10 md:h-10 text-zinc-700 dark:text-zinc-200  cursor-pointer mt-6 duration-150 ease-in-out hover:text-p1"
        />
      </div>
    </>
  );
};

export default Navbar;
