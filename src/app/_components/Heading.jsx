import React from "react";
const formatContentForLink = (content) => {
  // Remove special characters, convert to lowercase, replace spaces with dashes
  if (content?.length < 5) {
    return content;
  }
  return content
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove special characters
    .replace(/\s+/g, "-"); // Replace spaces with dashes
};
const Heading = ({ content, primaryColor, secondaryColor, isSub = false }) => {
  const formattedLink = formatContentForLink(content);
  const primary = primaryColor || "#EC420F"; // Default to blue if not provided
  const secondary = secondaryColor || "#FFA500"; // Default to orange if not provided

  return (
    <div className="flex gap-2  md:w-auto flex-col">
      {!isSub ? (
        <div className="flex flex-col mt-9   w-auto  max-w-fit   gap-2">
          <h1
            name="heading-main"
            id={formattedLink}
            className="text-2xl md:text-3xl  leading-0  font-lato font-extrabold text-zinc-900 dark:text-zinc-200 "
          >
            {content}
          </h1>
          <div
            name="underline"
            style={{
              background: `linear-gradient(to right, ${primary}, ${secondary})`,
            }}
            className="rounded-full w-[80%] min-w-[100px] h-[4px]"
          ></div>
        </div>
      ) : (
        <h1
          name="heading-main"
          id={formattedLink}
          className="text-xl  md:text-2xl mt-5  leading-0  font-lato font-extrabold text-zinc-900 dark:text-zinc-200 "
        >
          {content}
        </h1>
      )}
    </div>
  );
};

export default Heading;
