import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Delete_Account = ({ setDeleteModal, setUser }) => {
  const [inputValue, setInputValue] = useState('')
  const targetWord = 'Delete Account'

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  const handleAccountDeletin = () => {
    setDeleteModal(false)
    setUser(false)
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 '>
      <div className='flex items-start py-5 justify-center fixed rounded-[5px]  bg-primary7 w-[50%]  '>
        <div className='flex flex-col relative items-center justify-center px-[18px] gap-[16px]'>
          <p
            className='absolute top-[-20px] right-[20px] text-[28px] text-primary6 cursor-pointer'
            onClick={handleAccountDeletin}
          >
            x
          </p>
          <h1 className='text-[30px] font-[700] text-primary6 '>
            Delete Account
          </h1>

          <p className='text-primary6 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            magni explicabo tempora animi impedit unde nihil necessitatibus! Non
            quisquam fugit atque vero aut at quam distinctio ullam, sit id, quia
            nam, dicta sapiente. Nesciunt nulla ratione unde, id delectus saepe,
            consectetur aut nisi tempora voluptate nostrum voluptatum quibusdam
            at, cumque totam.
          </p>
          <p className='text-primary6 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            magni explicabo tempora animi impedit unde nihil necessitatibus! Non
          </p>

          <div className='flex flex-col w-full'>
            <label htmlFor='' className='text-primary6'>
              To perform this action type " {targetWord} "
            </label>
            <input
              type='text'
              id='inputField'
              value={inputValue}
              onChange={handleInputChange}
              placeholder='Type here...'
              className='border-none outline-none text-primary4 p-2 mb-4 block '
            />
          </div>

          <div className='flex w-full items-center justify-end gap-[16px]'>
            <button
              className='bg-stone-500 text-buttonsColor py-2 px-4 rounded-md ml-4'
              onClick={() => setDeleteModal(false)}
            >
              Cancel
            </button>
            <Link
              to='/'
              onClick={handleAccountDeletin}
              disabled={inputValue !== targetWord}
              className={`p-2 bg-buttonsColor text-white rounded ${
                inputValue !== targetWord ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Delete Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delete_Account
