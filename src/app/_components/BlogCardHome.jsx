import { ChevronRight } from 'lucide-react';
import React from 'react';
const BlogCardHome = () => {
    return (
        <div
        name="blog-card"
        className="max-w-[500px] md:h-[500px] md:w-[500px] w-full  h-auto group cursor-pointer p-3 relative"
      >
        <div className="h-full w-full -z-0 border border-zinc-500 absolute -translate-x-3 -translate-y-3"></div>
        <div className="h-full w-full -z-20 bg-gradient-to-b group-hover:rotate-0 ease-in-out duration-200    from-[#1d1d1d89] to-[#00000052] rotate-6 absolute -translate-x-3 -translate-y-3"></div>
        <div className="h-full w-full  z-[50] p-5 mb-10 md:p-10 flex md:mt-10 flex-col  ">
          <h1 className="text-zinc-200 font-playfair text-4xl md:text-5xl">
            nderstanding-rag-models
          </h1>
          <p className="text-sm w-full md:text-lg font-manrope font-light text-zinc-400 mt-5 md:mt-8">
          Discover the concept and working of Retrieval-Augmented Generation (RAG) models and how they improve text generation by integrating external knowledge bases
          </p>
       
        </div>
  
        <div className=" hover:-rotate-12 transition-transform scale-75 md:scale-100 w-[110px] h-[110px] group-hover:scale-105 group-hover:rotate-2 duration-200 ease-in-out rounded-full border-2 border-dashed bg-black border-[#58585889] flex items-center justify-center absolute bottom-0 right-0 z-10 translate-x-8  md:translate-x-12 translate-y-8 md:translate-y-12 ">
          <div className="w-[80px] h-[80px] rounded-full bg-gradient-to-b from-p1 via-p2 to-p3 flex items-center justify-center">
            <ChevronRight className="text-zinc-200 w-10 h-10" />
          </div>
        </div>
      </div>
    );
}

export default BlogCardHome;
