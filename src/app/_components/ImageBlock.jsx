import Image from "next/image";
import React from "react";

const ImageBlock = ({ src, alt }) => {
  return (
    <div className="w-full h-auto  relative mt-5 rounded-xl overflow-hidden">
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={16} // Example aspect ratio, adjust accordingly
        height={9} // Example aspect ratio, adjust accordingly
        className="rounded-lg"
        priority
      />
    </div>
  );
};

export default ImageBlock;
