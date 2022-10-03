import Image from 'next/image';
import React, { useContext, useEffect, useRef, useState } from 'react'
import Logo from './Logo';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { globalrefscontext } from '../contenxt/globalRefs';
import Link from 'next/link';
import { log } from 'console';

export default function Header() {
    
    const HeaderRef = useRef<HTMLDivElement>(null);
    const Globalrefs = useContext(globalrefscontext);
    const [transparent,setTransparent] = useState(true);

    useEffect(()=>{
            
      gsap.registerPlugin(ScrollTrigger);

      let anima = gsap.fromTo(HeaderRef.current,{
        yPercent:0,
      },{  
        scrollTrigger:{
          trigger:contentRef.current,
          start:"200 top",  
          toggleActions:'play none none reverse',
          onUpdate:(self)=>{
            
            if(self.direction===-1 && self.progress!=0)
            {
              anima.reverse()
              setTransparent(false);
            }
            if(self.direction===1)
            {
              anima.play();
            }
            if(self.progress===0)
            {
              setTransparent(true);
            }
          }
        },
        yPercent:-100,      
      })

      

    },[]);

    if(!Globalrefs) return null;
    const {contentRef} = Globalrefs;
    
    return <header 
      className={`fixed w-[100%] z-[99] p-[2vmax] transition-[background] duration-300 ${transparent? "bg-[transparent]":"bg-[white]"}`} 
      ref={HeaderRef}
    >
      <div className='flex items-center justify-between'>
        <Logo white={transparent}/>
        <div className={`flex items-center ${transparent? "text-[white]":"text-black"}`}>
          <nav className='mr-[4rem] flex gap-[2rem] text-[.9rem]'>
            <Link href={'/login'}>
              <a className='hoverLink'>
                  Login
              </a>
            </Link>
            <Link href={'/cart'}>
              <a className='hoverLink'>
                  Cart (0)
              </a>
            </Link>
          </nav>
          
          <button className='flex flex-col justify-between h-[10px] w-[20px] bg-[transparent] outline-none'>
            <span className={`block rounded-[1px] h-[2px] w-[100%] ${transparent? "bg-[white]":"bg-black"}`}></span>
            <span className={`block rounded-[1px] h-[2px] w-[100%] ${transparent? "bg-[white]":"bg-black"}`}></span>
          </button>
        </div>
      </div>
    </header>;
}
