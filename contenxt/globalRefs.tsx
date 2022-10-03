import React, { Children, useRef } from 'react'

export const globalrefscontext = React.createContext<null | {[refname:string]:React.MutableRefObject<HTMLElement>}>(null);

export default function GlobalRefs({children}:{children:React.ReactNode}) {
  
    const scrollwrapper = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
    const scrollcontent = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
    const contentRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>;
  
    return (
    <globalrefscontext.Provider value={{scrollwrapper,scrollcontent,contentRef}}>
        {children}
    </globalrefscontext.Provider>
  )
}
