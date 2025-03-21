import React from 'react'
import Image from 'next/image'
const Collaboration = () => {
    const apps  = [
        {'name':'figma','src':'/assets/collaboration/figma.png'},
        {'name':'slack','src':'/assets/collaboration/slack.png'},
        {'name':'discord','src':'/assets/collaboration/discord.png'},
        {'name':'framer','src':'/assets/collaboration/framer.png'},
        {'name':'photoshop','src':'/assets/collaboration/photoshop.png'},
        {'name':'notion','src':'/assets/collaboration/notion.png'},
        {'name':'raindrop','src':'/assets/collaboration/raindrop.png'},
        {'name':'protopie','src':'/assets/collaboration/protopie.png'},
    ]
  return (
   <div className='mt-24 px-24 flex flex-row justify-between'>
     <div className=' flex flex-col gap-8  w-[32rem]'>
        <h1 className='text-white tracking-wider text-6xl font-bold'>AI chat app for seamless collaboration </h1>
        <div className='flex flex-col gap-4 w-[20rem]'>
            <div className='flex flex-row items-center gap-8'>
                <Image src={'/assets/check.svg'} alt='check' width={20} height={20}/>
                <p className='text-xl text-white/75'>Seamless Integration</p>
            </div>
            <p className='text-white/50 text-wrap'>With smart automation and top-notch security, it&apos;s the perfect solution for teams 
                looking to work smarter
            </p>
        </div>
        <div className='flex flex-row items-center gap-8'>
                <Image src={'/assets/check.svg'} alt='check' width={20} height={20}/>
                <p className='text-xl text-white/75'>Smart Automation</p>
        </div>
        <div className='flex flex-row items-center gap-8'>
            <Image src={'/assets/check.svg'} alt='check' width={20} height={20}/>
            <p className='text-xl text-white/75'>Top-notch Security</p>
        </div>
    </div>
    <div className='w-[32rem]'>
        <p className='text-white/50'>With smart automation and top-notch security, it&apos;s the perfect solution for 
            teams looking to work smarter
        </p>
        <div className='relative mt-36'>
            <div className='p-24 border bg-white/3 border-white/15 inset-shadow-white shadow-md  rounded-full w-fit'>
                <div className='p-12 border border-white/15 w-fit rounded-full'>
                    <div className='w-fit p-4 rounded-full border border-white/50'>
                        <Image src={'/assets/brainwave-symbol.svg'} alt='brainwave' width={50} height={50} />
                    </div>
                </div>
            </div>
            <div className="absolute top-0 w-[370px] h-[370px] flex justify-center items-center">
                {apps.map((item, index) => (
                    <div
                    key={index}
                    className="absolute"
                    style={{
                        transform: `rotate(${index * (360 / apps.length)}deg) translate(180px) rotate(-${index * (360 / apps.length)}deg)`,
                    }}
                    >
                    <Image src={item.src} alt={item.name} width={60} height={60} className="border rounded-xl p-2 border-white/10" />
                    </div>
                ))}
            </div>
        </div>
    </div>
   </div>
  )
}

export default Collaboration