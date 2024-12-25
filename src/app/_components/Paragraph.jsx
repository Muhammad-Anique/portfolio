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
        index === 0 ? "mt-10" : "mt-0"
      } font-normal text-md md:text-lg xl:text-[18.5px] dark:text-zinc-300 text-zinc-800 font-lato`}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};

export default Paragraph;
