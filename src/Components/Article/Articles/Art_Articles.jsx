import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { author } from '../../../assets/Images'

const Art_Articles = () => {
  return (
    <div className='lg:px-24 flex flex-col px-5'>
      <h2 className='my-20 text-center t text-4xl text-stone-300'>
        Trending Articles
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  items-center justify-center gap-12 mt-[10px] '>
        <div className='flex flex-col lg:w-[100%] w-[100%] gap-3  '>
          <div className='flex flex-col border-[1px] border-stone-500 rounded-xl '>
            <div className='flex bg-stone-600 h-[200px] items-center justify-center rounded-xl w-full'></div>
            <h3 className='text-2xl px-2 font-bold text-white'>
              How to stay fit during the holidays
            </h3>
            <div className='flex items-center my-4 justify-start gap-5 px-2 '>
              <p className='text-stone-400 text-sm flex items-center gap-1 justify-center'>
                {' '}
                <FaRegClock /> 23 Sept 2024{' '}
              </p>
              <p className='text-stone-400 flex items-center text-sm gap-2'>
                {' '}
                <img
                  src={author}
                  alt=''
                  width={20}
                  className='rounded-full'
                />{' '}
                <span className='text-stone-300'>by</span> Stark{' '}
              </p>
            </div>
          </div>
          <div className='flex flex-col border-[1px] border-stone-500 rounded-xl'>
            <div className='flex bg-stone-600 h-[200px] items-center justify-center rounded-xl w-full'></div>
            <h3 className='text-2xl font-bold text-white px-2'>
              How to stay fit during the holidays
            </h3>
            <div className='flex items-center my-4 justify-start gap-5 px-2 '>
              <p className='text-stone-400 text-sm flex items-center gap-1 justify-center'>
                {' '}
                <FaRegClock /> 23 Sept 2024{' '}
              </p>
              <p className='text-stone-400 flex items-center text-sm gap-2'>
                {' '}
                <img
                  src={author}
                  alt=''
                  width={20}
                  className='rounded-full'
                />{' '}
                <span className='text-stone-300'>by</span> Stark{' '}
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:w-[100%] w-[100%]  '>
          <div className='flex flex-col border-[1px] border-stone-500 rounded-xl '>
            <div className='flex bg-stone-600 h-[490px] items-center justify-center rounded-xl w-full'></div>
            <h3 className='text-2xl font-bold text-white px-2'>
              How to stay fit during the holidays
            </h3>
            <div className='flex items-center my-4 justify-start gap-5 px-2'>
              <p className='text-stone-400 text-sm flex items-center gap-1 justify-center'>
                {' '}
                <FaRegClock /> 23 Sept 2024{' '}
              </p>
              <p className='text-stone-400 flex items-center text-sm gap-2'>
                {' '}
                <img
                  src={author}
                  alt=''
                  width={20}
                  className='rounded-full'
                />{' '}
                <span className='text-stone-300'>by</span> Stark{' '}
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row xl:flex-col lg:w-[210%] xl:w-[100%] w-[100%] gap-3 '>
          <div className='flex flex-col border-[1px] w-full border-stone-500 rounded-xl '>
            <div className='flex bg-stone-600 h-[200px] items-center justify-center rounded-xl w-full'></div>
            <h3 className='text-2xl font-bold text-white px-2'>
              How to stay fit during the holidays
            </h3>
            <div className='flex items-center my-4 justify-start gap-5 px-2 '>
              <p className='text-stone-400 text-sm flex items-center gap-1 justify-center'>
                {' '}
                <FaRegClock /> 23 Sept 2024{' '}
              </p>
              <p className='text-stone-400 flex items-center text-sm gap-2'>
                {' '}
                <img
                  src={author}
                  alt=''
                  width={20}
                  className='rounded-full'
                />{' '}
                <span className='text-stone-300'>by</span> Stark{' '}
              </p>
            </div>
          </div>
          <div className='flex flex-col w-full rounded-xl border-[1px] border-stone-500 '>
            <div className='flex bg-stone-600 h-[200px] items-center justify-center rounded-xl w-full'></div>
            <h3 className='text-2xl font-bold text-white px-2'>
              How to stay fit during the holidays
            </h3>
            <div className='flex items-center my-4 justify-start gap-5 px-2 '>
              <p className='text-stone-400 text-sm flex items-center gap-1 justify-center'>
                {' '}
                <FaRegClock /> 23 Sept 2024{' '}
              </p>
              <p className='text-stone-400 flex items-center text-sm gap-2'>
                {' '}
                <img
                  src={author}
                  alt=''
                  width={20}
                  className='rounded-full'
                />{' '}
                <span className='text-stone-300'>by</span> Stark{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Art_Articles
