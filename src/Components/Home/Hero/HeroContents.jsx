import React, { useState } from 'react'
import { FaRegClock } from 'react-icons/fa'
import { CiImageOn } from 'react-icons/ci'

import { author } from '../../../assets/Images'
import { Link } from 'react-router-dom'
import FIlterHeader from '../../FIlterHeader'

const HeroContents = () => {
  const [showFullDescribtion, setShowFullDescribtion] = useState(false)

  const dec =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cum, asperiores perferendis nisi nobis optio deserunt libero, natus saepe doloremque rerum sequi laboriosam? Optio minus amet veniam provident quas atque, natus veritatis distinctio facilis illum voluptatum voluptate rerum ducimus fuga! Est voluptates libero animi. Eligendi incidunt aperiam atque aliquid consequuntur consequatur velit dolores adipisci laboriosam, delectus, porro, eum autem ullam labore molestiae minus natus iste dolorum libero! Necessitatibus quae beatae culpa nam quam quidem cumque officiis ducimus eum neque deserunt voluptas facere laboriosam ullam enim, sunt molestiae, veritatis maiores dolor corrupti consectetur dignissimos magnam iure tenetur. Iure doloremque voluptatem accusamus magni quaerat ut. Accusamus eveniet quo sit sed deserunt ducimus ipsam tempore, non amet expedita obcaecati sapiente enim facere, recusandae vero? Necessitatibus quasi explicabo vero inventore voluptatibus, quae, excepturi debitis error incidunt officiis dolorem rerum animi rem culpa tenetur, quos nam placeat. Ratione consequuntur inventore cum deleniti dicta aliquid, enim id,  '

  let describtion = dec

  if (!showFullDescribtion) {
    describtion = dec.substring(0, 700) + '...'
  }

  return (
    <div>
      <FIlterHeader />
      <div className='grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 w-full  place-items-center gap-16 mt-14'>
        <div className='flex flex-col lg:w-[100%] w-[100%] '>
          <h1 className='text-stone-300 text-5xl'>
            The Power Of Connection Building Meaningful Relationship
          </h1>
          <div className='flex items-center my-4 justify-start gap-5 '>
            <p className='text-stone-400 flex items-center gap-2 justify-center'>
              {' '}
              <FaRegClock /> 23 Sept 2024{' '}
            </p>
            <p className='text-stone-400 flex items-center text-lg gap-2'>
              {' '}
              <img
                src={author}
                alt=''
                width={30}
                className='rounded-full'
              />{' '}
              <span className='text-stone-300'>by</span> Stark{' '}
            </p>
          </div>

          <p className='text-stone-300 text-lg '>
            {describtion}{' '}
            <p
              onClick={() => setShowFullDescribtion(prevState => !prevState)}
              className='text-[#CF0807]  text-lg cursor-pointer w-[100px]'
            >
              {}
              {showFullDescribtion ? 'Show Less' : 'Read more'}
            </p>{' '}
          </p>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 place-items-center gap-24 w-full'>
          <div className='flex flex-wrap bg-stone-600 h-[400px] items-center justify-center rounded-xl lg:w-[500px] w-[100%] xl:w-[400px] '>
            <CiImageOn className='text-white bg-stone-600 text-3xl' />
          </div>
          <div className='flex flex-col  rounded-xl  border-stone-400 border-[1px] lg:w-[100%] w-full xl:w-[100%]  '>
            <div className='flex bg-stone-600 h-[200px] items-center justify-center rounded-xl w-full'></div>
            <div className='flex flex-col px-1 my-2'>
              <h2 className='text-xl text-white'>Elections</h2>
              <p className=' text-white'>
                "Election Updates: What’s at Stake?"
              </p>
              <p className='text-sm text-stone-200'>
                "A comprehensive breakdown of the upcoming elections and their
                implications."
              </p>
              <div className='flex items-center my-3 justify-start gap-5 '>
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

export default HeroContents
