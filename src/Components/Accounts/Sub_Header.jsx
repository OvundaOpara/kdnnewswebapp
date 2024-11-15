import React from 'react'
import { NavLink } from 'react-router-dom'

const Sub_Header = () => {
  return (
    <div className=' flex flex-col px-1 my-1'>
      <div className='flex flex-wrap w-full gap-[24px]'>
        <ul className='flex gap-[56px] '>
          <li className='text-primary cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
            <NavLink
              to='/account_setting'
              className={({ isActive }) =>
                isActive
                  ? 'text-[#CF0807] border-b-[2px] border-b-[#CF0807] '
                  : ' '
              }
            >
              {' '}
              Setting
            </NavLink>
          </li>
      
        
        </ul>
      </div>
    </div>
  )
}

export default Sub_Header
