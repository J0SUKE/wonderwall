import React, { useContext } from 'react'
import styled from 'styled-components'
import { globalrefscontext } from '../contenxt/globalRefs'
import Footer from './Footer'
import Header from './Header'
import ScrollWrapper from './ScrollWrapper'

export default function Layout({children}:{children:React.ReactNode}) {

    const Globalrefs = useContext(globalrefscontext);

    if(!Globalrefs) return null;
    const {contentRef} = Globalrefs;
  
    return (
    <div>
        <Header/>
        <ScrollWrapper>
            <div 
                className='relative z-[3] h-[200vh]' 
                ref={contentRef  as React.MutableRefObject<HTMLDivElement>}
            >
                {children}
            </div>
            <Footer/>
        </ScrollWrapper>
    </div>
  )
}
