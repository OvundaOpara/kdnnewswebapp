import React from 'react'
import { CiImageOn } from 'react-icons/ci'

const ImageHero = () => {
  return (
    <div className='lg:px-24 flex flex-col px-9 my-24'>
      <div className='flex flex-wrap bg-stone-600 h-[400px] items-center justify-center rounded-xl w-[400px] lg:w-[100%]'>
        <CiImageOn className='text-white bg-stone-600 text-3xl' />
      </div>
    </div>
  )
}

export default ImageHero
