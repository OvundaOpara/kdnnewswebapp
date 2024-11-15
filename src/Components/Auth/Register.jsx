import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { google } from '../../assets/Icons/Index'
import { FaEyeSlash } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'

const Register = ({setUser}) => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleRegister = e => {
    e.preventDefault()
    setEmail("")
    setName("")
    setPassword("")
    navigate('/') 
    setUser(true)
  }

  return (
    <div className=' fixed inset-0 bg-black   flex items-center justify-center z-30  '>
      <div className='bg-[#464646] text-white p-[32px] rounded-lg w-full gap-[24px]  shadow-lg h-[574px]   max-w-[974px]'>
        <div className='flex items-center justify-center '>
          <p className='text-2xl '>Create Account</p>
        </div>

        <form className='flex flex-col  items-center justify-between gap-[24px]'>
          <div className='flex w-full  flex-col'>
            <label htmlFor=''>
              Enter Full Name <span className='text-red-700'>*</span>
            </label>
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type='text'
              className='py-2 h-11 rounded-lg px-4 bg-stone-400 border-[1px] hover:bg-white text-primary2 border-stone-500 outline-none'
            />
          </div>
          <div className='flex w-full  flex-col'>
            <label htmlFor=''>
              {' '}
              Enter Email Address <span className='text-red-700'>*</span>
            </label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type='text'
              className='py-2 h-11 rounded-lg px-4 bg-stone-400 border-[1px] hover:bg-white text-primary2 border-stone-500 outline-none'
            />
          </div>
          <div className='flex w-full  flex-col relative'>
            <label htmlFor=''>
              Choose Password <span className='text-red-700'>*</span>
            </label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type={`${showPassword ? 'password' : 'text'}`}
              className='py-2 h-11 rounded-lg px-4 bg-stone-400 border-[1px] hover:bg-white text-primary2 border-stone-500 outline-none'
            />
            {showPassword ? (
              <FaEye
                className='text-stone-800 cursor-pointer absolute right-4 top-10 '
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaEyeSlash
                className='text-stone-800 cursor-pointer absolute right-4 top-10 '
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          <button
            onClick={handleRegister}
            className='text-stone-300 duration-300  bg-[#CF0807] hover:bg-[#EF5454] py-2 w-full rounded-3xl'
          >
            Create Account
          </button>
          <div className='flex '>
            <p className='text-stone-300 cursor-pointer text-base flex items-center justify-center gap-2 '>
              <img src={google} alt='' /> Sign Up with Google
            </p>
          </div>

          <p className='gap-2'>
            Already have an Account?{' '}
            <Link to='/login' className='text-[#CF0807] font-extrabold'>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
