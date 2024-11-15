import React from 'react'

const FAQ_Hero = () => {
  return (
    <div className='xl:px-[60px] lg:px-[60px] px-[20px]  flex flex-col my-6'>
      <div className='flex flex-col gap-[24px] items-center py-[100px] xl:px-[60px] justify-center w-full'>
        <div className='flex flex-col items-center justify-center gap-[24px]'>
          <h1 className='text-[40px] font-[600] text-center'>How can we help you?</h1>
          <p className='text-[20px] font-[400] w-[70%] text-center'>
            Lorem ipsum dolor sit amet consectetur. Egestas posuere quis
            senectus sit quam diam vestibulum morbi in.
          </p>
        </div>
        <div className='flex gap-[16px] xl:w-[70%] w-full items-center justify-center'>
          <input
            type='text'
            className='w-[70%] h-[63px] rounded-[100px] p-[24px] gap-[10px] bg-[#B9B9B9] outline-none text-primary4'
            placeholder='How can we help?'
          />
          <button className='w-[30%] xl:w-[207px] h-[63px] rounded-[100px] bg-buttonsColor'>Find</button>
        </div>
      </div>
    </div>
  )
}

export default FAQ_Hero
