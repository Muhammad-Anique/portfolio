import Image from "next/image";
import React from "react";

function truncateExcerpt(excerpt) {
  const words = excerpt.split(" "); // Split the excerpt into an array of words
  if (words.length > 20) {
    return words.slice(0, 16).join(" ") + "... read more"; // Get first 20 words and append 'Read more'
  }
  return excerpt; // Return the full excerpt if it's less than or equal to 20 words
}
const BlogCard = (props) => {
  const blog = props.blog;
  console.log("PRP : ", props);
  return (
    <div
      name="blog-card"
      className="max-w-[350px] md:w-[500px] w-full backdrop-blur-sm   h-auto group cursor-pointer p-3 relative"
    >
      <div className="h-full w-full -z-20 bg-gradient-to-b group-hover:rotate-0 ease-in-out duration-200   from-[#1d1d1d89] to-[#00000052] rotate-2 absolute -translate-x-3 -translate-y-3"></div>
      <div className="h-full w-full  z-[50] p-5 mb-2 md:p-0 flex md:mt-3 flex-col  ">
        <h1 className="text-zinc-200 text-center font-playfair text-4xl md:text-[32px]">
          {blog?.blogTitle}
        </h1>
        <p className="text-sm px-3 text-center w-full md:text-[15px] font-lato  text-zinc-400 mt-5 md:mt-8">
          {truncateExcerpt(blog?.blogExcerpt)}
        </p>
        <div className="relative overflow-hidden rounded-lg min-w-[250px] min-h-[200px] w-full h-full mt-10">
          <Image
            src={blog?.blogFeatureImage}
            alt={blog?.blogFeatureAlt}
            fill
            objectFit="cover"
          />
        </div>
      </div>

      {/* <div className=" hover:-rotate-12 transition-transform scale-75 md:scale-75 w-[110px] h-[110px] group-hover:scale-105 group-hover:rotate-2 duration-200 ease-in-out rounded-full border-2 border-dashed bg-black border-[#58585889] flex items-center justify-center absolute bottom-0 right-0 z-10 translate-x-8  md:translate-x-12 translate-y-8 md:translate-y-12 ">
          <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-b from-p1 via-p2 to-p3 flex items-center justify-center">
            <ChevronRight className="text-zinc-200 w-10 h-10" />
          </div>
        </div> */}
    </div>
  );
};

export default BlogCard;
