import Benefits from '@/components/Benefits'
import Collaboration from '@/components/Collaboration'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import NextSection from '@/components/NextSection'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-x-hidden bg-black'>
      <Navbar/>
      <Hero/>
      <NextSection/>
      <Collaboration/>
      <Benefits/>
    </div>
  )
}

export default page