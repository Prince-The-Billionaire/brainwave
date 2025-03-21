import React from 'react'
import Image from 'next/image'

const Benefits = () => {
  return (
    <div className='flex mt-24 gap-16 flex-col justify-center  items-center'>
        <h1 className='text-5xl'>Generative AI made for creators </h1>
        <p className='text-white/30'>Brainwave unlocks the potential of AI-powered applications</p>
        <div className='border-2 mb-7 border-white/15  rounded-2xl p-2 flex flex-row justify-center'>
            <img src={'/assets/services/service-1.png'} alt='service' className=' w-[40rem] object-contain object-top ' />
            <div className='flex flex-col pr-10 mt-10 justity-center gap-8'>
                <h1 className='text-4xl'>Smartest AI</h1>
                <p className='text-white/25'>Brainwave unlocks the potential
                    of AI-powered applications
                </p>
                <div className='h-0.5 bg-white/10'/>
                <div className='flex flex-row items-center gap-8'>
                    <Image src={'/assets/check.svg'} alt='check' width={20} height={20}/>
                    <p className='text-xl text-white/75'>Photo Generatin</p>
                </div>

                <div className='h-0.5 bg-white/10'/>
                <div className='flex flex-row items-center gap-8'>
                    <Image src={'/assets/check.svg'} alt='check' width={20} height={20}/>
                    <p className='text-xl text-white/75'>Photo Enhance</p>
                </div>

                <div className='h-0.5 bg-white/10'/>
                <div className='flex flex-row items-center gap-8'>
                    <Image src={'/assets/check.svg'} alt='check' width={20} height={20}/>
                    <p className='text-xl text-white/75'>Seamless Integration</p>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2'>
            <div className='relative'>
                <img  src={'/assets/services/service-2.png'} alt='service' className='w-[40rem] absolute'/>
                <div>
                    <p>Hey Brainwave, enhance this photo</p>
                </div>
                <div className='flex gap-5 flex-col '>
                    <p>Photo editing</p>
                    <p>Automatically enhance your photos using our AI app's photo 
                        editing feature. Try it now
                    </p>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Benefits