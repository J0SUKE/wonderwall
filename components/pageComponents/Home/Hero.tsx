import { log } from 'console';
import Image from 'next/image'
import React, { useRef } from 'react'
import HoverButton from '../../HoverButton'
import gsap from 'gsap';

export default function Hero() {
  
  
    const sliderIndex = useRef(0) as React.MutableRefObject<number>;
    const sliderRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
    const heroTitleRef = useRef<HTMLHeadingElement>(null);
    const heroCtaButton = useRef<HTMLButtonElement>(null) as React.MutableRefObject<HTMLButtonElement>;
  
    return (
    <div className='h-[100vh] relative z-[1] overflow-hidden' data-speed='1'>
        <SliderImages sliderRef={sliderRef}/>
        <div className='absolute z-2 bg-[black] opacity-[.25] w-[100%] h-[100%] top-0 left-0'></div>
        <div className='absolute z-3 w-[100%] h-[100%] top-0 left-0 pl-[2%] lg:pl-[20%] pr-[2%] flex flex-col justify-end items-start'>
            <div className='w-[100%] flex justify-between items-end'>
                <h1 
                    className='text-[white] text-[clamp(2.6rem,7vw,7vmax)] leading-[clamp(2.6rem,6.8vw,6.8vmax)] pb-[clamp(2rem,3vw,3vmax)]'
                    ref={heroTitleRef}
                >
                    <div className='h-[clamp(2.6rem,6.8vw,6.8vmax)]'>
                        <div className='uppercase flex gap-[.15rem] overflow-hidden'>
                            {'wallpapers'.split('').map((letter:string)=>(
                                <span className='block' key={Math.random()*100}>{letter}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className='uppercase flex gap-[2rem]'>
                            <div className='flex gap-[.15rem] h-[clamp(2.6rem,6.8vw,6.8vmax)] overflow-hidden'>
                                {'that'.split('').map((letter:string)=>(
                                    <span className='block' key={Math.random()*100}>{letter}</span>
                                ))}
                            </div>
                            <div className='flex gap-[.1rem] text-[clamp(2.3rem,6.5vw,6.5vmax)] h-[clamp(2.6rem,6.8vw,6.8vmax)] overflow-hidden'>
                                {'inspire'.split('').map((letter:string)=>(
                                    <span className='block noto' key={Math.random()*100}>{letter}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </h1>
                <SliderButtons style='pb-[3rem] hidden sm:flex gap-[1rem]' sliderIndex={sliderIndex} sliderRef={sliderRef} heroTitleRef={heroTitleRef} heroCtaButton={heroCtaButton}/>
            </div>
            <HoverButton link='catalog' text='Go to catalog' icon='points' buttonRef={heroCtaButton}/>
            <div className='w-[100%] pb-[clamp(2rem,3vw,3vmax)] pt-[6rem] lg:pt-[clamp(3rem,6vw,6vmax)] flex justify-between items-center'>
                <ul className='flex text-[white] gap-[2rem] text-[.9rem]'>
                    <a 
                        href="https://www.facebook.com/WonderWallStudio" 
                        target={'_blank'} 
                        rel="noreferrer"
                        className='hoverLink'
                    >Facebook</a>
                    <a 
                        href="https://www.instagram.com/wonderwall_mural/" 
                        target={'_blank'} 
                        rel="noreferrer"
                        className='hoverLink'
                    >Instragram</a>
                </ul>
                <p 
                    className='hidden sm:flex text-[white] text-[clamp(2rem,5vw,5vmax)] items-end gap-[clamp(1rem,1vw,1vmax)]'
                >
                    <span className='noto text-[clamp(2rem,4.7vw,4.7vmax)]'>1</span>
                <span className='w-[clamp(1.5rem,3.5vw,3.5vmax)] h-[clamp(3px,.3vw,.3vmax)] bg-[white] block mb-[clamp(1rem,2vw,2vmax)]'></span>
                4</p>
                <SliderButtons style='flex gap-[1rem] sm:hidden sm:gap-[0rem]' sliderIndex={sliderIndex} sliderRef={sliderRef} heroTitleRef={heroTitleRef} heroCtaButton={heroCtaButton}/>
            </div>
        </div>
    </div>
  )
}

function SliderButtons({style,sliderRef,sliderIndex,heroTitleRef,heroCtaButton}:{style?:string,sliderRef:React.MutableRefObject<HTMLDivElement>,sliderIndex:React.MutableRefObject<number>,heroTitleRef:React.RefObject<HTMLHeadingElement>,heroCtaButton:React.MutableRefObject<HTMLButtonElement>}) {
    
    const isTransitioning = useRef(false);

    function NextSlide() {
        
        if(isTransitioning.current) return;
        
        isTransitioning.current = true;

        const slides = sliderRef.current.querySelectorAll('div');
        const max = slides.length;
        // index must go from 0 to max-1        

        const nextTimeline = gsap.timeline();

        nextTimeline.fromTo(slides[sliderIndex.current],{scale:1,},{scale:1.1,duration:.8,})

        const nextIndex = sliderIndex.current==max-1 ? 0 : sliderIndex.current+1;     
        
        slides[nextIndex].classList.add(nextIndex==0 ? 'z-[3]' : 'z-[2]');
        
        nextTimeline.fromTo(slides[nextIndex],{opacity:0,scale:1.1,},
        {
            scale:1,
            opacity:1,
            duration:1.2,
            onComplete:()=>{                
                
                slides[sliderIndex.current].classList.remove('z-[2]','z-[3]');          
                slides[nextIndex].classList.add('z-[2]');
                slides[nextIndex].classList.remove('z-[3]');
                isTransitioning.current = false;
                if(sliderIndex.current==max-1)
                sliderIndex.current=0;
                else sliderIndex.current++;                
            }
        },'<')

        if(!heroTitleRef.current) return;
        
        nextTimeline.fromTo(([...heroTitleRef.current.querySelectorAll('span')].reverse()),
        {
            yPercent:0,
        },
        {
            yPercent:100,
            stagger:.015,
            duration:.4,
            ease: "power2.in"
        },'<')

        nextTimeline.fromTo(heroCtaButton.current,
        {
            yPercent:0,
            opacity:1,
        },
        {
            yPercent:50,
            opacity:0,
        },'<')
                
        nextTimeline.to((heroTitleRef.current?.querySelectorAll('span') as NodeListOf<HTMLSpanElement>),
        {
            yPercent:0,
            stagger:.015,
            duration:.4,
            //ease: "power4.in"
        },'-=0.2')

        nextTimeline.to(heroCtaButton.current,
        {
            yPercent:0,
            opacity:1,            
        },'-=0.3')
                

    }
    
    function PreviousSlide() {
        
        if(isTransitioning.current) return;
        
        isTransitioning.current = true;
        
        const slides = sliderRef.current.querySelectorAll('div');
        const max = slides.length;
        // index must go from 0 to max-1
        
        gsap.fromTo(slides[sliderIndex.current],{scale:1,},{scale:1.1,duration:.8,})
    
        const prevIndex = sliderIndex.current==0 ? max-1 : sliderIndex.current-1;     
        
        // the current slide has index z-[2] , the previous has no index
                
        slides[prevIndex].classList.add('z-[3]');

        gsap.fromTo(slides[prevIndex],
        {
            opacity:0,
            scale:1.1,
        },
        {
            scale:1,
            opacity:1,
            duration:.8,
            onComplete:()=>{                
                
                slides[sliderIndex.current].classList.remove('z-[2]','z-[3]');
                slides[prevIndex].classList.remove('z-[3]');
                slides[prevIndex].classList.add('z-[2]');

                isTransitioning.current = false;

                if(sliderIndex.current==0)
                sliderIndex.current=max-1;
                else sliderIndex.current--;                
            }
        })
        
    }
    
    return (
        <div className={style}>
            <button 
                className='h-[3.7rem] w-[3.7rem] rounded-[50%] border border-[#a9a9a96c] overflow-hidden slider_btn flex justify-center items-center relative'
                onClick={PreviousSlide}
            >
                <Arrow color='white' style={'rotate-[-90deg]'}/>
                <div className='absolute z-[1] h-[100%] w-[100%] bg-[white] rounded-t-[50%]'></div>
            </button>
            <button 
                className='h-[3.7rem] w-[3.7rem] rounded-[50%] border border-[#a9a9a96c] overflow-hidden slider_btn flex justify-center items-center relative'
                onClick={NextSlide}
            >
                <Arrow color='white' style={'rotate-[90deg]'}/>
                <div className='absolute z-[1] h-[100%] w-[100%] bg-[white] rounded-t-[50%]'></div>
            </button>            
        </div>
    )
}

function SliderImages({sliderRef}:{sliderRef:React.MutableRefObject<HTMLDivElement>}) {
    
    
    return (
        <div ref={sliderRef} className='absolute w-[100%] h-[100%] top-0 left-0' data-speed="0.7">
            <div className='absolute z-[1] w-[100%] h-[100%] top-0 left-0'>
                <Image
                    alt=''
                    src={'/images/hero-image01.jpg'}
                    layout={'fill'}
                    objectFit={'cover'}
                    objectPosition={'center'}
                    priority={true}
                />
            </div>
            <div className='absolute w-[100%] h-[100%] top-0 left-0'>
                <Image
                    alt=''
                    src={'/images/hero-image02.jpg'}
                    layout={'fill'}
                    objectFit={'cover'}
                    objectPosition={'center'}
                    priority={true}
                />
            </div>
            <div className='absolute w-[100%] h-[100%] top-0 left-0'>
                <Image
                    alt=''
                    src={'/images/hero-image03.jpg'}
                    layout={'fill'}
                    objectFit={'cover'}
                    objectPosition={'center'}
                    priority={true}
                />
            </div>
            <div className='absolute w-[100%] h-[100%] top-0 left-0'>
                <Image
                    alt=''
                    src={'/images/hero-image04.jpg'}
                    layout={'fill'}
                    objectFit={'cover'}
                    objectPosition={'center'}
                    priority={true}
                />
            </div>            
        </div>
    )   
}


function Arrow({color,style}:{color:string,style:string}) {
    return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 476.213 476.213" className={`relative z-[2] h-[1rem] ${style}`}>
        <polygon points="308.713,70.607 238.107,0 167.5,70.607 188.713,91.82 223.107,57.427 223.107,476.213 253.107,476.213 253.107,57.427 287.5,91.82 " fill={color} className='transition-[fill] duration-300'/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
    </svg>

    )
}