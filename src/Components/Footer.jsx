import React from 'react'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'
import { FooterIcon } from '../assets/Icons/Index'

const Footer = () => {
  return (
    <div className='lg:px-24 flex mt-24 flex-col items-center justify-center   px-4'>
      <div className='flex flex-wrap gap-10 items-center my-5 justify-between w-full'>
        <div className='flex flex-col '>
          <img src={FooterIcon} alt='' width={100} />
          <p className='text-stone-300 w-[150px] text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>

        <div className='flex gap-20'>
          <div className='flex gap-20'>
            <div className='flex flex-col'>
              <h1 className='text-stone-300 font-bold'>Quick Links</h1>
              <ul className='text-stone-400 '>
                <li className='mt-4 text-sm cursor-pointer hover:text-stone-300'>
                  Home
                </li>
                <li className='mt-4 text-sm cursor-pointer hover:text-stone-300'>
                  Sport
                </li>
                <li className='mt-4 text-sm cursor-pointer hover:text-stone-300'>
                  Celebrities
                </li>
                <li className='mt-4 text-sm cursor-pointer hover:text-stone-300'>
                  Lifestyle
                </li>
                <li className='mt-4 text-sm cursor-pointer hover:text-stone-300'>
                  Health (GHIR)
                </li>
                <li className='mt-4 text-sm cursor-pointer hover:text-stone-300'>
                  Politics
                </li>
              </ul>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-stone-300 font-bold'>Resources</h1>
              <ul className='text-stone-400 '>
                <li className='mt-4 text-sm cursor-pointer hover:text-stone-300'>
                  Privacy Policy
                </li>
                <li className='mt-4 text-sm cursor-pointer hover:text-stone-300'>
                  Terms & Conditions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className=' w-full  flex-col items-center justify-center '>
        <div className='flex flex-wrap  items-center justify-between w-full  px-3 border-t-[2px] border-t-stone-300] py-7'>
          <p className='text-stone-400 text-center w-full lg:w-[50%] lg:text-left'>
            © 2020 Your Company, Inc. All rights reserved.
          </p>
          <div className='flex items-center justify-center w-full lg:w-[50%] lg:justify-end gap-5'>
            <FaFacebook className='text-stone-400 text-3xl cursor-pointer' />
            <FaInstagram className='text-stone-400 text-3xl cursor-pointer' />
            <FaTwitter className='text-stone-400 text-3xl cursor-pointer' />
            <FaGithub className='text-stone-400 text-3xl cursor-pointer' />
            <FaYoutube className='text-stone-400 text-3xl cursor-pointer' />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
