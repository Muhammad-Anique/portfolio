import React from "react";

const Paragraph = ({ content, index }) => {
  return (
    <p
      className={` ${
        index === 0 ? "mt-10" : "mt-3"
      } font-normal text-md md:text-lg xl:text-[18.5px] dark:text-zinc-300 text-zinc-800 font-lato`}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};

export default Paragraph;
