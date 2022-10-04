import Link from 'next/link'
import React from 'react'

export default function HoverButton({link,text,icon}:{link:string,text:string,icon:'points'|'arrow'}) 
{
  return (
    <Link href={link} passHref>
        <a>
            <button className='bg-[white] px-[1.7rem] py-[1.5rem] flex items-center relative hoverBtn overflow-hidden'>
                <p className='text-[.95rem] relative z-[2] transition-[color] duration-300'>{text}</p>
                {
                    icon==='points'?
                    <div className='ml-[3rem] relative z-[2]'>
                        <div className='w-[10px] h-[5px] flex justify-between'>
                            <span className='h-[3.5px] w-[3.5px] rounded-[50%] bg-[black] transition-[background] duration-300'></span>
                            <span className='h-[3.5px] w-[3.5px] rounded-[50%] bg-[black] transition-[background] duration-300'></span>
                        </div>
                        <div className='w-[10px] h-[5px] flex justify-between mt-[2px]'>
                            <span className='h-[3.5px] w-[3.5px] rounded-[50%] bg-[black] transition-[background] duration-300'></span>
                            <span className='h-[3.5px] w-[3.5px] rounded-[50%] bg-[black] transition-[background] duration-300'></span>
                        </div>
                    </div>
                    :
                    null
                }                
                <div className='absolute w-[150%] rounded-t-[50%] h-[200%] bg-[#82969C] left-[-25%] z-[1] hoverBtn__div'>

                </div>
            </button>
        </a>
    </Link>
  )
}
