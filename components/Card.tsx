"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'


interface props{
    title:String,
    desc:String,
    image:string | StaticImport,
    card:string
}
const Card = ({title,desc,image,card}:props) => {
    const [opacity, setopacity] = useState(false)

    const handlemouseover = () => {
        setopacity(true)
    }

    const handleleave = () => {
        setopacity(false)
    }
  return (
    <div onMouseEnter={handlemouseover} onMouseLeave={handleleave} className=' h-[20rem] w-[20rem] relative  mt-5   rounded-xl '>
        <img className={` object-contain ${opacity ? 'opacity-25':'opacity-0'} rounded-2xl absolute w-[25rem] z-5`} src={'/assets/benefits/image-2.png'} alt='test' />
        <img className={` object-contain  rounded-2xl absolute w-[25rem] z-5`} src={card} alt='test' />
        <div className="p-6 pb-12 flex flex-col justify-between h-[20rem]">
            <h1 className='text-xl z-10 text-white/85'>{title}</h1>
            <p className='text-white/45 z-10'>
                {desc}
            </p>
            <div className='flex z-10 mt-5 flex-row justify-between items-center'>
                <Image src={image} alt='icon-1' width={50} height={50}/>
                <div className='flex flex-row gap-4 items-center'>
                    <p>Explore more</p>
                    <BsArrow90DegLeft color='white' size={15}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card