import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaEyeSlash } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa'
import { google } from '../../assets/Icons/Index'

const Login = ({setUser}) => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = e => {
    e.preventDefault()
    setEmail("")
    setPassword("")
    navigate('/') 
    setUser(true)
    console.log(email, password)
  }

  return (
    <div className='fixed inset-0 bg-black   flex items-center justify-center z-30  '>
      <div className='bg-[#464646] h-[510px] text-white p-8 rounded-lg w-full gap-[34px] shadow-lg  max-w-[933px]'>
        <div className='flex items-center justify-center  '>
          <p className='text-2xl '>Login</p>
        </div>

        {/* Filter Options */}
        <div className='  '>
          <form
            action=''
            className='flex flex-col gap-[24px] items-center justify-between'
          >
            <div className='flex w-full flex-col'>
              <label htmlFor=''> Enter Email Address  <span className='text-red-700'>*</span></label>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type='text'
                className='py-2 h-11 rounded-lg px-4 bg-stone-400 border-[1px] border-stone-500 hover:bg-white text-primary2 outline-none'
              />
            </div>
            <div className='flex w-full flex-col relative'>
              <label htmlFor=''>Enter Password <span className='text-red-700'>*</span></label>
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type={`${showPassword ? 'text' : 'password'}`}
                className='py-2 pr-[30px] h-11 rounded-lg px-4 bg-stone-400 border-[1px] hover:bg-white text-primary2 border-stone-500 outline-none'
              />
              <p className='text-[16px] '>Forgot password?</p>
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
              onClick={handleLogin}
              className='text-stone-300 duration-300  bg-[#CF0807] hover:bg-[#EF5454] py-2 w-full rounded-3xl'
            >
              Login
            </button>
            <div className='flex '>
              <p className='text-stone-300 cursor-pointer text-base flex items-center justify-center gap-2 '>
                <img src={google} alt='' /> Continue with Google
              </p>
            </div>
            <p className='gap-2'>
              Don't have an Account{' '}
              <Link to='/register' className='text-[#CF0807] font-extrabold'>
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
