import React, { useState } from 'react'
import FIlterHeader from '../../Components/FIlterHeader'
import { HEALTH, MOVIES } from '../../Data/Datas'
import { MdOutlineShare } from 'react-icons/md'
import { FaRegClock } from 'react-icons/fa'
import { author } from '../../assets/Images'
import { facebook, telegram, whatsapp } from '../../assets/Icons/Index'

const Hero = () => {
  const [isShareVisible, setIsShareVisible] = useState(false)
  return (
    <div className='flex flex-col px-[60px] my-6'>
      <FIlterHeader />

      <div className='flex xl:flex-row lg:flex-col flex-col items-center justify-center gap-[30px] '>
        <div className='flex items-center justify-center xl:flex-row lg:flex-row flex-col xl:w-[80%] w-[100%]'>
          <div className='flex xl:w-[70%] w-full  h-[369px] rounded-[12px] bg-[#484848]'>
            {' '}
          </div>
          <div className=' flex flex-col  xl:w-[50%] w-[100%] xl:p-[24px] gap-[48px]'>
            <p className=' text-[2rem] text-primary6 '>
              Lorem ipsum dolor sit amet consectetur. Turpis cursus aliquam sit
              amet molestie pharetra. Lectus mattis in viverra sapien.
            </p>
            <div className='flex w-full relative items-center justify-between'>
              <p className='text-[20px]'>2 sec ago</p>
              <MdOutlineShare className='text-[20px] cursor-pointer' onClick={() => setIsShareVisible(prev => !prev)} />
              {isShareVisible && (
                <div className='w-[245px] h-[232px] gap-[16px] p-[24px]  bg-[#484848] text-center text-white absolute flex flex-col items-center justify-center top-12 right-0  rounded-lg'>
                  <h1 className='text-[20px] self-start'>Share on:</h1>
                  <div className='flex flex-col w-[197px] items-center justify-start'>
                    <p
                      onClick={() => setIsShareVisible(prev => !prev)}
                      className='text-[20px] flex items-start justify-start gap-[8px] w-[197px] p-[12px] text-center cursor-pointer '
                    >
                      <img src={facebook} alt='' />
                      Facebook
                    </p>
                    <p
                      onClick={() => setIsShareVisible(prev => !prev)}
                      className='text-[20px] flex items-start justify-start gap-[8px] w-[197px] p-[12px] text-center cursor-pointer '
                    >
                      <img src={whatsapp} alt='' />
                      WhatsApp
                    </p>
                    <p
                      onClick={() => setIsShareVisible(prev => !prev)}
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
        </div>

        <div className='flex flex-col group relative rounded-xl h-[400px]  lg:w-[100%] w-full xl:w-[20%]  '>
          <div className='flex bg-[#3d3c3c70]  absolute top-0 left-0 w-full h-[50%] origin-top group-hover:h-full transition-all duration-500 ease-in-out items-center justify-center rounded-xl'></div>
          <div className='flex flex-col bg-transparent gap-3 px-1 mt-[200px] z-20 '>
            <h2 className='text-xl text-white bg-transparent'>Elections</h2>
            <p className=' text-white bg-transparent'>
              "Election Updates: What’s at Stake?"
            </p>
            <p className='text-sm text-stone-200 bg-transparent'>
              "A comprehensive breakdown of the upcoming elections and their
              implications."
            </p>
            <div className='flex items-center bg-transparent my-3 justify-start gap-5 '>
              <p className='text-stone-400 text-sm flex items-center gap-1 bg-transparent justify-center'>
                {' '}
                <FaRegClock className='bg-transparent' /> 23 Sept 2024{' '}
              </p>
              <p className='text-stone-400 flex bg-transparent items-center text-sm gap-2'>
                {' '}
                <img
                  src={author}
                  alt=''
                  width={20}
                  className='rounded-full'
                />{' '}
                <span className='text-stone-300 bg-transparent'>by</span> Stark{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
