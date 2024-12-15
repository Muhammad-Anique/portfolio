import React from "react";

const Paragraph = ({ content }) => {
  return (
    <p className="font-normal text-md md:text-lg mt-2 text-zinc-400 font-lato ">
      {content}
    </p>
  );
};

export default Paragraph;
