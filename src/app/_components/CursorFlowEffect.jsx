"use client";
import { useState, useEffect } from "react";

export default function CursorFollowEffect() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX + window.scrollX, // Add scrollX to get correct position
        y: event.clientY + window.scrollY, // Add scrollY to get correct position
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="bg-gradient-radial from-p1 to-orange-300 rounded-full w-[100px] -z-[100] absolute h-[100px] glow-effect"
      style={{
        left: `calc(${cursorPosition.x}px)`, // Center the div on the cursor
        top: `calc(${cursorPosition.y}px)`, // Center the div on the cursor
        transform: "translate(-50%, -50%)", // Adjust for accurate centering
      }}
    ></div>
  );
}
