import React from 'react'
import { Link } from 'react-router-dom'

const FIlterHeader = () => {
  return (
    <div className='lg:px-24 flex flex-col px-4 my-1'>
      <div className='flex flex-wrap overflow-x-scroll'>
        <ul className='flex lg:gap-7 gap-10 '>
          <li className='text-stone-300 cursor-pointer w-[60px] border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
           <Link to="/"> For You</Link>
          </li>
          <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
            <Link to='/movies'>Movies</Link>
          </li>
          <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
           <Link to="/sport">Sport</Link>
          </li>
          <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
            <Link to="/hollywood">HollyWood</Link>
          </li>
          <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
            <Link to="/lifestyle">LifeStyle</Link>
          </li>
          <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
            Fashion
          </li>
          <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
            Health(GHIR)
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FIlterHeader
