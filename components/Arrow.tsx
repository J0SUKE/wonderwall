import React from 'react'

export default function Arrow({color,style}:{color:string,style:string}) {
    return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 476.213 476.213" className={`relative z-[2] h-[1rem] ${style}`}>
        <polygon points="308.713,70.607 238.107,0 167.5,70.607 188.713,91.82 223.107,57.427 223.107,476.213 253.107,476.213 253.107,57.427 287.5,91.82 " fill={color} className='transition-[fill] duration-300'/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
    </svg>
  
    )
  }