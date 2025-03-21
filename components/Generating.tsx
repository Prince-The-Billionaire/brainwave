import React from 'react'
import Image from 'next/image'

const Generating = () => {
  return (
    <div className='bg-black/50 p-3  flex flex-row rounded-full absolute bottom-8 left-[20%] w-[45vw] items-center gap-5'>
        <Image src={'/assets/loading.png'} alt="loading" width={50} height={50} />
        <p className='opacity-50 text-xl'>AI is generating</p>
    </div>
  )
}

export default Generating