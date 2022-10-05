import React, { useEffect, useRef } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Arrow from '../../Arrow';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import { log } from 'console';
import gsap from 'gsap';

export default function SecondSectionCaroussel(
{
    SliderPrevButton,
    SliderNextButton,
    SliderButtonContainer
}:
{
    SliderPrevButton:React.MutableRefObject<HTMLButtonElement>,
    SliderNextButton:React.MutableRefObject<HTMLButtonElement>,
    SliderButtonContainer:React.RefObject<HTMLDivElement>
}) 
{
    
    const carousselContainer = useRef<HTMLDivElement>(null)
    const lastButtonClicked = useRef<string>('') as React.MutableRefObject<string>;
  
    useEffect(()=>{
        carousselContainer.current?.querySelectorAll('.caroussel-item')[1]?.classList.remove('h-[60%]');
        carousselContainer.current?.querySelectorAll('.caroussel-item')[1]?.classList.add('h-[100%]');
    },[])

    return (
    <div className='mt-[2.3rem]' ref={carousselContainer}>
        <Carousel 
            centerMode={true} 
            emulateTouch={true}
            infiniteLoop={true} 
            centerSlidePercentage={83}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            transitionTime={600}
            renderArrowPrev={
                              (clickHandler: () => void,) => <PrevButton 
                                        SliderPrevButton={SliderPrevButton} 
                                        SliderButtonContainer={SliderButtonContainer}
                                        clickHandler={clickHandler}
                                        lastButtonClicked={lastButtonClicked}
                                    />
                            }
            renderArrowNext={
                (clickHandler: () => void,) => <NextButton 
                                SliderNextButton={SliderPrevButton} 
                                SliderButtonContainer={SliderButtonContainer}
                                clickHandler={clickHandler}
                                lastButtonClicked={lastButtonClicked}
                            />   
            }
            onChange={(index: number, item: React.ReactNode)=>{
                
                if(!carousselContainer.current) return;
                
                let slidesNodes = [...carousselContainer.current.querySelectorAll('.caroussel-item')];
                slidesNodes.splice(0,1);
                slidesNodes.splice(slidesNodes.length-1,1);
                let max = slidesNodes.length-1;

                // index goes from 0 to 11
                // the last item is added at the begining and the first is added at the end
                            
                gsap.to(slidesNodes[index-1],
                {
                    height:'60%',duration:.8
                })
                
                
                gsap.to(slidesNodes[index+1],
                {
                    height:'60%',duration:.8
                })
                                                                
                
                gsap.fromTo(slidesNodes[index],
                {
                    height:'60%'
                },
                {
                    height:'100%',duration:.8
                })
                
            }}

        >
            <CarousselItem image='/images/caroussel/1.jpg'/>
            <CarousselItem image='/images/caroussel/2.jpg'/>
            <CarousselItem image='/images/caroussel/3.jpg'/>
            <CarousselItem image='/images/caroussel/4.jpg'/>
            <CarousselItem image='/images/caroussel/5.jpg'/>
            <CarousselItem image='/images/caroussel/6.jpg'/>
            <CarousselItem image='/images/caroussel/7.jpg'/>
            <CarousselItem image='/images/caroussel/8.jpg'/>
            <CarousselItem image='/images/caroussel/9.jpg'/>
            <CarousselItem image='/images/caroussel/10.jpg'/>
            <CarousselItem image='/images/caroussel/11.jpg'/>
            <CarousselItem image='/images/caroussel/12.jpg'/>
        </Carousel>
    </div>
  )
}


function CarousselItem({image,first}:{image:string,first?:boolean}) {
    return (
        <div className='w-[100%] h-[42vw] pointer-events-none px-[2rem] overflow-hidden flex justify-center items-center'>
            <div className={`w-[100%] h-[60%] overflow-hidden relative caroussel-item`}>
                
                <div className='absolute top-[50%] translate-y-[-50%] left-0 w-[100%] h-[48.4vw] pointer-events-none' data-speed="0.8">
                    <Image
                        src={image}
                        alt={''}
                        layout={'fill'}
                        className='pointer-events-none'
                        priority={true}
                    />
                </div>
            </div>
        </div>
    )
}


function PrevButton(
{
    SliderPrevButton,
    SliderButtonContainer,
    clickHandler,
    lastButtonClicked
}:
{
    SliderPrevButton:React.MutableRefObject<HTMLButtonElement>,
    SliderButtonContainer:React.RefObject<HTMLDivElement>,
    clickHandler:()=>void,
    lastButtonClicked:React.MutableRefObject<string>
}) 
{
    return SliderButtonContainer.current  ? ReactDOM.createPortal(
      <>
        <button 
                  className='h-[3.7rem] w-[3.7rem] rounded-[50%] border border-[#a9a9a96c] overflow-hidden slider_btn slider_btn-w flex justify-center items-center relative'
                  ref={SliderPrevButton}
                  onClick={()=>{
                    lastButtonClicked.current = 'prev';
                    clickHandler();
                  }}
              >
                  <Arrow color='black' style={'rotate-[-90deg]'}/>
                  <div className='absolute z-[1] h-[100%] w-[100%] bg-[#82969C] rounded-t-[50%]'></div>
        </button>
      </>
      ,SliderButtonContainer.current
    )
    :
    null
    
  }

function NextButton(
{
    SliderNextButton,
    SliderButtonContainer,
    clickHandler,
    lastButtonClicked
}:
{
    SliderNextButton:React.MutableRefObject<HTMLButtonElement>,
    SliderButtonContainer:React.RefObject<HTMLDivElement>,
    clickHandler:()=>void,
    lastButtonClicked:React.MutableRefObject<string>
}) 
{
    return SliderButtonContainer.current  ? ReactDOM.createPortal(
      <>
        <button 
            className='h-[3.7rem] w-[3.7rem] rounded-[50%] border border-[#a9a9a96c] overflow-hidden slider_btn slider_btn-w flex justify-center items-center relative'
            ref={SliderNextButton}
            onClick={()=>{
                lastButtonClicked.current = 'next';
                clickHandler();
              }}
        >
            <Arrow color='black' style={'rotate-[90deg]'}/>
            <div className='absolute z-[1] h-[100%] w-[100%] bg-[#82969C] rounded-t-[50%]'></div>
        </button>            
      </>
      ,SliderButtonContainer.current
    )
    :
    null
    
  }