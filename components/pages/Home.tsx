import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import Hero from '../pageComponents/Home/Hero'
import FirstSection from '../pageComponents/Home/FirstSection'
import SecondSection from '../pageComponents/Home/SecondSection'
import ThirdSection from '../pageComponents/Home/ThirdSection'
import FourthSection from '../pageComponents/Home/FourthSection'
import BottomSlider from '../pageComponents/Home/BottomSlider';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function Home() {

  const BlueZone = useRef<HTMLDivElement>(null)
  
  return (
    <>
      <Hero/>
      <div className='relative z-[2] bg-[white]'>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <div ref={BlueZone}>
          <BottomSlider/>
        </div>
      </div>
    </>
  )
}



