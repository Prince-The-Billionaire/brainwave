"use client"
import gsap from 'gsap'
import React, { useRef } from 'react'
import IconBar from './IconBar'
import Notification from './Notification'
import Generating from './Generating'


const Hero = () => {
    const parallaxdivref = useRef<HTMLDivElement>(null)
    const handleparallax = (e:React.MouseEvent<HTMLDivElement>) => {
        if(!parallaxdivref.current) return
        const bbox = parallaxdivref.current.getBoundingClientRect()
        const centerX = bbox.left + bbox.width/2
        const centerY = bbox.top + bbox.height/2
        const deltaX =  e.clientX - centerX
        const deltaY =  e.clientY - centerY
        console.log(centerX, centerY)
        gsap.to(
            parallaxdivref.current,{
                x: `${deltaX}px`, // Use `x` instead of `translateX`
                ease: "power2.out",
                duration: 0.3, // Smooth animation
            }
        )
    }
   return (
    <div className='hero-image -mt-12 text-wrap min-h-screen overflow-x-hidden items-center p-4 pt-16 text-white flex flex-col gap-4 justify-center'>
        <div ref={parallaxdivref} className='stars w-[99vw] h-screen absolute' onMouseMove={(e) => handleparallax(e)} />
        <h1 className='text-5xl font-bold text-center'>Explore the Possibilities of AI <br/> Chatting with <span className='flex flex-col items-center'> 
            <p>Brainwave</p>
            <img src="/assets/hero/curve.png" className='w-[16rem] -mt-0.5'/>
            </span></h1>
        <p className='text-xl text-center opacity-25'>Unleash the power of AI within Braiwave Upgrade <br/>
         your productivity with Brainwave, the open AI chat app</p>
        <button className='clip-button text-black w-fit rounded p-2 px-4 bg-white mb-10'>
            Get Started
        </button>
        <div className='relative'>
            <div className='animated-border mt-4'>
                <img loading='eager' 
                src='/assets/background.jpg' 
                alt='background' 
                className='w-[64rem]  rounded-xl h-[36rem] object-cover image-object-position' />
            </div>
            <IconBar/>
            <Notification/>
            <Generating/>
        </div>
    </div>
  )
}

export default Hero