import React, { useEffect } from 'react'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { google } from '../../assets/Icons/Index'

const Register = ({ onClose, onSwitchToLogin }) => {

  useEffect(() => {
    if (onClose) {
      // Disable scrolling by adding the overflow-hidden class to the body
      document.body.classList.add('overflow-hidden')
    } else {
      // Re-enable scrolling when the modal is closed
      document.body.classList.remove('overflow-hidden')
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [onClose])

  // Return null if modal is closed
  if (!onClose) return null


  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center z-30  '
     
    >
      <div className='bg-black text-white p-8 rounded-lg w-full  shadow-lg overflow-scroll  max-w-xl'>
        <div className='flex items-center justify-center my-7 '>
          <p className='text-2xl '>Create Account</p>
        </div>

        {/* Filter Options */}
        <div className='mb-6 space-y-2  '>
          <div className='flex flex-col items-center justify-between'>
            <div className='flex w-full mb-6 flex-col'>
              <label htmlFor=''>Enter Full Name</label>
              <input
                type='text'
                className='py-2 h-11 rounded-lg px-4 bg-stone-400 border-[1px] border-stone-500 outline-none'
              />
            </div>
            <div className='flex w-full mb-6 flex-col'>
              <label htmlFor=''> Enter Email Address</label>
              <input
                type='text'
                className='py-2 h-11 rounded-lg px-4 bg-stone-400 border-[1px] border-stone-500 outline-none'
              />
            </div>
            <div className='flex w-full mb-6 flex-col'>
              <label htmlFor=''>Choose Password</label>
              <input
                type='text'
                className='py-2 h-11 rounded-lg px-4 bg-stone-400 border-[1px] border-stone-500 outline-none'
              />
            </div>

            <button onClick={onClose}  className='text-stone-300 duration-300 mb-5 bg-[#CF0807] hover:bg-[#EF5454] py-2 w-full rounded-3xl'>Create Account</button>
            <div className="flex mb-5">
              <p className='text-stone-300 cursor-pointer text-base flex items-center justify-center gap-2 '><img src={google} alt="" /> Sign Up with Google</p>
            </div>
    
            <p className='gap-2'>Already have an Account? <Link onClick={onSwitchToLogin} className='text-[#CF0807] font-extrabold'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
