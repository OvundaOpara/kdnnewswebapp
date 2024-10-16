import React from 'react'
import { CiImageOn } from 'react-icons/ci'

const Hero = () => {
  return (
    <div className='lg:px-24 flex flex-col px-4 my-10'>
    <div className='flex flex-wrap overflow-x-scroll'>
      <ul className='flex lg:gap-7 gap-10 '>
        <li className='text-stone-300 cursor-pointer w-[60px] border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
          For You
        </li>
        <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
          Movies
        </li>
        <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
          Sport
        </li>
        <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
          Hollywood
        </li>
        <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
          Lifestyle
        </li>
        <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
          Fashion
        </li>
        <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
          Health(GHIR)
        </li>
      </ul>
    </div>

    <div className='flex flex-wrap bg-stone-600 h-[400px] items-center justify-center rounded-xl w-[100%] lg:w-[100%]'>
      <CiImageOn className='text-white bg-stone-600 text-3xl' />
    </div>

 
  </div>
  )
}

export default Hero