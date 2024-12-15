import { ChevronLeftIcon,  ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';


const NextAndPrevSuggestions = () => {
    const next  = 1
    const prev= 1
    return (
        <div className={`w-full h-auto flex-wrap ${!next? 'items-start' : 'justify-between'} ${!prev? 'items-end' : 'justify-between'} flex items-center`}>
            {prev && <div className='flex flex-col gap-2 '>
            <div className='w-[180px] h-[80px] relative rounded-xl overflow-hidden'>
                <Image
                src="/orange-bg.jpg"
                alt="Suggestion"
              
                fill
                objectFit='cover'
                />
            </div>
            <i className='max-w-[200px] text-zinc-400 text-xl mt-2 font-medium font-lato'>How to handle development ? </i>
            <ChevronLeftIcon className='w-10 h-10 text-zinc-300'/>
            </div>}




               {next && <div className='flex flex-col items-end gap-2 '>
            <div className='w-[180px] h-[80px] relative rounded-xl overflow-hidden'>
                <Image
                src="/orange-bg.jpg"
                alt="Suggestion"
              
                fill
                objectFit='cover'
                />
            </div>
            <i className='max-w-[200px] text-right text-zinc-400 text-xl mt-2 font-medium font-lato'>How to handle development ? </i>
            <ChevronRightIcon className='w-10 h-10 text-zinc-300'/>
            </div>}
        </div>
    );
}

export default NextAndPrevSuggestions;
