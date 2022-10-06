import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Hero from '../pageComponents/Home/Hero'
import FirstSection from '../pageComponents/Home/FirstSection'
import SecondSection from '../pageComponents/Home/SecondSection'
import ThirdSection from '../pageComponents/Home/ThirdSection'
import FourthSection from '../pageComponents/Home/FourthSection'
import BottomSlider from '../pageComponents/Home/BottomSlider';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export const colorcontext = React.createContext<{white:boolean} | null>(null);

export default function Home() {

  const BlueZone = useRef<HTMLDivElement>(null);
  const Content = useRef<HTMLDivElement>(null);
  const [white,setWhite] = useState(true);
  
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(Content.current,{
      background:'white'
    },{
      background:'#82969C',
      scrollTrigger:{
        trigger:BlueZone.current,
        start:'top center',
        toggleActions:'play none none reverse',
        onEnter:()=>{
            setWhite(false);                         
        },
        onLeaveBack:()=>{
            setWhite(true);                      
        }
      }
    })

  },[]);

  return (
    <colorcontext.Provider value={{white}}>
      <Hero/>
      <div className='relative z-[2] bg-[white]' ref={Content}>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <div ref={BlueZone}>
            <BottomSlider BlueZone={BlueZone}/>
        </div>
      </div>
    </colorcontext.Provider>
  )
}



