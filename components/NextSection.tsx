import React from 'react'
import Card from './Card'


const NextSection = () => {
  const newone = [
    {'title':'Ask anything','desc':'Lets users quickly find answers to their questions without having to search through multiple sources','image':'/assets/benefits/icon-1.svg', 'card':'/assets/benefits/card-1.svg'},
    {'title':'Improve everyday','desc':'The app uses natural language processing to understand user queries and provide accurate and relevant responses','image':'/assets/benefits/icon-2.svg','card':'/assets/benefits/card-2.svg'},
    {'title':'Connect evenly','desc':'Connect with the AI chatbot from anywhere, on any device making it more accessible and convenient','image':'/assets/benefits/icon-3.svg','card':'/assets/benefits/card-3.svg'},
    {'title':'Fast responding','desc':'Lets users quickly find answers to their questions without having to search through multiple sources','image':'/assets/benefits/icon-4.svg','card':'/assets/benefits/card-4.svg'},
    {'title':'Ask anything','desc':'Lets users quickly find answers to their questions without having to search through multiple sources','image':'/assets/benefits/icon-1.svg','card':'/assets/benefits/card-5.svg'},
    {'title':'Improve everyday','desc':'The app uses natural language processing to understand user queries and provide accurate and relevant responses','image':'/assets/benefits/icon-2.svg','card':'/assets/benefits/card-6.svg'},
  ]
  return (
    <div className='items-center flex flex-col justify-center '>
        <p className='text-6xl mt-36 text-center text-white font-bold'>Chat Smarter, Not Harder <br/>with Brainwave</p>
        <div className='grid grid-cols-3 gap-5 px-16'>
          {newone.map((item) => (
            <Card card={item.card} title={item.title} desc={item.desc} image={item.image}/>
          ))} 
        </div>
    </div>
  )
}

export default NextSection