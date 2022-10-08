import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import HoverButton from '../../HoverButton';

export default function HoverMenu() {
  
  const buttonRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(buttonRef.current,
      {
        yPercent:50,
        opacity:0
      },
      {
        scrollTrigger:{
          trigger:buttonRef.current,
          start:'top '+window.innerHeight*0.8,
        },
        yPercent:0,
        opacity:1
      })

  },[]) 
  
  return (
    <div className='w-[65%] hidden md:block'>
      <ul className='relative z-[2] flex flex-col gap-[1.6rem]'>
        <HoverMenuItem link={'/'} image={'/images/home_tapety.jpg'} value={'wallpapers'} index={'01'} number={'200+'}/>
        <HoverMenuItem link={'/'} image={'/images/home_farby.jpg'} value={'paints'} index={'02'} number={'500+'}/>
        <HoverMenuItem link={'/'} image={'/images/home_zywice.jpg'} value={'Glue / Resin'} index={'03'} number={'3'}/>
        <HoverMenuItem link={'/'} image={'/images/outlet_small.jpg'} value={'Outlet'} index={'04'} number={'3'}/>
      </ul>
      <div className='inline-block relative z-[1] mt-[3rem]' ref={buttonRef}>
        <HoverButton link='/' text='Collection' icon='points' style='border border-[#cdcdcd] transition-[border] duration-300 hover:border-[transparent]'/>
      </div>
    </div>
  )
}

function HoverMenuItem({link,index,value,number,image}:{index:string,value:string,number:string,image:string,link:string}) 
{
  
  const itemRef = useRef<HTMLAnchorElement>(null);
  const hoverImg = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    if(!itemRef.current) return;

    gsap.fromTo(itemRef.current,
    {
      yPercent:100,
      opacity:0,
    },
    {
      yPercent:0,
      opacity:1,
      duration:1,
      scrollTrigger:{
        trigger:itemRef.current,
        start:'top '+window.innerHeight*0.8
      }
    })
    
    gsap.fromTo(itemRef.current.querySelector('.line'),
    {
      scaleX:0,
    },
    {
      scaleX:1,
      duration:1,
      delay:.3,
      scrollTrigger:{
        trigger:itemRef.current,
        start:'top '+window.innerHeight*0.8
      }
    })

  },[])
  
  useEffect(()=>{
    
    let mouseposition = {
      x:0,
      y:0
    }
    
    window.addEventListener('mousemove',(e)=>{
      
      if(!itemRef.current || !hoverImg.current) return;
      
      mouseposition.x = e.clientX - itemRef.current.offsetLeft - hoverImg.current.getBoundingClientRect().width;
    })


    itemRef.current?.addEventListener('mousemove',(e)=>{
      
      mouseposition.y = e.offsetY;      
    })

    function followsMosue() {
      
      gsap.to(hoverImg.current,{
        x:mouseposition.x,
        y:mouseposition.y,
      })
      
      requestAnimationFrame(followsMosue); 
    }

    followsMosue();

  },[])

  return (
    <li>
      <Link href={link} passHref>
        <a className='flex py-[1.3rem] items-end hoverItem relative' ref={itemRef}>
          <div 
            className='absolute z-[2] bottom-0 w-[10vw] h-[0vw] transition-[height] duration-500 overflow-hidden hover-img pointer-events-none'
            ref={hoverImg}
          >
              <div className='relative w-[100%] h-[13vw] pointer-events-none'>
                <Image
                  alt={''}
                  src={image}
                  layout={'fill'}
                />
              </div>
          </div>
          <p className='text-[#7f7f7f] text-[.9rem] transition-[color] duration-300 pointer-events-none'>{index}</p>
          <div className='relative flex justify-between items-end w-[100%] pointer-events-none'>
            <h2 className='text-[2.8rem] leading-[2.5rem] capitalize ml-[2rem]'>{value}</h2>
            <p className='text-[#7f7f7f] text-[.9rem] transition-opacity duration-300'>({number})</p>
            
            <span 
              className='absolute right-[0] translate-x-[-100%] transition-all duration-300  opacity-0 flex items-center gap-[.3rem] pointer-events-none text-[.9rem] leading-[.9rem] more'
            >
              More
              <span 
                className='block rotate-90 mt-[.1rem]'>
                  <Image src={'/images/arrow.svg'} alt={"arrow"} width={20} height={15}/>
                </span> 
            </span>
          
          </div>
          <span className='absolute z-[1] origin-left bottom-0 h-[1.5px] bg-[#cdcdcd] w-[100%] before:content-[""] before:absolute before:h-[100%] before:w-[100%] before:bg-[black] pointer-events-none line'></span>
        </a>
      </Link>
    </li>
  )  
}