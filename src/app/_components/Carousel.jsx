"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden">
      <div className="relative flex items-center justify-center h-64">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <Image
              src={items[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="w-full h-full object-cover rounded-md"
              fill
              objectFit="cover"
              sizes="500px"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={handlePrev}
          className="bg-zinc-900 dark:bg-zinc-200/70 p-2 rounded-full shadow-md hover:bg-zinc-900 dark:bg-zinc-200 transition"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-zinc-900 dark:bg-zinc-200/70 p-2 rounded-full shadow-md hover:bg-zinc-900 dark:bg-zinc-200 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
