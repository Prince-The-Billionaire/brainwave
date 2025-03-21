import React from 'react'
import Image from 'next/image'

const IconBar = () => {
  return (
    <div className='glassmorphism absolute bottom-[15%] -left-[10%] rounded-xl gap-5'>
        <Image src={'/assets/home-smile.svg'} alt='home' width={40} height={40} className='icons'/>
        <Image src={'/assets/file-02.svg'} alt='home' width={40} height={40} className='icons'/>
        <Image src={'/assets/search-md.svg'} alt='home' width={40} height={40} className='icons'/>
        <Image src={'/assets/plus-square.svg'} alt='home' width={40} height={40} className='icons'/>
    </div>
  )
}

export default IconBar