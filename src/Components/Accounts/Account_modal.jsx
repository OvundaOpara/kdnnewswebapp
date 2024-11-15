import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { IoIosArrowForward } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'

const Account_modal = ({ onAccount, closeModal}) => {
  const [greeting, setGreeting] = useState('')


 
  const handleAccoutModal = () => {
    onAccount()
  }

  const handleCloseModal = () => {
    closeModal(false)
  }


  useEffect(() => {
    const updateGreeting = () => {
      const currentTime = new Date() // Automatically uses user's local timezone
      const currentHour = currentTime.getHours()

      // Determine greeting based on the hour
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting('Good morning')
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting('Good afternoon')
      } else {
        setGreeting('Good evening')
      }
    }

    updateGreeting()
    const intervalId = setInterval(updateGreeting, 60000) // Update every minute

    return () => clearInterval(intervalId) // Clear interval on unmount
  }, [])

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-scroll '>
      <div className='bg-black text-white p-[11px] gap-[24px] rounded-lg w-full max-w-[540px] shadow-lg xl:mt-[400px] mt-[400px] '>
        <div className='flex items-center justify-between w-[512px] border-b-[0.3px] border-[#EFEFEF] px-[12px] pt-[12px] pb-[16px]'>
          <h1 className='text-[24px] font-[600]'>Tonystark76@gmail.com</h1>
          <IoClose  className='text-[24px] cursor-auto' onClick={handleCloseModal} />
        </div>
        <div className='flex flex-col gap-[48px] w-[512px] my-4'>
          <div className='flex flex-col gap-[24px] '>
            <h1 className='text-[40px] font-[500] '>{greeting}</h1>
            <p className='text-[24px] '>
              Lorem ipsum dolor sit amet consectetur. Ultrices et in neque amet
              magna neque feugiat lectus at. Metus nibh eget mauris at etiam
              adipiscing quisque posuere.{' '}
            </p>
          </div>
          <button className='w-full rounded-[100px] py-[24px] px-[18px] bg-buttonsColor'>
            Subscribe for more access
          </button>
          <p className='text-[24px] font-[500] '>
            Already subscribed?{' '}
            <span className='underline cursor-pointer'>
              Try a different email
            </span>
          </p>

          <div className='flex flex-col gap-[48px] w-full'>
            <Link onClick={handleCloseModal} to="/account_setting" className='flex border-t-[0.3px] w-full border-[#FEFCFC] items-center justify-between pt-[24px] px-[18px] pb-[18px]'>
              <h1 className='text-[24px] font-[500] text-[#A6A7A7]'>
                Account setting
              </h1>
              <IoIosArrowForward className='text-[24px]' />
            </Link>

            <div className='flex flex-col gap-[16px]'>
              <h1 className='text-[24px] font-[700] '>YOUR CONTENT</h1>
              <Link to="/save_post" onClick={handleCloseModal} className='flex border-t-[0.3px] w-full border-[#FEFCFC] items-center justify-between pt-[24px] px-[18px] pb-[18px]'>
                <h1 className='text-[24px] font-[500] text-[#A6A7A7]'>
                  Saved articles
                </h1>
                <IoIosArrowForward className='text-[24px]' />
              </Link>
              <div className='flex border-t-[0.3px] w-full border-[#FEFCFC] items-center justify-between pt-[24px] px-[18px] pb-[18px]'>
                <h1 className='text-[24px] font-[500] text-[#A6A7A7]'>
                  Newsletter
                </h1>
                <IoIosArrowForward className='text-[24px]' />
              </div>
            </div>

            <div className='flex flex-col gap-[16px]'>
              <h1 className='text-[24px] font-[700] '>GET SUPPORT</h1>
              <Link to="/FAQ" onClick={handleCloseModal} className='flex border-t-[0.3px] w-full border-[#FEFCFC] items-center justify-between pt-[24px] px-[18px] pb-[18px]'>
                <h1 className='text-[24px] font-[500] text-[#A6A7A7]'>
                  Help Center
                </h1>
                <IoIosArrowForward className='text-[24px]' />
              </Link>
            </div>
            <button className='w-[86px] gap-[10px]' onClick={handleAccoutModal} >Log out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account_modal
