"use client";
import React, { useState } from "react";

const ProjectHeadings = ({ projectData }) => {
  const [activeLink, setActiveLink] = useState("");

  const formatContentForLink = (content) => {
    // Remove special characters, convert to lowercase, replace spaces with dashes
    return content
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "") // Remove special characters
      .replace(/\s+/g, "-"); // Replace spaces with dashes
  };

  const handleButtonClick = (link) => {
    setActiveLink(link); // Update active link immediately
    // Find the heading element by id
    const targetElement = document.getElementById(link);
    if (targetElement) {
      // Scroll the target element to 200px from the top of the viewport
      window.scrollTo({
        top: targetElement.offsetTop - 200, // Adjust 200px from top
        behavior: "smooth",
      });
    }
  };

  const filteredHeadings = projectData?.projectBody?.blocks
    .filter((block) => block.blockType === "heading") // Filter for blocks with "heading"
    .map((block, index) => {
      const link = formatContentForLink(block?.body?.content); // Format the content to generate href
      const isActive = link === activeLink; // Compare link directly with activeLink

      return (
        <li key={index} className="flex w-full flex-row gap-2 items-start">
          <button
            onClick={() => handleButtonClick(link)} // Handle button click
            className={`text-zinc-500 dark:text-zinc-200  mr-2  p-1 text-left rounded-md font-lato leading-6 ${
              isActive
                ? "text-zinc-800 dark:text-zinc-200 font-bold"
                : "text-zinc-300"
            }`}
          >
            {block?.body?.content}
          </button>
        </li>
      );
    });

  return <ul className="space-y-2 w-full ">{filteredHeadings}</ul>;
};

export default ProjectHeadings;
