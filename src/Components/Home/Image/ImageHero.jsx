import React from 'react'
import { CiImageOn } from 'react-icons/ci'

const ImageHero = () => {
  return (
    <div className='lg:px-24 flex relative h-[60vh] group items-center justify-center flex-col px-5 my-24'>
      <div className='flex flex-wrap absolute top-0  origin-top group-hover:h-[520px] transition-all duration-500 ease-in-out bg-stone-600 h-[500px] items-center justify-center rounded-xl w-[90%] lg:w-[95%]'>
        <CiImageOn className='text-white bg-stone-600 text-3xl' />
      </div>
    </div>
  )
}

export default ImageHero
