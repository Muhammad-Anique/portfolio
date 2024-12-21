import React from "react";

const Paragraph = ({ content }) => {
  return (
    <p className="font-normal text-md md:text-lg mt-2  dark:text-zinc-400 text-zinc-700 font-lato ">
      {content}
    </p>
  );
};

export default Paragraph;
