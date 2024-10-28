import React from 'react'
import { FaRegClock } from 'react-icons/fa'

import { author } from '../../assets/Images'
import { HERO } from '../../Data/Datas'
import { Link } from 'react-router-dom'


const News = ({headline}) => {
  return (
    <div className='lg:px-24 flex flex-col px-5'>
      <h2 className='my-5 text-center t text-4xl text-stone-300'>
        {headline}
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  items-center justify-center gap-12 mt-[50px] '>
        {HERO.map((item, index) => (
          <div className='flex flex-col w-[100%] lg:w-[100%] '>
            <div className='flex bg-stone-600 h-[200px] items-center justify-center rounded-xl w-full'></div>
            <h1 className='text-lg text-stone-300'>{item.name}</h1>
            <p className='text-sm text-stone-300'>{item.title}</p>
          
            <div className='gap-2 xl:gap-5'>
            <Link to="/article" className='bg-[#CF0807] hover:bg-[#EF5454] duration-300 text-slate-300 py-2 px-4 rounded-md '>
              See All
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
