import React, { useEffect } from 'react'
import { CiImageOn } from 'react-icons/ci'
import FIlterHeader from '../../FIlterHeader'
import { useLocation } from 'react-router-dom';


const Hero = () => {
  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='lg:px-24 flex flex-col px-5 my-10'>
      <FIlterHeader />

      <div className='flex flex-wrap bg-stone-600 h-[400px] items-center justify-center rounded-xl w-[100%] lg:w-[100%]'>
        <CiImageOn className='text-white bg-stone-600 text-3xl' />
      </div>
    </div>
  )
}

export default Hero
