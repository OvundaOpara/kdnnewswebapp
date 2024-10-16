import React from 'react'
import { FooterIcon } from '../../../assets/Icons/Index'

const Subscribe = () => {
  return (
    <div className='lg:px-24 flex my-20 flex-col items-center justify-center   px-4'>
      <div className='flex flex-col lg:w-[50%] w-[450px]  items-center justify-center text-center'>
        <h2 className=' text-center t text-4xl text-stone-300'>
          Stay Informed
        </h2>
        <p className='my-3 text-lg text-stone-300'>
          Subscribe to our newsletter for the latest news and exclusive content
          delivered straight to your inbox."
        </p>
      </div>

      <div className='flex items-center justify-center gap-3 lg:w-[50%] w-[400px] my-3 '>
        <input
          type='text '
          className='w-full bg-stone-400 py-3 px-2 text-lg rounded-xl outline-none'
        />
        <button className='bg-[#CF0807] py-3 px-6 text-stone-300 text-lg rounded-lg '>
          Subscribe{' '}
        </button>
      </div>

      
    </div>
  )
}

export default Subscribe
