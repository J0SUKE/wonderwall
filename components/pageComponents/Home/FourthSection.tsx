import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import HoverButton from '../../HoverButton'
import InfoBlock from '../../InfoBlock'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function FourthSection() {
  
    const title = useRef<HTMLHeadingElement>(null);
    const paragraph = useRef<HTMLParagraphElement>(null);
    const List = useRef<HTMLUListElement>(null);
    const Button = useRef<HTMLButtonElement>(null) as React.MutableRefObject<HTMLButtonElement>;
    const InfoBlockRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
    

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        if(!List.current) return;

        gsap.fromTo(title.current,{opacity:0,yPercent:100},{opacity:1,yPercent:0,scrollTrigger:{
            trigger:title.current,
            start:'bottom '+window.innerHeight*0.9
        }})
        
        gsap.fromTo(paragraph.current,{opacity:0,yPercent:100},{opacity:1,yPercent:0,scrollTrigger:{
            trigger:paragraph.current,
            start:'top bottom'
        }})
        
        List.current.querySelectorAll('li').forEach((item:HTMLLIElement)=>{
            gsap.fromTo(item,{opacity:0,yPercent:100},{opacity:1,yPercent:0,scrollTrigger:{
                trigger:item,
                start:'top '+window.innerHeight*0.9
            }})
        })


        gsap.fromTo(Button.current,{opacity:0,yPercent:100},{opacity:1,yPercent:0,scrollTrigger:{
            trigger:Button.current,
            start:'top '+window.innerHeight*0.9
        }})  
        
        gsap.fromTo(InfoBlockRef.current,{opacity:0,yPercent:100},{opacity:1,yPercent:0,scrollTrigger:{
            trigger:InfoBlockRef.current,
            start:'top bottom'
        }})  


    },[]);
  
    return (
    <div className='md:flex justify-between mt-[2rem] pl-[2%] pr-[2%] md:pr-0 lg:pl-[4%] pb-[6rem]'>
        <div className='relative z-[1] w-[100%] md:w-[45%] lg:w-[40%]'>
            <h2 ref={title} className='text-[#202020] opacity-[.5]'>About our wallpapers</h2>
            <p ref={paragraph} className='text-[.95rem] mt-[2rem] text-[#202020]'>Our wallpapers are a world of hand painted or drawn designs. Each graphic contains not only carefully worked out details and impressive colors, but also a huge amount of artistic work and enthusiasm for creation. We want to bring the world of art to your interiors.</p>
            <ul ref={List} className='grid grid-cols-2 grid-rows-2 items-end mt-[2.5rem] gap-[2rem]'>
                <li>
                    <p>The best quality</p>
                    <span className='block h-[1px] w-[100%] bg-[lightgray] mt-[1rem]'></span>
                </li>
                <li>
                    <p>Wallpapers on individual size</p>
                    <span className='block h-[1px] w-[100%] bg-[lightgray] mt-[1rem]'></span>
                </li>
                <li>
                    <p>Eco-friendly products</p>
                    <span className='block h-[1px] w-[100%] bg-[lightgray] mt-[1rem]'></span>
                </li>
                <li>
                    <p>The advanced technology</p>
                    <span className='block h-[1px] w-[100%] bg-[lightgray] mt-[1rem]'></span>
                </li>
            </ul>
            <div className='mt-[3rem]'>
                <HoverButton 
                    link='/about' 
                    text='Find out more' 
                    icon='arrow' 
                    style='bthBlackArrow transition-[border] duration-300 hover:border-[transparent] border border-[#cdcdcd]' 
                    arrowStyle='rotate-[90deg] ml-[2rem]'
                    buttonRef={Button}
                />

            </div>
            <InfoBlock 
                text='Order a free sample set and experience the quality of our products.'
                link='/'
                style='mt-[3.5rem] hidden md:block w-[100%] lg:w-[80%]'
                infoBlockRef={InfoBlockRef}
            />
        </div>
        <div className='relative mt-[3rem] md:mt-0 h-[100vw] md:h-[auto] z-[2] w-[100%] md:w-[50%]'>
            <div className='absolute w-[100%] h-[100%] overflow-hidden'>
                <div className="relative top-0 left-0 bottom-0 right-0 w-[100%] h-[120%]" data-speed="auto">
                    <Image
                        alt={''}
                        src={'/images/wallpapper-bg@2x.jpg'}
                        layout={'fill'}
                        priority={true}
                    />
                </div>
            </div>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] h-[100%]">
                <Image
                    alt={''}
                    src={'/images/wallpapper-letter.svg'}
                    layout={'fill'}
                    objectFit={'contain'}
                    priority={true}
                />
            </div>
            <div className="absolute bottom-0 left-0 md:left-[-10%] w-[100%] md:w-[110%] h-[100%]">
                <img className='absolute bottom-0 object-contain' src="/images/wallpapper-girl@2x.png" alt="" />
            </div>
        </div>
        <InfoBlock 
            text='Order a free sample set and experience the quality of our products.'
            link='/'
            style='mt-[3rem] block md:hidden w-[100%]'
        />
    </div>
  )
}
