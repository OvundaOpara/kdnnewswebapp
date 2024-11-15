import React, { useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { FAQ } from '../../Data/Datas'

const Questions = () => {
  const [showQuestion, setShowQuestion] = useState([])

  const toggleQuestion = (index) => {
    if (showQuestion.includes(index)) {
      setShowQuestion(showQuestion.filter((i) => i !== index)); // Close the question if it's already open
    } else {
      setShowQuestion([...showQuestion, index]); // Add question index to the open array
    }
  };

  return (
    <div className='xl:px-[60px] lg:px-[60px] px-[20px]  flex flex-col my-6'>
      <div className='flex flex-col gap-[34px] items-center py-[48px] xl:px-[64px] justify-center w-full'>
        <h2 className='text-[48px] font-[600] text-stone-300'>
          Frequently Asked Questions
        </h2>
        <div className='flex flex-col gap-[12px] pb-[48px]  w-full'>
          {FAQ.map((queation, index) => (
            <div key={index} className='flex flex-col items-center justify-start  w-full'>
              <div
                className='flex items-center justify-between w-full cursor-pointer xl:px-[32px]  py-[32px]'
                onClick={() => toggleQuestion(index)}
              >
                <h1 className='text-[24px] font-[600] text-white'>
                  {queation.question}
                </h1>
                <IoMdAdd className='text-[24px]  ' />
              </div>
              {showQuestion.includes(index) && <p className='text-[20px] font-[400] px-[32px] text-[#D9D9D9] '>{queation.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Questions
