import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import Hero from '../pageComponents/Home/Hero'
import HoverMenu from '../pageComponents/Home/HoverMenu'
import FirstSection from '../pageComponents/Home/FirstSection'
import SecondSection from '../pageComponents/Home/SecondSection'
import ThirdSection from '../pageComponents/Home/ThirdSection'
import FourthSection from '../pageComponents/Home/FourthSection'

export default function Home() {
  
  
  return (
    <>
      <Hero/>
      <div className='relative z-[2] bg-[white]'>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
      </div>
    </>
  )
}



