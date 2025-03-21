import React from 'react'
import Image from 'next/image'

const Notification = () => {
  return (
    <div className='glassmorphism rounded-xl gap-5 w-fit p-2 justify-between absolute top-[30%] -right-[20%]'>
        <Image className='rounded-xl' src={'/assets/notification/image-1.png'} alt='main' width={80} height={80}/>
        <div className='flex flex-col justify center pt-2'>
            <p className='font-bold text-xl'>Code generation</p>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row -space-x-1'>
                    <Image className='rounded-full' src={'/assets/notification/image-2.png'} alt='profile' width={30} height={30}/>
                    <Image className='rounded-full' src={'/assets/notification/image-3.png'} alt='profile' width={30} height={30}/>
                    <Image className='rounded-full' src={'/assets/notification/image-4.png'} alt='profile' width={30} height={30}/>
                </div>
                <p className='text-white/25'>1 min ago</p>
            </div>
        </div>
    </div>
  )
}

export default Notification