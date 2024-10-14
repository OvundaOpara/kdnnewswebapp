import React, { useState } from 'react'

import HeroContents from './HeroContents'
import { FaRegClock } from 'react-icons/fa'
import { HERO } from '../../../Data/Datas'
import { author } from '../../../assets/Images'

const Hero = () => {
  return (
    <div className='lg:px-24 flex flex-col px-4 my-6'>
      <HeroContents />

      <div className='flex flex-wrap items-center justify-center gap-12 mt-[50px] '>
        {HERO.map((item, index) => (
          <div className='flex flex-col w-[400px] lg:w-[22.3%] '>
            <div className='flex bg-stone-600 h-[200px] items-center justify-center rounded-xl w-full'></div>
            <h1 className='text-lg text-stone-300'>{item.name}</h1>
            <p className='text-sm text-stone-300'>{item.title}</p>
            <div className='flex items-center my-4 justify-start gap-5 '>
              <p className='text-stone-400 text-sm flex items-center gap-1 justify-center'>
                {' '}
                <FaRegClock /> 23 Sept 2024{' '}
              </p>
              <p className='text-stone-400 flex items-center text-sm gap-2'>
                {' '}
                <img
                  src={author}
                  alt=''
                  width={20}
                  className='rounded-full'
                />{' '}
                <span className='text-stone-300'>by</span> Stark{' '}
              </p>
            </div>
            <div className="flex gap-5">
                <button className='bg-[#CF0807] text-slate-300 py-2 px-4 rounded-md '>See All</button>
                <button className='border-[#CF0807] text-stone-300 border-[2px] py-2 px-4 rounded-md'>Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
