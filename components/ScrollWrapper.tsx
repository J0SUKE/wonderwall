import React, { useContext, useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollSmoother from 'gsap/dist/ScrollSmoother';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { globalrefscontext } from '../contenxt/globalRefs';
import {scrollcontext} from '../contenxt/scrollcontext';
import styled from 'styled-components';

export default function ScrollWrapper({children}:{children:React.ReactNode}) {
    
    const Globalrefs = useContext(globalrefscontext);
    const ScrollContext = useContext(scrollcontext);
    
    useEffect(()=>{
          
        gsap.registerPlugin(ScrollTrigger,ScrollSmoother);
        
        smoother.current = ScrollSmoother.create({
            wrapper:scrollwrapper.current,
            content:scrollcontent.current,
            smooth: 1,
            effects: true,
            normalizeScroll:true,
            smoothTouch:0.1,
          });

          return ()=>smoother.current.kill();
    },[]);  

    if(!Globalrefs) return null;
    const {scrollwrapper,scrollcontent} = Globalrefs;

    if(!ScrollContext) return null;
    const {smoother} = ScrollContext;
  
    return (
    <div id="smooth-wrapper" ref={scrollwrapper as React.MutableRefObject<HTMLDivElement>} className='absolute'>
        <div id="smooth-content" ref={scrollcontent as React.MutableRefObject<HTMLDivElement>}>
            {children}
        </div>
    </div>
  )
}
