import React, { useEffect, useRef } from 'react'
import HoverButton from '../../HoverButton'
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SecondSectionCaroussel from './SecondSectionCaroussel'

export default function SecondSection() {
  
  const SliderPrevButton = useRef<HTMLButtonElement>(null) as React.MutableRefObject<HTMLButtonElement>;
  const SliderNextButton = useRef<HTMLButtonElement>(null) as React.MutableRefObject<HTMLButtonElement>;
  
  
  const SliderButtonContainer = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null) as React.MutableRefObject<HTMLButtonElement>;

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    if(!titleRef.current) return;
    
    gsap.fromTo(titleRef.current.querySelectorAll('span')[0],{
      yPercent:100,
    },{
      yPercent:0,
      scrollTrigger:{
        trigger:titleRef.current.querySelectorAll('span')[0],
        start:'top '+window.innerHeight*0.9
      }
    })
    
    gsap.fromTo(titleRef.current.querySelectorAll('span')[1],{
      yPercent:100,
    },{
      yPercent:0,
      scrollTrigger:{
        trigger:titleRef.current.querySelectorAll('span')[1],
        start:'top '+window.innerHeight*0.9
      }
    })

    gsap.fromTo(buttonRef.current,{
      yPercent:50,
      opacity:0
    },{
      yPercent:0,
      opacity:1,
      scrollTrigger:{
        trigger:buttonRef.current,
        start:'top '+window.innerHeight*0.9
      }
    })

  },[]);

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
          <h2 className='text-[clamp(2rem,5vw,5vmax)]' ref={titleRef}>
            <div className='overflow-hidden'>
              <span className='leading-[clamp(2.5rem,5.4vw,5.4vmax)] block'>OUR SHOWROOMS</span>
            </div>
            <div className='overflow-hidden'>
              <span className='leading-[clamp(2.5rem,5.4vw,5.4vmax)] block noto font-[300]'>IN CRACOW</span>
            </div>
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
          <HoverButton 
            link='/contact'
            style='bg-[transparent] bthBlackArrow border border-[#cdcdcd]' 
            text='See more' 
            icon='arrow' 
            arrowStyle='rotate-[90deg] ml-[2rem]'
            buttonRef={buttonRef}
          />
        </div>
      </div>      
    </div>
  )
}


