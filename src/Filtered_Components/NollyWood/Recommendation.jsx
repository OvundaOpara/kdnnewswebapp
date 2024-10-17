import React from 'react'
import { AI } from '../../Data/Datas'

const Recommendation = ({ heading }) => {
  return (
    <div className='lg:px-24 flex flex-col px-9'>
      <h2 className='my-12 text-center t text-4xl text-stone-300'>{heading}</h2>

      <div className='flex flex-wrap items-center justify-center gap-12 mt-[50px] '>
        {AI.map((item, index) => (
          <div className='flex flex-col w-[400px] lg:w-[22.3%] border-[2px] border-stone-500 px-3 py-3 rounded-xl '>
            <div className='flex bg-stone-600 h-[200px] items-center justify-center rounded-xl w-full'></div>
            <h1 className='text-lg text-stone-300'>{item.name}</h1>
            <p className='text-sm  my-4 text-stone-400'>{item.title}</p>

            <div className='flex gap-5'>
              <button className='bg-[#CF0807] py-2 px-4 text-stone-300 rounded-md '>
                Read More{' '}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recommendation
