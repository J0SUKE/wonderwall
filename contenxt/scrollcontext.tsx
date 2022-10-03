import React, { useRef } from 'react'

export const scrollcontext = React.createContext<{[smoother:string]:React.MutableRefObject<globalThis.ScrollSmoother>} | null>(null);

export default function ScrollContext({children}:{children:React.ReactNode}) {
    
    let smoother = useRef<globalThis.ScrollSmoother>(null) as React.MutableRefObject<globalThis.ScrollSmoother>;
  
    return (
    <scrollcontext.Provider value={{smoother}}>
        {children}
    </scrollcontext.Provider>
  )
}