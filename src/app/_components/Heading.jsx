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
    <h1
      id={formattedLink}
      className="text-2xl md:text-3xl mt-12 ml:mt-20  font-lato font-extrabold text-zinc-200"
    >
      {content}
    </h1>
  );
};

export default Heading;
