import React from "react";
const formatContentForLink = (content) => {
  // Remove special characters, convert to lowercase, replace spaces with dashes
  return content
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove special characters
    .replace(/\s+/g, "-"); // Replace spaces with dashes
};
const Heading = ({ content }) => {
  const formattedLink = formatContentForLink(content);

  return (
    <div className="flex gap-2 mt-9  md:w-auto flex-col">
      <div className="flex flex-row  w-auto items-center gap-2">
        <h1
          id={formattedLink}
          className="text-2xl md:text-3xl  leading-0  font-lato font-extrabold text-zinc-900 dark:text-zinc-200 "
        >
          {content}
        </h1>
      </div>

      <div className="rounded-full w-[30%] min-w-[100px] max-w-[140px]  h-[4px] bg-gradient-to-r from-p1 to-orange-400 "></div>
    </div>
  );
};

export default Heading;
