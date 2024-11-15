import React from 'react'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'
import { FooterIcon } from '../assets/Icons/Index'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='xl:px-[60px] lg:px-[60px] px-[20px] flex mt-24 flex-col items-center justify-center   '>
      <div className='flex flex-wrap gap-10 items-center my-5 justify-between w-full'>
        <div className='flex flex-col gap-4 '>
          <img src={FooterIcon} alt='' width={142} />
          <p className='text-stone-300 leading-[17.5px] w-[150px] text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>

        <div className='grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 place-items-center gap-20 '>
          <div className='flex gap-20'>
            <div className='flex flex-col gap-[20px]'>
              <h1 className='text-stone-300 font-bold'>Quick Links</h1>
              <ul className='text-stone-400 flex flex-col gap-[20px] '>
                <li className=' text-sm cursor-pointer hover:text-stone-300'>
                  <a href='/'>Home</a>
                </li>
                <li className=' text-sm cursor-pointer hover:text-stone-300'>
                  <a href='/sport'>Sport</a>
                </li>
                <li className=' text-sm cursor-pointer hover:text-stone-300'>
                  <a href='/hollywood'>Celebrities</a>
                </li>
                <li className=' text-sm cursor-pointer hover:text-stone-300'>
                  <a href='/lifestyle'>Lifestyle</a>
                </li>
                <li className=' text-sm cursor-pointer hover:text-stone-300'>
                  <a href='/health'>Health (GHIR)</a>
                </li>
                <li className=' text-sm cursor-pointer hover:text-stone-300'>
                  <a href='/politics'> Politics</a>
                </li>
              </ul>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-stone-300 font-bold'>Resources</h1>
              <ul className='text-stone-400 '>
                <li className='mt-3 text-sm cursor-pointer hover:text-stone-300'>
                  Privacy Policy
                </li>
                <li className='mt-3 text-sm cursor-pointer hover:text-stone-300'>
                  Terms & Conditions
                </li>
              </ul>
            </div>
          </div>
          <div className='flex gap-20'>
            <div className='flex flex-col gap-[20px]'>
              <h1 className='text-stone-300 font-bold'>Quick Links</h1>
              <ul className='text-stone-400 flex flex-col gap-[20px] '>
                <li className=' text-sm cursor-pointer hover:text-stone-300'>
                  <a href='/'>Contact Us</a>
                </li>
                <li className=' text-sm cursor-pointer hover:text-stone-300'>
                  <a href='/sport'>Advertise</a>
                </li>
                <li className=' text-sm cursor-pointer hover:text-stone-300'>
                  <a href='/hollywood'>Your Ad Choices</a>
                </li>
                <Link to="/FAQ" className=' text-sm cursor-pointer hover:text-stone-300'>
                  <a href='/lifestyle'>Help</a>
                </Link>
                <li className=' text-sm cursor-pointer hover:text-stone-300'>
                  <a href='/health'>Subscription</a>
                </li>
                <li className=' text-sm cursor-pointer hover:text-stone-300'>
                  <a href='/politics'> Politics</a>
                </li>
              </ul>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-stone-300 font-bold'>Resources</h1>
              <ul className='text-stone-400 '>
                <li className='mt-3 text-sm cursor-pointer hover:text-stone-300'>
                  Privacy Policy
                </li>
                <li className='mt-3 text-sm cursor-pointer hover:text-stone-300'>
                  Terms & Conditions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className=' w-full  flex-col items-center justify-center '>
        <div className='flex flex-wrap  items-center justify-between w-full   border-t-[2px] border-t-stone-300] py-7'>
          <p className='text-stone-400 text-center w-full lg:w-[40%] lg:text-left'>
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
