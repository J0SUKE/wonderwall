import React, { useContext, useRef, useState } from 'react'
import Header from './Header';
import Menu from './Menu';
import { scrollcontext } from '../contenxt/scrollcontext';
import gsap from 'gsap';
import { log } from 'console';

export default function MenuLogic() {
    
    const [headerTransparent,setHeaderTransparent] = useState(true);
    const menuRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
    const HeaderRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
    const menuIsOpen = useRef(false);

    function openMenu() {
        smoother.current.paused(true);
        menuIsOpen.current=true;
        setHeaderTransparent(true)

        const openTimeline = gsap.timeline();

        openTimeline.fromTo(menuRef.current,
        {
            x:window.innerWidth,
        },
        {   
            x:0,
            duration:.5,    
        })

        openTimeline.fromTo(menuRef.current.nextSibling,{
            x:window.innerWidth/2,
        },
        {
            x:0,
        },'<')

        openTimeline.fromTo(HeaderRef.current.querySelector('nav'),{
            x:'0vw',
        },{
            x:'-33vw',
        },'<')

        openTimeline.fromTo(menuRef.current.childNodes[1],{
            opacity:0,
            yPercent:-10
        },{
            opacity:1,
            yPercent:0
        })


        openTimeline.fromTo((menuRef.current.nextSibling as HTMLDivElement).childNodes[0],{
            height:'0vh',
        },
        {
            height:'50vh',
        },)
        openTimeline.fromTo((menuRef.current.nextSibling as HTMLDivElement).childNodes[1],{
            height:'0vh',
        },
        {
            height:'50vh',
        },'-=0.2')
        
        openTimeline.fromTo(menuRef.current.querySelector('.close-btn'),{scale:0},{
            scale:1
        },'-=0.3')

    }

    function CloseMenu() {
        if(!menuRef.current) return;
        
        const closeTimeline = gsap.timeline();

        closeTimeline.to(menuRef.current.querySelector('.close-btn'),{
            scale:0,
            duration:0.3,
        })

        closeTimeline.fromTo(menuRef.current.childNodes[1],{
            opacity:1,
            yPercent:0
        },{
            opacity:0,
            yPercent:-10
        },'<')

        closeTimeline.fromTo(menuRef.current.nextSibling,{
            x:0,
        },
        {
            x:window.innerWidth/2,
        })

        closeTimeline.fromTo(HeaderRef.current.querySelector('nav'),{
            x:'-33vw',
        },{
            x:'0vw',
        },'<')
        
        closeTimeline.fromTo(menuRef.current,{
            x:-0,
        },{
            x:window.innerWidth,
            onComplete:()=>{
                
                if(smoother.current.progress!=0) setHeaderTransparent(false);
                menuIsOpen.current=false;
                smoother.current.paused(false);
            }
        },'<')        
    }

    const ScrollContext = useContext(scrollcontext);
    if(!ScrollContext) return null;

    const {smoother} = ScrollContext;
    
    return (
        <>
            <Header 
                transparent={headerTransparent} 
                setTransparent={setHeaderTransparent}
                openMenu={openMenu}
                closeMenu={CloseMenu}
                HeaderRef={HeaderRef}
                menuIsOpen={menuIsOpen}
            />
            <Menu
                menuRef={menuRef}
                CloseMenu={CloseMenu}
            />
        </>
    )
}
