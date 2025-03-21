import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex bg-transparent py-2 px-6 flex-row items-center sticky top-0 left-0 justify-between'>
        <Image
            src={'/assets/brainwave.svg'}
            alt='logo'
            width={150}
            height={150}
        />
            <p className='nav-text'>FEATURES</p>
            <p className='nav-text'>PRICING</p>
            <p className='nav-text'>HOW TO USE</p>
            <p className='nav-text'>ROADMAP</p>
        <div className='flex flex-row gap-4'>
            <button className='opacity-20 '>
                NEW ACCOUNT
            </button>
            <div className='button-container'>
            <button className='text-white/60 button bg-black px-2 '>
                SIGN IN
            </button>
            </div>
        </div>
        <Image
            src={'/assets/file-02.svg'}
            alt='menu'
            width={25}
            height={25}
            className='clip-button lg:hidden'
        />
    </div>
  )
}

export default Navbar