import React from 'react'
import FIlterHeader from '../../Components/FIlterHeader'
import { MOVIES } from '../../Data/Datas'

const Hero = () => {
  return (
    <div className='lg:px-24 flex flex-col px-5 my-6'>
      <FIlterHeader />
      
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4    items-center justify-center lg:gap-10 my-[10px] '>

        {MOVIES.map((item, index) => (
          <div
            key={index}
            className='flex lg:flex-col items-center justify-center w-[100%] lg:h-[400px] gap-2 lg:w-[100%] px-3 py-3 rounded-xl '
          >
            <div className='flex bg-stone-600 h-[200px]  rounded-xl w-full'></div>

            <div className='flex flex-wrap gap-3 w-full items-center justify-center   '>
              <h1 className='text-2xl text-stone-300 text-left my-1'>
                {item.name}
              </h1>
              <button className='bg-[#CF0807] hover:bg-[#EF5454] duration-300 ease-out py-2 w-[100%] text-stone-300 text-lg rounded-md '>
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
