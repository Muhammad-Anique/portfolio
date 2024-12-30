"use client";
import { SparkleIcon } from "lucide-react";
import { useState } from "react";

const BlogHeadings = ({ blogData }) => {
  const [activeLink, setActiveLink] = useState("");

  const formatContentForLink = (content) => {
    if (!content || content.length < 5) {
      return content;
    }
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

  const filteredHeadings = blogData?.blogBody?.blocks
    .filter((block) => block.blockType === "heading") // Filter for blocks with "heading"
    .map((block, index) => {
      const link = formatContentForLink(block?.body?.content); // Format the content to generate href
      const isActive = link === activeLink; // Compare link directly with activeLink

      return (
        <li key={index} className="flex flex-row items-start">
          <button
            onClick={() => handleButtonClick(link)} // Handle button click
            style={{
              marginLeft: block?.body?.isSub && "26px",
              fontSize: block?.body?.isSub && "15px",
              marginTop: block?.body?.isSub ? "2px" : "4px",
            }}
            className={`text-p1 dark:text-zinc-200 flex items-start gap-3  mr-2 backdrop-blur-md p-1 text-left rounded-md font-manrope leading-6 ${
              isActive
                ? "text-p1 font-bold underline underline-offset-4"
                : "dark:text-zinc-600 text-zinc-600"
            }`}
          >
            {!block?.body?.isSub && (
              <div className="w-3 h-3 leading-6 mt-[6px]">
                <SparkleIcon className="w-3 h-3 " />{" "}
              </div>
            )}
            {block?.body?.content}
          </button>
        </li>
      );
    });

  return (
    <ul className="space-y-2  xl:max-w-[190px] 2xl:max-w-[230px]">
      {filteredHeadings}
    </ul>
  );
};

export default BlogHeadings;
