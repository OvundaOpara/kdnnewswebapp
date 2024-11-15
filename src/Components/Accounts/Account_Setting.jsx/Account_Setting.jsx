import React, { useState } from 'react'
import { MdArrowOutward } from 'react-icons/md'
import DeActivate_account from '../Account_Management/DeActivate_Account'
import Delete_Account from '../Account_Management/Delete_Account'
import Sub_Header from '../Sub_Header'
import { Link } from 'react-router-dom'
import Profile_Update from '../Profile_Update/Profile_Update'

const Account_Setting = ({ setUser }) => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [deactivateModal, setDeactivateModal] = useState(false)
  const [openProfileUpdate, setOpenProfileUpdate] = useState(false)



  return (
    <div className='fixed inset-0 bg-primary4  flex items-center justify-center gap-[32px] px-[55px] overflow-scroll '>
      <div className='pt-[16px] rounded-lg w-full gap-[24px]  shadow-lg h-[574px]   max-w-[1609px] '>
        <div className='flex flex-col w-[100%] gap-[24px] h-[802px]'>
          <Sub_Header/>
          <div className='flex items-center justify-between w-[100%]'>
            <div className='flex flex-col gap-[24px]'>
              <h1 className='xl:text-[24px] text-[18px]  font-[700] text-primary6'>
                Email address
              </h1>
              <h3 className='xl:text-[24px] text-[18px] font-[500] text-primary6'>
                Username and subdomain
              </h3>
            </div>
            <div className='flex flex-col gap-[24px]'>
              <h1 className='xl:text-[24px] text-[18px] font-[500] text-primary6'>
                Tonystark76@gmail.com
              </h1>
              <h3 className='xl:text-[24px] text-[18px] font-[500] text-primary6'>
                Tonystark76
              </h3>
            </div>
          </div>
          <div className='flex items-center justify-between  w-[100%] '>
            <div onClick={() => setOpenProfileUpdate(prev => !prev)} className='flex cursor-pointer flex-col w-full gap-[24px]'>
              <h1 className='text-[24px] font-[700] text-primary6'>
                Profile Information
              </h1>
              <div className='flex items-center justify-between w-[ w-full] gap-[24px]'>
                <h3 className='xl:text-[20px] text-[16px] font-[500] text-primary6'>
                  Edit your photo, name, pronouns, short bio, etc.
                </h3>
                <div className='flex items-center justify-center xl:gap-[16px] lg:gap-[12px] '>
                  <h1 className='xl:text-[20px] text-[17px] font-[500] text-primary6'>
                    Tony Stark
                  </h1>
                  <div className='flex items-center justify-center text-primary6 text-[24px] font-[500] xl:w-[50px] w-[70px] xl:h-[50px] h-[50px] rounded-full bg-buttonsColor'>
                    T
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex w-[100%]  '>
            <div className='w-full flex items-center justify-between'>
              <div className='flex flex-col gap-[24px]'>
                <h1 className='text-[24px] font-[700] text-primary6'>
                  Become a subscriber
                </h1>
                <h3 className='xl:text-[24px] text-[18px] font-[500] text-primary6'>
                  Get full access to latest, puzzles and content
                </h3>
              </div>
              <div className='flex items-center w-[24px] h-[24px] justify-center gap-[16px] '>
                <MdArrowOutward className='w-[24px] h-[24px] text-primary6' />
              </div>
            </div>
          </div>
          <div className='flex w-[100%]  '>
            <Link to="/save_post" className='w-full flex items-center justify-between'>
              <div className='flex flex-col gap-[24px]'>
                <h1 className='text-[24px] font-[700] text-primary6'>
                  Saved Post
                </h1>
                <h3 className='xl:text-[24px] text-[18px] font-[500] text-primary6'>
                  Save content, articles for later consumption
                </h3>
              </div>
              <div className='flex items-center w-[24px] h-[24px] justify-center gap-[16px] '>
                <MdArrowOutward className='w-[24px] h-[24px] text-primary6' />
              </div>
            </Link>
          </div>
          <div className='flex w-[100%] pb-[38px] border-b-[0.2px] border-[#D9D9D9] '>
            <div className='w-full flex items-center justify-between'>
              <div className='flex flex-col gap-[24px]'>
                <h1 className='text-[24px] font-[700] text-primary6'>
                  Privacy
                </h1>
                <h3 className='xl:text-[24px] text-[18px] font-[500] text-primary6'>
                  KDN News take privacy very serious
                </h3>
              </div>
              <div className='flex items-center w-[24px] h-[24px] justify-center gap-[16px] '>
                <MdArrowOutward className='w-[24px] h-[24px] text-primary6' />
              </div>
            </div>
          </div>

          <div className='flex flex-col w-[100%] gap-[16px]'>
            <div className='flex flex-col gap-[16px]'>
              <h1
                className='text-[24px] font-[500] text-[#CF0807] cursor-pointer'
                onClick={() => setDeactivateModal(true)}
              >
                Deactivate account
              </h1>
              <h1 className='text-[20px] font-[500] text-primary6'>
                Deactivate will suspend your account until you sign back in{' '}
              </h1>
            </div>
            <div className='flex flex-col gap-[16px]'>
              <h1
                className='text-[24px] font-[500] text-[#CF0807] cursor-pointer'
                onClick={() => setDeleteModal(true)}
              >
                Delete account
              </h1>
              <h1 className='text-[20px] font-[500] text-primary6'>
                Permanently delete your account and all of your content.{' '}
              </h1>
            </div>
          </div>
        </div>
        {deactivateModal && (
          <DeActivate_account
            setDeactivateModal={setDeactivateModal}
            setUser={setUser}
          />
        )}
        {deleteModal && (
          <Delete_Account
            setDeleteModal={setDeleteModal}
            setUser={setUser}
          />
        )}
        {
          openProfileUpdate && (
            <Profile_Update setOpenProfileUpdate={setOpenProfileUpdate}/>
          )
        }
      </div>
    </div>
  )
}

export default Account_Setting
