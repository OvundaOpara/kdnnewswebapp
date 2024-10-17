import React from 'react'
import FIlterHeader from '../../Components/FIlterHeader'
import { SPORT } from '../../Data/Datas'

const Hero = () => {
  return (
    <div className='lg:px-24 flex flex-col px-9 py-10'>
      <FIlterHeader />

      <div className='flex flex-wrap items-center justify-center lg:gap-10 my-[10px] '>
        {SPORT.map((item, index) => (
          <div
            key={index}
            className='flex lg:flex-col items-center justify-center w-[100%] lg:h-[400px] gap-2 lg:w-[22.5%] px-3 py-3 rounded-xl '
          >
            <div className='flex bg-stone-600 h-[200px]  rounded-xl w-full'></div>

            <div className='flex flex-wrap gap-3 w-full items-center justify-center   '>
              <h1 className='text-2xl text-stone-300 text-left my-1'>
                {item.name}
              </h1>
              <button className='bg-[#CF0807] py-2 w-[100%] text-stone-300 text-lg rounded-md '>
                Explore{' '}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
