import Image from 'next/image';
import React from 'react';

const ImageBlock = ({src, alt}) => {
    return (
        <div className="w-full aspect-[16/9] bg-zinc-900 relative mt-5 rounded-xl overflow-hidden">
       {<Image
          src={src}
          alt={alt}
          fill
          objectFit="cover"
          className="rounded-lg"
        />} 
      </div>
    );
}

export default ImageBlock;
