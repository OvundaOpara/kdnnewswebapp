import React, { useState } from 'react'
import { QZ } from '../../../Data/Datas'
import Index from './Quiz/Index'

const Quizzes = () => {
  const [showQuiz, setShowQuiz] = useState(false)

  const handleCloseModal = () => {
    setShowQuiz(false)
  }

  return (
    <div className='lg:px-24 flex flex-col px-9'>
      <h2 className='my-16 text-center t text-4xl text-stone-300'>Quizzes</h2>

      <div className='flex flex-wrap items-center justify-center gap-10 mt-[10px] '>
        {QZ.map((item, index) => (
          <div className='flex flex-col w-[400px] h-[400px] items-center justify-center lg:w-[31%] border-[2px] border-stone-500 px-3 py-3 rounded-xl '>
            <h1 className='text-2xl text-stone-300 text-center'>{item.name}</h1>
            <p className='text-lg text-center  my-4 text-stone-400'>
              {item.title}
            </p>

            <div className='flex gap-5 w-full items-center justify-center   '>
              <button
                className='bg-[#CF0807] py-2 w-[90%] text-stone-300 text-lg rounded-md '
                onClick={() => setShowQuiz(prevState => !prevState)}
              >
                Start Quiz{' '}
              </button>
            </div>
          </div>
        ))}
      </div>
      {showQuiz && <Index  handleCloseModal={handleCloseModal}/>}
    </div>
  )
}

export default Quizzes
