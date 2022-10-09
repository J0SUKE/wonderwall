import Image from 'next/image';
import React, { useContext, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import Arrow from '../../Arrow';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HoverButton from '../../HoverButton';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { log } from 'console';
import { colorcontext } from '../../pages/Home';

export default function BottomSlider({BlueZone}:{BlueZone:React.RefObject<HTMLDivElement>}) 
{  
    const ButtonsContainer = useRef<HTMLDivElement>(null);
    const SliderPrevButton = useRef<HTMLButtonElement>(null) as React.MutableRefObject<HTMLButtonElement>;
    const SliderNextButton = useRef<HTMLButtonElement>(null) as React.MutableRefObject<HTMLButtonElement>;

    //const [mobile,setMobile] = useState(false);
    const ColorContenxt = useContext(colorcontext);


    // useEffect(()=>{
        
    //     if(window.innerWidth<=768) setMobile(true);
    //     else setMobile(false);
        
    //     window.addEventListener('resize',()=>{
    //         if(window.innerWidth<=768) setMobile(true);
    //         else setMobile(false);
    //     })
    // },[])    

    if(!ColorContenxt) return null;
    const {white} = ColorContenxt;

    return (
    <div className='pb-[3rem]'>
        <p className={`pl-[5%] transition-[color] duration-300 ${white ? 'text-[#202020] opacity-[.5]' : 'text-[#dfdfdf] opacity-[1]'}`}>Collection</p>
        <div className='px-[5%] flex justify-between'>
            <h2 
                className={`text-[clamp(2.5rem,5vw,5vmax)] transition-[color] duration-300  uppercase ${white ? 'text-[black]' : 'text-[white]'}`}>wallpapers</h2>
            
            <div ref={ButtonsContainer} className='flex gap-[1rem]'></div>
        </div>
        <div className='hidden md:block mt-[1.3rem]'>
            <Carousel
                centerMode={true}
                centerSlidePercentage={39}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                emulateTouch={true}
                renderArrowPrev={(clickHandler: () => void) => <ButtonPrev
                    ButtonsContainer={ButtonsContainer}
                    SliderPrevButton={SliderPrevButton}
                    clickHandler={clickHandler}
                />}
                renderArrowNext={(clickHandler: () => void) => <ButtonNext
                    ButtonsContainer={ButtonsContainer}
                    SliderNextButton={SliderNextButton}
                    clickHandler={clickHandler}
                />}
            >
                <SliderItem image='/images/Whirlpool.jpg' title='Whirlpool' desc='310 PLN per m'/>
                <SliderItem image='/images/Ambre.jpg' title='Ambre' desc='310 PLN per m'/>
                <SliderItem image='/images/Airon-1.jpg' title='Ambre' desc='310 PLN per m'/>
                <SliderItem image='/images/Volare.jpg' title='Volare' desc='310 PLN per m'/>
                <SliderItem image='/images/Fereldan.jpg' title='Fereldan' desc='310 PLN per m'/>
                <SliderItem image='/images/Terre.jpg' title='Terre' desc='310 PLN per m'/>
            </Carousel>            
        </div>
        <MobileCaroussel 
            ButtonsContainer={ButtonsContainer} 
            SliderPrevButton={SliderPrevButton} 
            SliderNextButton={SliderNextButton}
        />
        <HoverButton 
            link='/' 
            text='See more' 
            icon='points' 
            style={`ml-[5%] mt-[3rem] border ${white ? 'border-[#cdcdcd]' : 'border-[#cdcdcd65]'} transition-[border] duration-300 hover:border-[transparent]`}
            white={white}
        />
    </div>
  )
}



function MobileCaroussel({ButtonsContainer,SliderPrevButton,SliderNextButton}:{ButtonsContainer:React.RefObject<HTMLDivElement>,SliderPrevButton:React.MutableRefObject<HTMLButtonElement>,SliderNextButton:React.MutableRefObject<HTMLButtonElement>}) {
    return (
        <div className='block md:hidden mt-[1.3rem]'>
            <Carousel
                centerMode={true}
                centerSlidePercentage={79}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                emulateTouch={true}
                showArrows={false}
            >
                <SliderItem image='/images/Whirlpool.jpg' title='Whirlpool' desc='310 PLN per m'/>
                <SliderItem image='/images/Ambre.jpg' title='Ambre' desc='310 PLN per m'/>
                <SliderItem image='/images/Airon-1.jpg' title='Ambre' desc='310 PLN per m'/>
                <SliderItem image='/images/Volare.jpg' title='Volare' desc='310 PLN per m'/>
                <SliderItem image='/images/Fereldan.jpg' title='Fereldan' desc='310 PLN per m'/>
                <SliderItem image='/images/Terre.jpg' title='Terre' desc='310 PLN per m'/>
            </Carousel>            
        </div>
    )   
}


function SliderItem({image,title,desc}:{image:string,title:string,desc:string}) 
{
    const ColorContenxt = useContext(colorcontext);
    
    if(!ColorContenxt) return null;
    const {white} = ColorContenxt;
    
    return(
        <div className='w-[70vw] md:w-[40vmax] pl-[5vmax] overflow-hidden'>
            <div className='w-[100%] h-[80vw] md:h-[45vw] overflow-hidden'>
                <div className='relative w-[100%] h-[80vw] md:h-[45vw] transition-transform duration-500 hover:scale-[1.1]'>
                    <Image
                        src={image}
                        alt=''
                        layout='fill'
                        objectFit='cover'
                        priority={true}
                    />
                </div>
            </div>
            <h3 className={`mt-[1.4rem] text-[1.5rem] text-left ${white ? 'text-[black]' : 'text-[white]'}`}>{title}</h3>
            <p className={`text-[.9rem] mt-[.4rem] text-left 
                ${white ? 'text-[#202020] opacity-[.5]' : 'text-[#dfdfdf] opacity-[1]'}`}
            >{desc}</p>
        </div>
    )
}

function ButtonPrev({ButtonsContainer,SliderPrevButton,clickHandler}:{ButtonsContainer:React.RefObject<HTMLDivElement>,SliderPrevButton:React.MutableRefObject<HTMLButtonElement>,clickHandler:()=>void,}) {

    const ColorContenxt = useContext(colorcontext);
    
    if(!ColorContenxt) return null;
    const {white} = ColorContenxt;

    return (
        <>
            {
                ButtonsContainer.current ?
                ReactDOM.createPortal(
                    <>
                        <button 
                                className={`hidden md:flex h-[3.7rem] w-[3.7rem] transition-all duration-300 rounded-[50%] border ${white ? 'border-[#a9a9a96c] slider_btn slider_btn-w' : 'border-[#e5e5e570] slider_btn'} overflow-hidden  justify-center items-center relative`}
                                ref={SliderPrevButton}
                                onClick={clickHandler}
                            >
                                <Arrow color={white ? 'black':'white'} style={'rotate-[-90deg]'}/>
                                <div className={`absolute z-[1] h-[100%] w-[100%] ${white ? "bg-[#82969C]" : "bg-[white]"} rounded-t-[50%]`}></div>
                        </button>
                    </>,
                    ButtonsContainer.current as HTMLDivElement
                )
                :
                null
            }
        </>
    )   
}

function ButtonNext({ButtonsContainer,SliderNextButton,clickHandler}:{ButtonsContainer:React.RefObject<HTMLDivElement>,SliderNextButton:React.MutableRefObject<HTMLButtonElement>,clickHandler:()=>void,}) {
    
    const ColorContenxt = useContext(colorcontext);
    
    if(!ColorContenxt) return null;
    const {white} = ColorContenxt;
    
    return (
        <>
            {
                ButtonsContainer.current ?
                ReactDOM.createPortal(
                    <>
                        <button 
                                className={`hidden md:flex h-[3.7rem] w-[3.7rem] transition-all duration-300 rounded-[50%] border ${white ? 'border-[#a9a9a96c] slider_btn slider_btn-w' : 'border-[#e5e5e570] slider_btn'} overflow-hidden  justify-center items-center relative`}
                                ref={SliderNextButton}
                                onClick={clickHandler}
                            >
                                <Arrow color={white ? 'black':'white'} style={'rotate-[90deg]'}/>
                                <div className={`absolute z-[1] h-[100%] w-[100%] ${white ? "bg-[#82969C]" : "bg-[white]"} rounded-t-[50%]`}></div>
                        </button>
                    </>,
                    ButtonsContainer.current as HTMLDivElement
                )
                :
                null
            }
        </>
    )   
}