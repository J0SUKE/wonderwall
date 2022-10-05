import React, { useRef } from 'react'
import HoverButton from '../../HoverButton'
import Arrow from '../../Arrow'
import SecondSectionCaroussel from './SecondSectionCaroussel'

export default function SecondSection() {
  
  const SliderPrevButton = useRef<HTMLButtonElement>(null) as React.MutableRefObject<HTMLButtonElement>;
  const SliderNextButton = useRef<HTMLButtonElement>(null) as React.MutableRefObject<HTMLButtonElement>;
  
  
  const SliderButtonContainer = useRef<HTMLDivElement>(null);

  return (
    <div className='relative pb-[4rem]'>
      <div className='absolute z-[1] top-0 left-0 w-[100%] md:w-[64%] h-[100%] bg-[#f4f1ee]'>        
      </div>
      <div className='relative z-[2]'>
        <p className='flex gap-[1rem] pt-[4.7rem] pl-[2%] md:pl-[11%] text-[.9rem] text-[#202020] opacity-[.6]'>
            <span>Bułgarska 15/LU3 st.</span>
            <span>Tetmajera 83 st.</span>
        </p>
        <div className='pl-[2%] md:pl-[11%] pr-[10%] mt-[2rem] flex justify-between items-end'>
          <h2 className='text-[clamp(2rem,5vw,5vmax)]'>
            <span className='leading-[clamp(2.5rem,5.4vw,5.4vmax)] block'>OUR SHOWROOMS</span>
            <span className='leading-[clamp(2.5rem,5.4vw,5.4vmax)] block noto font-[300]'>IN CRACOW</span>
          </h2>
          <div ref={SliderButtonContainer} className='gap-[1rem] hidden md:flex'>
          </div>        
        </div>
        <SecondSectionCaroussel 
            SliderPrevButton={SliderPrevButton} 
            SliderNextButton={SliderNextButton}
            SliderButtonContainer={SliderButtonContainer}
          />
        <div className='pl-[2vw] md:pl-[11%] mt-[2rem]'>
          <HoverButton link='/contact'style='bg-[transparent] bthBlackArrow border border-[#cdcdcd]' text='See more' icon='arrow' arrowStyle='rotate-[90deg] ml-[2rem]'/>
        </div>
      </div>      
    </div>
  )
}


