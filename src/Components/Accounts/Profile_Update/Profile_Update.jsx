import React, { useState } from 'react'
import FIlterHeader from '../../FIlterHeader'
import { IoClose } from 'react-icons/io5'

const Profile_Update = ({ setOpenProfileUpdate }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleProfile = () => {
    setOpenProfileUpdate() // Close the modal after filtering
  }

  const handleImageChange = event => {
    const file = event.target.files[0]
    if (file) {
      setSelectedImage(URL.createObjectURL(file)) // Create a URL for the selected image
    }
  }

  const removeImage = () => {
    setSelectedImage(null) // Remove the image and show the input again
  }

  console.log(selectedImage)

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50  flex overflow-scroll items-center justify-center z-50 '>
      <div className='bg-black text-white p-[32px] rounded-lg w-full mt-[450px] gap-[24px]  max-w-xl shadow-lg'>
        <div className='flex items-center justify-between w-full mb-6 '>
          <h2 className='text-2xl '>Profile Information</h2>
          <IoClose
            className='text-[24px] cursor-pointer'
            onClick={() => setOpenProfileUpdate(false)}
          />
        </div>

        <div className='mb-6 space-y-2   '>
          <div className='flex flex-col items-center justify-between gap-[16px]'>
            <div className='flex w-full gap-[24px] items-center justify-center'>
              <div className='flex'>
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt=''
                    className='w-[130px] h-[100px] flex items-center justify-center rounded-[600px] cursor-pointer'
                  />
                ) : (
                  <label
                    htmlFor='pics'
                    className='bg-[#CF0807] w-[100px] h-[100px] flex items-center justify-center rounded-[600px] cursor-pointer'
                  >
                    <h1 className=' text-center text-5xl'>T</h1>
                  </label>
                )}
              </div>
              <input
                type='file'
                name=''
                onChange={handleImageChange}
                id='pics'
                className='hidden '
                accept='image/*'
              />
              <div className='flex flex-col '>
                <div className='flex gap-7'>
                  <button>Update</button>
                  <button
                    onClick={removeImage}
                    className='text-[#CF0807] font-bold'
                  >
                    Remove
                  </button>
                </div>
                <p className=''>
                  Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels
                  per side
                </p>
              </div>
            </div>

            <div className='flex w-full mb-7 flex-col'>
              <label htmlFor=''>Name</label>
              <input
                placeholder='Enter Surename'
                type='text'
                className='py-3 rounded-lg px-4 text-primary4 bg-white border-[1px] border-stone-500 outline-none'
              />
            </div>
            <div className='flex w-full mb-7 flex-col'>
              <label htmlFor=''>Email</label>
              <input
                placeholder='Enter Email'
                type='email'
                className='py-3 rounded-lg px-4 text-primary4 bg-white border-[1px] border-stone-500 outline-none'
              />
            </div>
            <div className='flex w-full mb-7 flex-col'>
              <label htmlFor=''>Phone number</label>
              <input
              placeholder='Enter Phone Number'
                type='text'
                className='py-3 rounded-lg px-4 text-primary4 bg-white border-[1px] border-stone-500 outline-none'
              />
            </div>
            <div className='flex w-full mb-7 flex-col'>
              <label htmlFor=''>Short bio</label>
              <textarea
              placeholder='Enter Bio'
                name=''
                id=''
                cols='30'
                rows='3'
                className='bg-white border-[2px] text-primary4 border-stone-500 outline-none rounded-lg px-3 py-3'
              ></textarea>
            </div>
            <hr className='bg-stone-500 border-none h-[1px] w-full my-2' />
            <div className='flex flex-col w-full gap-4'>
              <h1 className='text-2xl text-stone-300'>About Page</h1>
              <p className='text-stone-300 text-lg'>
                Personalize with images and more to paint more of a vivid
                portrait of yourself than your ‘Short bio’.
              </p>
            </div>
            <div className='flex w-full items-center gap-7 justify-end'>
              <button
                className='py-3 px-10 border-[2px] border-[#CF0807] rounded-lg '
                onClick={handleProfile}
              >
                Cancle
              </button>
              <button className='py-3 px-10 bg-[#CF0807] rounded-lg'>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile_Update
