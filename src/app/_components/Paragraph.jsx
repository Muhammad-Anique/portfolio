import React from "react";

const Paragraph = ({ content, index }) => {
  // Function to parse and replace patterns with HTML elements
  // Split the content into words, take the first letter of the first word
  console.log("index", index);
  // const firstWord = content.split(" ")[0]; // The first word
  // const restOfContent = content.slice(firstWord.length); // The rest of the content

  return (
    <p
      className={` ${
        index === 0 ? "mt-10" : "mt-0 md:mt-3"
      } font-normal text-md md:text-lg dark:text-zinc-400 text-zinc-700 font-lato`}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};

export default Paragraph;
