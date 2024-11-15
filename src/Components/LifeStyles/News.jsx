import React, { useState } from 'react'
import { FaFacebook, FaRegClock, FaTelegram } from 'react-icons/fa'
import { HERO } from '../../Data/Datas'
import { author } from '../../assets/Images'
import { Link } from 'react-router-dom'
import { MdOutlineShare } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
import { facebook, telegram, whatsapp } from '../../assets/Icons/Index'

const News = ({ headline }) => {
  const [isShareVisible, setIsShareVisible] = useState(false)

  const toggleShare = index => {
    setIsShareVisible(prevId => (prevId === index ? null : index))
  }
  return (
    <div className=' flex flex-col px-[60px]'>
      <h2 className='my-5 text-center t text-4xl text-stone-300'>{headline}</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  items-center justify-center gap-12 mt-[50px] '>
        {HERO.map((item, index) => (
          <div className='flex flex-col w-[100%] lg:w-[100%] ' key={index}>
            <div className='flex bg-stone-600 h-[200px] items-center justify-center rounded-xl w-full'></div>
            <h1 className='text-lg text-stone-300'>{item.name}</h1>
            <p className='text-sm text-stone-300'>{item.title}</p>
            <div className='flex w-full relative items-center justify-between'>
              <p className='text-[20px]'>2 sec ago</p>
              <MdOutlineShare
                onClick={() => toggleShare(index)}
                className='text-stone-200 cursor-pointer  text-5xl rounded-full p-3   '
              />
              {isShareVisible === index && (
                <div className='w-[245px] h-[232px] gap-[16px] p-[24px]  bg-[#484848] text-center text-white absolute flex flex-col items-center justify-center top-12 right-1  rounded-lg'>
                  <h1 className='text-[20px] self-start'>Share on:</h1>
                  <div className='flex flex-col w-[197px] items-center justify-start'>
                    <p
                      onClick={() => toggleShare(index)}
                      className='text-[20px] flex items-start justify-start gap-[8px] w-[197px] p-[12px] text-center cursor-pointer '
                    >
                      <img src={facebook} alt='' />
                      Facebook
                    </p>
                    <p
                      onClick={() => toggleShare(index)}
                      className='text-[20px] flex items-start justify-start gap-[8px] w-[197px] p-[12px] text-center cursor-pointer '
                    >
                      <img src={whatsapp} alt='' />
                      WhatsApp
                    </p>
                    <p
                      onClick={() => toggleShare(index)}
                      className='text-[20px] flex items-start justify-start gap-[8px] w-[197px] p-[12px] text-center cursor-pointer '
                    >
                      <img src={telegram} alt='' />
                      Telegram
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
