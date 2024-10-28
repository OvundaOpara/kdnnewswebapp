import React from 'react'
import FIlterHeader from '../Components/FIlterHeader'
import { NavLink } from 'react-router-dom'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Account = () => {
  return (
    <div className='lg:px-24 flex flex-col px-5 xl:px-7 my-6'>
      <FIlterHeader />

      <div className='flex flex-col w-full'>
        <ul className='flex lg:gap-7 gap-10 my-5'>
          <li className='text-stone-300 cursor-pointer w-[60px] border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
            <NavLink className=' '> Overview</NavLink>
          </li>
          <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
            <NavLink className=' '>Settings</NavLink>
          </li>
          <li className='text-stone-300 cursor-pointer  border-transparent  hover:text-[#CF0807] border-b-[2px] hover:border-b-[#CF0807] '>
            <NavLink className=' '>Comments</NavLink>
          </li>
        </ul>

        <div className='flex flex-col w-full gap-6 '>
          <div className='flex items-center justify-between w-full'>
            <h1 className='text-stone-300 text-xl font-semibold'>
              Email address
            </h1>
            <p className='text-stone-300'>Tonystark76@gmail.com</p>
          </div>
          <div className='flex items-center justify-between w-full'>
            <h1 className='text-stone-300 text-xl font-semibold'>
              Username and Subdomain
            </h1>
            <p className='text-stone-300'>Tonystark76</p>
          </div>
          <div className='flex items-center justify-between w-full'>
            <h1 className='text-stone-300 text-xl flex flex-col font-semibold'>
              Profile Information{' '}
              <span className='font-light'>
                Edit your photo, name, pronouns, short bio, etc.
              </span>
            </h1>
            <p className='text-stone-300 flex items-center justify-center gap-2'>
              Tonystark{' '}
              <span>
                {' '}
                <label
                  htmlFor='pics'
                  className='bg-[#CF0807] xl:w-[70px] lg:w-[100px] w-[50px] lg:h-[70px] h-[50px] flex items-center justify-center rounded-full cursor-pointer'
                >
                  <h1 className=' text-center lg:text-3xl text-base'>T</h1>
                </label>
              </span>
            </p>
          </div>
          <div className='flex items-center justify-between w-full'>
            <h1 className='text-stone-300 flex-col flex text-xl w-[70%] font-semibold'>
              Profile design
              <span className='font-light'>
                Customize the appearance of your profile
              </span>
            </h1>
            <p className='text-stone-300 text-3xl'>
              <MdOutlineArrowOutward />
            </p>
          </div>
          <div className='flex items-center justify-between w-full'>
            <h1 className='text-stone-300 flex-col flex text-xl w-[70%] font-semibold'>
              Partner program
              <span className='font-light'>
                Upgrade to a KDN membership to redirect your profile URL
              </span>
            </h1>
            <p className='text-stone-300 text-3xl'>
              <MdOutlineArrowOutward />
            </p>
          </div>

          <hr className='border-none bg-stone-500 h-[3px] my-6' />

          <div className='flex flex-col gap-10  w-full'>
            <div className='flex   flex-col w-full'>
              <h1 className='text-xl font-semibold cursor-pointer text-[#CF0807]'>
                Deactivate account
              </h1>
              <p className='text-stone-300'>
                Deactivate will suspend your account until you sign back in
              </p>
            </div>
            <div className='flex   flex-col w-full'>
              <h1 className='text-xl font-semibold cursor-pointer text-[#CF0807]'>
                Delete Account
              </h1>
              <p className='text-stone-300'>
                Permanently delete your account and all of your content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
