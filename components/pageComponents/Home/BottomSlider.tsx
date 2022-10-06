import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import Arrow from '../../Arrow';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HoverButton from '../../HoverButton';

export default function BottomSlider() 
{  
    const ButtonsContainer = useRef<HTMLDivElement>(null);
    const SliderPrevButton = useRef<HTMLButtonElement>(null) as React.MutableRefObject<HTMLButtonElement>;
    const SliderNextButton = useRef<HTMLButtonElement>(null) as React.MutableRefObject<HTMLButtonElement>;

    const [mobile,setMobile] = useState(false);

    useEffect(()=>{
        
        if(window.innerWidth<=768) setMobile(true);
        else setMobile(false);
        
        window.addEventListener('resize',()=>{
            if(window.innerWidth<=768) setMobile(true);
            else setMobile(false);
        })
    },[])
  
    return (
    <div className='pb-[3rem]'>
        <p className='pl-[5%] text-[#202020] opacity-[.5]'>Collection</p>
        <div className='px-[5%] flex justify-between'>
            <h2 className='text-[clamp(2.5rem,5vw,5vmax)] uppercase'>wallpapers</h2>
            <div ref={ButtonsContainer} className='flex gap-[1rem]'>

            </div>
        </div>
        <div className='mt-[1.3rem]'>
            <Carousel
                centerMode={true}
                centerSlidePercentage={mobile ? 70 : 39}
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
        <HoverButton link='/' text='See more' icon='points' style='ml-[5%] mt-[3rem] border border-[#cdcdcd] transition-[border] duration-300 hover:border-[transparent]'/>
    </div>
  )
}


function SliderItem({image,title,desc}:{image:string,title:string,desc:string}) 
{
    return(
        <div className='w-[70vw] md:w-[40vmax] pl-[5vmax] overflow-hidden'>
            <div className='w-[100%] h-[80vw] md:h-[45vw] overflow-hidden'>
                <div className='relative w-[100%] h-[80vw] md:h-[45vw] transition-transform duration-500 hover:scale-[1.1]'>
                    <Image
                        src={image}
                        alt=''
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
            </div>
            <h3 className='mt-[1.4rem] text-[1.5rem] text-left'>{title}</h3>
            <p className='text-[.9rem] mt-[.4rem] text-[#202020] opacity-[.5] text-left'>{desc}</p>
        </div>
    )
}

function ButtonPrev({ButtonsContainer,SliderPrevButton,clickHandler}:{ButtonsContainer:React.RefObject<HTMLDivElement>,SliderPrevButton:React.MutableRefObject<HTMLButtonElement>,clickHandler:()=>void}) {
    return (
        <>
            {
                ButtonsContainer.current ?
                ReactDOM.createPortal(
                    <>
                        <button 
                                className='hidden md:flex h-[3.7rem] w-[3.7rem] rounded-[50%] border border-[#a9a9a96c] overflow-hidden slider_btn slider_btn-w justify-center items-center relative'
                                ref={SliderPrevButton}
                                onClick={clickHandler}
                            >
                                <Arrow color='black' style={'rotate-[-90deg]'}/>
                                <div className='absolute z-[1] h-[100%] w-[100%] bg-[#82969C] rounded-t-[50%]'></div>
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

function ButtonNext({ButtonsContainer,SliderNextButton,clickHandler}:{ButtonsContainer:React.RefObject<HTMLDivElement>,SliderNextButton:React.MutableRefObject<HTMLButtonElement>,clickHandler:()=>void}) {
    return (
        <>
            {
                ButtonsContainer.current ?
                ReactDOM.createPortal(
                    <>
                        <button 
                                className='hidden md:flex h-[3.7rem] w-[3.7rem] rounded-[50%] border border-[#a9a9a96c] overflow-hidden slider_btn slider_btn-w justify-center items-center relative'
                                ref={SliderNextButton}
                                onClick={clickHandler}
                            >
                                <Arrow color='black' style={'rotate-[90deg]'}/>
                                <div className='absolute z-[1] h-[100%] w-[100%] bg-[#82969C] rounded-t-[50%]'></div>
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