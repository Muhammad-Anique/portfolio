"use client";
import { useState} from 'react';

const BlogHeadings = ({ blogData }) => {
  const [activeLink, setActiveLink] = useState('');

  const formatContentForLink = (content) => {
    // Remove special characters, convert to lowercase, replace spaces with dashes
    return content
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")  // Remove special characters
      .replace(/\s+/g, "-");         // Replace spaces with dashes
  };

  const handleButtonClick = (link) => {
    setActiveLink(link); // Update active link immediately
    // Find the heading element by id
    const targetElement = document.getElementById(link);
    if (targetElement) {
      // Scroll the target element to 200px from the top of the viewport
      window.scrollTo({
        top: targetElement.offsetTop - 200, // Adjust 200px from top
        behavior: 'smooth',
      });
    }
  };

  const filteredHeadings = blogData?.blogBody?.blocks
    .filter(block => block.blockType === "heading") // Filter for blocks with "heading"
    .map((block, index) => {
      const link = formatContentForLink(block?.body?.content); // Format the content to generate href
      const isActive = link === activeLink; // Compare link directly with activeLink

      return (
        <li key={index} className="flex flex-row gap-2 items-start">
          <button
            onClick={() => handleButtonClick(link)} // Handle button click
            className={`text-zinc-200 mr-2 backdrop-blur-md p-1 text-left rounded-md font-manrope leading-6 ${
              isActive ? '' : 'text-zinc-600'
            }`}
          >
            {block?.body?.content}
          </button>
        </li>
      );
    });

  return <ul className="space-y-2 fixed xl:max-w-[190px] 2xl:max-w-[230px]">{filteredHeadings}</ul>;
};

export default BlogHeadings;
