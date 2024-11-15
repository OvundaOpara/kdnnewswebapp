import React from 'react'

const Contact_Form = () => {
  return (
    <div className='xl:px-[60px] lg:px-[60px] px-[20px]  flex flex-col my-6'>
      <div className='flex flex-col gap-[34px] items-center py-[48px] xl:px-[64px] justify-center w-full'>
        <h1 className='text-4xl text-stone-300'>Contact Us</h1>
        <form
          action=''
          className='flex-col flex items-center justify-start w-full gap-[24px]'
        >
          <div className='flex flex-col gap-[8px] w-full'>
            <label htmlFor=''>Enter full name</label>
            <input
              type='text'
              name=''
              placeholder='Full name'
              className='h-[56px] p-[16px] gap-[10px] border-[1px] rounded-[12px] border-[#C7C7C7] bg-transparent outline-none'
            />
          </div>
          <div className='flex flex-col gap-[8px] w-full'>
            <label htmlFor=''>Enter Email address</label>
            <input
              type='email'
              name=''
              placeholder='Email'
              className='h-[56px] p-[16px] gap-[10px] border-[1px] rounded-[12px] border-[#C7C7C7] bg-transparent outline-none'
            />
          </div>
          <div className='flex flex-col gap-[8px] w-full'>
            <label htmlFor=''>Enter Email address</label>
            <textarea name='' id='' cols='30' rows='8'  className='gap-[10px] p-[16px] resize-none border-[1px] rounded-[12px] border-[#C7C7C7] bg-transparent outline-none'></textarea>
          </div>

          <button className='h-[56px] p-[16px] gap-[10px] bg-buttonsColor  rounded-[12px] w-full text-white'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact_Form
