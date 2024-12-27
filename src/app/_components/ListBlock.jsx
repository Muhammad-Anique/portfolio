import { SparkleIcon } from "lucide-react";
import React from "react";

const ListBlock = (props) => {
  console.log("List", props);
  const type = props.type;
  const elements = props.elements;
  const secondary = props?.secondaryColor || "#EC420F";
  // const noCol = props.noCols;
  if (type == "ol")
    return (
      <div className="w-full ">
        <ol className="gap-2 flex flex-col ">
          {elements.map((element, index) => (
            <li
              key={index}
              className="text-zinc-900 dark:text-zinc-200  text-md md:text-xl bg-gradient-to-r px-3 py-2 dark:from-zinc-800/40 from-zinc-200/40 to-zinc-100/20 dark:to-zinc-900/35 font-lato "
            >
              <span className="font-bold">{index + 1}.</span>{" "}
              <span className="ml-2">{element}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  else if (type === "ul")
    return (
      <div className="w-full">
        <ul className="gap-2 flex flex-col  ">
          {elements.map((element, index) => (
            <li
              key={index}
              className="bg-gradient-to-r  dark:from-zinc-800/40 from-zinc-200/40 to-zinc-100/20 dark:to-zinc-900/35  px-3 py-2 flex flex-row items-center gap-3  "
            >
              <div className="w-4 h-4">
                <SparkleIcon
                  style={{
                    color: secondary,
                  }}
                  className="w-4 h-4 text-p1 dark:text-zinc-200"
                />
              </div>

              <p className="text-zinc-900 dark:text-zinc-200    text-md md:text-lg  font-lato ">
                {element}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  else if (type === "cards")
    return (
      <div className="w-full">
        <ul className="gap-4 flex flex-row flex-wrap w-full items-center justify-center  ">
          {elements.map((element, index) => (
            <li
              key={index}
              className="text-zinc-900 dark:text-zinc-200  max-w-[300px] h-auto min-h-[300px]  sm:max-w-[320px] sm:min-h-[320px] rounded-2xl  w-full text-lg md:text-xl bg-gradient-to-r px-5 py-2 backdrop-blur-md  from-zinc-800/60 to to-zinc-900/55 flex items-center justify-center text-center font-lato "
            >
              {element}
            </li>
          ))}
        </ul>
      </div>
    );
  else if (type === "columns") {
    return (
      <div className="w-full">
        <ul
          className={`gap-4 flex flex-row flex-wrap w-full items-center justify-center  `}
        >
          {elements.map((element, index) =>
            index !== elements.length - 1 ? (
              <li
                key={index}
                className="text-zinc-900 dark:text-zinc-200  border-r border-r-zinc-200 max-w-[300px] h-auto min-h-[300px] sm:max-w-[320px] sm:min-h-[320px] w-full text-lg md:text-xl bg-gradient-to-r px-5 py-2 flex items-center justify-center text-center font-lato"
              >
                {element}
              </li>
            ) : (
              <li
                key={index}
                className="text-zinc-900 dark:text-zinc-200   max-w-[300px] h-auto min-h-[300px] sm:max-w-[320px] sm:min-h-[320px] w-full text-lg md:text-xl bg-gradient-to-r px-5 py-2 flex items-center justify-center text-center font-lato"
              >
                {element}
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
};

export default ListBlock;
