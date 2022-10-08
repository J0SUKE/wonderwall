import Image from 'next/image';
import React, { useContext, useEffect, useRef, useState } from 'react'
import Logo from './Logo';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { globalrefscontext } from '../contenxt/globalRefs';
import Link from 'next/link';

export default function Header({transparent,setTransparent,openMenu,closeMenu,HeaderRef,menuIsOpen}:{transparent:boolean,setTransparent:React.Dispatch<React.SetStateAction<boolean>>,openMenu:()=>void,closeMenu:()=>void,HeaderRef:React.MutableRefObject<HTMLDivElement>,menuIsOpen:React.MutableRefObject<boolean>}) {
    
    const Globalrefs = useContext(globalrefscontext);
    const hamburger = useRef<HTMLDivElement>(null);

    useEffect(()=>{
            
      gsap.registerPlugin(ScrollTrigger);

      let anima = gsap.fromTo(HeaderRef.current,{
        yPercent:0,
      },{  
        scrollTrigger:{
          trigger:contentRef.current,
          start:"10 top",  
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
          <nav className='hidden mr-[4rem] lg:flex gap-[2rem] text-[.9rem]'>
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
          
          <button 
            className='hidden lg:flex flex-col justify-between h-[10px] w-[20px] bg-[transparent] outline-none'
            onClick={openMenu}
          >
            <span className={`block rounded-[1px] h-[2px] w-[100%] ${transparent? "bg-[white]":"bg-black"}`}></span>
            <span className={`block rounded-[1px] h-[2px] w-[100%] ${transparent? "bg-[white]":"bg-black"}`}></span>
          </button>
          <button
            onClick={()=>{
              hamburger.current?.classList.toggle('is-active');
              if(!menuIsOpen.current) openMenu();
              else closeMenu();
            }}
            className='flex lg:hidden justify-center items-center h-[2.5rem] w-[2.5rem] bg-[white] rounded-[50%] p-[1rem]'
          >
            <div 
              className='hamburger hamburger--spin scale-[.5]'
              ref={hamburger}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </div>
          </button>          
        </div>
      </div>
    </header>;
}
