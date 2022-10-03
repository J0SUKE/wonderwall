import Image from 'next/image'
import React from 'react'
import HoverButton from '../../HoverButton'

export default function Hero() {
  return (
    <div className='h-[100vh] relative z-[1] overflow-hidden' data-speed='1'>
        <div className='absolute w-[100%] h-[100%] top-0 left-0' data-speed="0.7">
            <Image
                alt=''
                src={'/images/hero-image01.jpg'}
                layout={'fill'}
                objectFit={'cover'}
            />
        </div>
        <div className='absolute z-2 bg-[black] opacity-[.35] w-[100%] h-[100%] top-0 left-0'></div>
        <div className='absolute z-3 w-[100%] h-[100%] top-0 left-0 pl-[20%] pr-[2%] flex flex-col justify-end'>
            <div>
                <h1 className='text-[white] text-[clamp(2.6rem,7vw,7vmax)] leading-[clamp(2.6rem,6.8vw,6.8vmax)] pb-[clamp(2rem,3vw,3vmax)]'>
                    <span className='block uppercase'>wallpapers</span>
                    <span className='block uppercase'>that <span className='text-[clamp(2.3rem,6.3vw,6.3vmax)] noto'>inspire</span></span>
                </h1>
                <HoverButton link='catalog' text='Go to catalog' icon='points'/>
            </div>
            <div className='pb-[clamp(2rem,3vw,3vmax)] pt-[clamp(3rem,6vw,6vmax)] flex justify-between items-center'>
                <ul className='flex text-[white] gap-[2rem] text-[.9rem]'>
                    <a 
                        href="https://www.facebook.com/WonderWallStudio" 
                        target={'_blank'} 
                        rel="noreferrer"
                        className='hoverLink'
                    >Facebook</a>
                    <a 
                        href="https://www.instagram.com/wonderwall_mural/" 
                        target={'_blank'} 
                        rel="noreferrer"
                        className='hoverLink'
                    >Instragram</a>
                </ul>
                <p 
                    className='text-[white] text-[clamp(2rem,5vw,5vmax)] flex items-end gap-[clamp(1rem,1vw,1vmax)]'
                >
                    <span className='noto text-[clamp(2rem,4.7vw,4.7vmax)]'>1</span>
                <span className='w-[clamp(1.5rem,3.5vw,3.5vmax)] h-[clamp(3px,.3vw,.3vmax)] bg-[white] block mb-[clamp(1rem,2vw,2vmax)]'></span>
                4</p>
            </div>
        </div>
    </div>
  )
}
