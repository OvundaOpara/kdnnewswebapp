import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { author } from '../../assets/Images'

const Movies_Articles = () => {
  return (
    <div className='lg:px-24 flex flex-col px-5'>
    <h2 className='my-20 text-center t text-4xl text-stone-300'>
      Trending Movies
    </h2>

    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  items-center justify-center gap-12 mt-[10px] '>
        <div className='flex flex-col lg:w-[100%] w-[100%] gap-3  '>
          <div className='flex flex-col h-[300px] gap-7  rounded-xl group '>
            <div className='flex bg-stone-600 h-[150px] items-center justify-center rounded-xl w-full  origin-top group-hover:scale-y-[180%] transition-all duration-500 ease-in-out'></div>
            <div className='flex flex-col z-30'>
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
          </div>
          <div className='flex flex-col gap-7 h-[300px]  rounded-xl group '>
            <div className='flex bg-stone-600 h-[150px] items-center justify-center rounded-xl w-full  origin-top group-hover:scale-y-[180%] transition-all duration-500 ease-in-out'></div>
            <div className='flex flex-col z-30'>
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
          </div>
        </div>

        <div className='flex flex-col  lg:w-[100%] h-[630px] w-[100%]  '>
          <div className='flex flex-col  gap-11  rounded-xl group '>
            <div className='flex bg-stone-600 h-[290px] items-center justify-center rounded-xl w-full  origin-top group-hover:scale-y-[200%] transition-all duration-500 ease-in-out'></div>
            <div className='flex flex-col z-30 w-[70%] px-2 '>
              <div className='flex items-center my-4 justify-start gap-5 '>
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
              <h3 className='text-2xl  font-bold text-white'>
                How to stay fit during the holidays
              </h3>
              <p className='text-lg text-stone-300'>Tips and tricks to maintain your fitness routine amidst holiday festivities</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:w-[100%] w-[100%] gap-3  '>
          <div className='flex flex-col h-[300px] gap-7  rounded-xl group '>
            <div className='flex bg-stone-600 h-[150px] items-center justify-center rounded-xl w-full  origin-top group-hover:scale-y-[180%] transition-all duration-500 ease-in-out'></div>
            <div className='flex flex-col z-30'>
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
          </div>
          <div className='flex flex-col gap-7 h-[300px]  rounded-xl group '>
            <div className='flex bg-stone-600 h-[150px] items-center justify-center rounded-xl w-full  origin-top group-hover:scale-y-[180%] transition-all duration-500 ease-in-out'></div>
            <div className='flex flex-col z-30'>
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
          </div>
        </div>
      </div>
  </div>
  
  )
}

export default Movies_Articles
