import React from 'react'
import { NavLink } from 'react-router-dom'

const FIlterHeader = () => {
  return (
    <div className='lg:px-24 flex flex-col px-1 my-1'>
      <div className='flex flex-wrap overflow-x-scroll'>
        <ul className='flex lg:gap-7 gap-10 '>
          <li className='text-stone-300 cursor-pointer w-[60px] border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
           <NavLink to="/category" className={({isActive}) => isActive ? "text-[#CF0807] border-b-[2px] border-b-[#CF0807] " : " "}> For You</NavLink>
          </li>
          <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
            <NavLink to='/movies' className={({isActive}) => isActive ? "text-[#CF0807] border-b-[2px] border-b-[#CF0807] " : " "}>Movies</NavLink>
          </li>
          <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
           <NavLink to="/sport" className={({isActive}) => isActive ? "text-[#CF0807] border-b-[2px] border-b-[#CF0807] " : " "}>Sport</NavLink>
          </li>
          <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
            <NavLink to="/hollywood" className={({isActive}) => isActive ? "text-[#CF0807] border-b-[2px] border-b-[#CF0807] " : " "}>HollyWood</NavLink>
          </li>
          <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
            <NavLink to="/Cate_lifestyle" className={({isActive}) => isActive ? "text-[#CF0807] border-b-[2px] border-b-[#CF0807] " : " "}>LifeStyle</NavLink>
          </li>
          <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
            <NavLink to="/fashion" className={({isActive}) => isActive ? "text-[#CF0807] border-b-[2px] border-b-[#CF0807] " : " "}>Fashion</NavLink>
          </li>
          <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
          <NavLink to="/health" className={({isActive}) => isActive ? "text-[#CF0807] border-b-[2px] border-b-[#CF0807] " : " "}>Health(GHIR)</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FIlterHeader
