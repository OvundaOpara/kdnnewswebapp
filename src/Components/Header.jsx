import React, { useState } from 'react'
import { FooterIcon, HeroIcon } from '../assets/Icons/Index'
import { FaBell, FaSearch } from 'react-icons/fa'
import { IoIosFunnel } from 'react-icons/io'
import { RiMenu2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showMenu, SetShowMenu] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const handleToggleMenu = () => {
    SetShowMenu(!showMenu)
  }

  //HANDLING THE BACKGROUND COLOR WHEN SCROLLED
  const HandleBgChange = () => {
    if (window.scrollY >= 90) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  //ADDING AN EVENTLISTENER TO CALL THE HANDLEBGCHANGE()
  window.addEventListener('scroll', HandleBgChange)

  return (
    <div
      className={
        navbar
          ? 'flex items-center lg:px-24 px-4 justify-between fixed top-0 duration-500 ease-in left-0 z-40 w-full bg-stone-300 shadow-xl  h-[90px]    '
          : 'flex items-center lg:px-24 px-4 justify-between  duration-500 ease-in left-0 z-40 w-full h-[90px]   '
      }
    >
      <div className='flex items-center  bg-transparent lg:w-[10%]   justify-center'>
        <img
          src={HeroIcon}
          alt=''
          width={100}
          className='cursor-pointer bg-transparent'
        />
      </div>

      {/* ------------- DESKTOP VIEW------------- */}

      <div className='hidden md:hidden w-[100%] lg:flex bg-transparent  items-center justify-around mx-auto'>
        <ul className='flex items-center gap-5 bg-transparent'>
          <Link to='/' className='bg-transparent'>
            <li
              className={
                navbar
                  ? 'text-lg cursor-pointer text-black bg-transparent hover:text-gray-600 font-medium duration-300 ease-in'
                  : 'text-lg cursor-pointer text-stone-300  hover:text-[#CF0807] hover:underline  font-medium duration-300 ease-in'
              }
            >
              Home
            </li>
          </Link>
          <li
            className={
              navbar
                ? 'text-lg cursor-pointer text-black bg-transparent hover:text-gray-600 font-medium duration-300 ease-in'
                : 'text-lg cursor-pointer text-stone-300  hover:text-[#CF0807] hover:underline  font-medium duration-300 ease-in'
            }
          >
            <Link to='/category' className='bg-transparent'>Category</Link>
          </li>

       

          <li
            className={
              navbar
                ? 'text-lg cursor-pointer text-black bg-transparent hover:text-gray-600 font-medium duration-300 ease-in'
                : 'text-lg cursor-pointer text-stone-300  hover:text-[#CF0807] hover:underline  font-medium duration-300 ease-in'
            }
          >
            <Link to='/article' className='bg-transparent'>Articles</Link>
          </li>
          <li
            className={
              navbar
                ? 'text-lg cursor-pointer text-black bg-transparent hover:text-gray-600 font-medium duration-300 ease-in'
                : 'text-lg cursor-pointer text-stone-300  hover:text-[#CF0807] hover:underline  font-medium duration-300 ease-in'
            }
          >
            Lifestyle
          </li>
          <li
            className={
              navbar
                ? 'text-lg cursor-pointer text-black bg-transparent hover:text-gray-600 font-medium duration-300 ease-in'
                : 'text-lg cursor-pointer text-stone-300  hover:text-[#CF0807] hover:underline  font-medium duration-300 ease-in'
            }
          >
            Health (GHIR)
          </li>
          <li
            className={
              navbar
                ? 'text-lg cursor-pointer text-black bg-transparent hover:text-gray-600 font-medium duration-300 ease-in'
                : 'text-lg cursor-pointer text-stone-300  hover:text-[#CF0807] hover:underline  font-medium duration-300 ease-in'
            }
          >
            Politics
          </li>
        </ul>
      </div>

      <div className='lg:flex items-center justify-between bg-transparent   hidden gap-7 '>
        <FaSearch
          className={
            navbar
              ? 'text-stone-800 bg-transparent text-4xl rounded-md p-2  border-[1px] border-stone-700 cursor-pointer duration-300 ease-in'
              : 'text-stone-300 text-4xl duration-300 ease-in p-2 border-[1px] border-stone-700 rounded-md cursor-pointer'
          }
        />

        <FaBell
          className={
            navbar
              ? 'text-stone-800 bg-transparent text-4xl rounded-md p-2  border-[1px] border-stone-700 cursor-pointer duration-300 ease-in'
              : 'text-stone-300 text-4xl duration-300 ease-in p-2 border-[1px] border-stone-700 rounded-md cursor-pointer'
          }
        />

        <IoIosFunnel
          className={
            navbar
              ? 'text-stone-800 bg-transparent text-4xl rounded-md p-2  border-[1px] border-stone-700 cursor-pointer duration-300 ease-in'
              : 'text-stone-300 text-4xl duration-300 ease-in p-2 border-[1px] border-stone-700 rounded-md cursor-pointer'
          }
        />
      </div>

      <div className='flex lg:hidden bg-transparent  items-center justify-between gap-4'>
        <div
          className={
            navbar
              ? 'flex text-black bg-transparent gap-6 lg:hidden text-2xl z-50 duration-300 ease-in '
              : 'flex text-white gap-6 lg:hidden text-2xl z-50 duration-300 ease-in'
          }
          onClick={handleToggleMenu}
        >
          <RiMenu2Line
            className={
              navbar
                ? 'flex text-black bg-transparent gap-6 lg:hidden text-2xl z-50 duration-300 ease-in '
                : 'flex text-white gap-6 lg:hidden text-2xl z-50 duration-300 ease-in'
            }
          />
        </div>
      </div>
      {/* ------------- MOBILE VIEW------------- */}
      {showMenu && <div className='flex'></div>}
    </div>
  )
}

export default Header
