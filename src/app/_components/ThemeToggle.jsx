"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "../_context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const handleCheckboxChange = () => {
    toggleTheme();
  };

  return (
    <div className="bg-zinc-300/80 backdrop-blur-sm  dark:bg-zinc-700 rounded-full">
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox hidden"
        checked={theme === "dark"}
        onChange={handleCheckboxChange}
      />
      <label
        htmlFor="checkbox"
        className="checkbox-label flex items-center gap-2 cursor-pointer"
      >
        <SunIcon className={`text-zinc-500  dark:text-zinc-200  `} />
        <MoonIcon className={`text-zinc-500   dark:text-zinc-200 `} />

        <span className="ball w-4 h-4 bg-zinc-100 rounded-full dark:bg-zinc-200 transition-transform transform dark:translate-x-6"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
