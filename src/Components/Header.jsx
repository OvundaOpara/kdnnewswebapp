import React, { useEffect, useState } from 'react'
import { FooterIcon, HeroIcon } from '../assets/Icons/Index'
import { FaBell, FaSearch } from 'react-icons/fa'
import { IoIosFunnel } from 'react-icons/io'
import { RiMenu2Line } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import FIlterModal from './FIlterModal'
import { IoClose } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa6'
import Register from './Profile/Register'
import Login from './Profile/Login'

const Header = () => {
  const [showMenu, SetShowMenu] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen)
    SetShowMenu(false)
  }

  //HANDLE SEARCH
  const handleSearch = () => {
    console.log('Searching for:', searchQuery)
    setIsSearchOpen(false) 
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSearch()
      setSearchQuery('')
    }
  }

  useEffect(() => {
    setShowModal(false)
    
  }, [])

  const handleCloseModal = () => {
    setShowModal(!setShowModal)
    SetShowMenu(false)
  }

  const openRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  const handleToggleMenu = () => {
    SetShowMenu(!showMenu)

    if (!showMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  //HANDLING THE BACKGROUND COLOR WHEN SCROLLED
  const HandleBgChange = () => {
    if (window.scrollY >= 60) {
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
          ? 'flex items-center z-50  lg:px-24 px-5 justify-between fixed top-0 duration-500 ease-in left-0 w-full bg-stone-300 shadow-xl  h-[90px]    '
          : 'flex items-center z-50  lg:px-24 px-5 justify-between relative duration-500 ease-in left-0 w-full h-[90px]'
      }
    >
      {showMenu && (
        <div
          onClick={handleToggleMenu}
          className='absolute z-[999] inset-0 flex xl:hidden h-[110vh] bg-black opacity-70 duration-700 ease-in'
        ></div>
      )}
      {showModal && <FIlterModal closeModal={handleCloseModal} />}
      {isRegisterOpen && <Register onClose={closeModals} onSwitchToLogin={openLogin}  />}
      {isLoginOpen &&  <Login  onClose={closeModals} onSwitchToRegister={openRegister}/>}

      <div className='flex items-center  bg-transparent lg:w-[10%]   justify-center'>
        <img
          src={HeroIcon}
          alt=''
          width={100}
          className='cursor-pointer bg-transparent'
        />
      </div>

      {/* ------------- DESKTOP VIEW------------- */}

      <div className='hidden md:hidden w-[100%] xl:flex bg-transparent  items-center justify-around mx-auto'>
        <ul className='flex items-center gap-5 bg-transparent'>
          <li
            className={
              navbar
                ? 'text-lg inset-0 cursor-pointer text-black bg-transparent hover:text-gray-600 font-medium duration-300 ease-in'
                : 'text-lg inset-0 cursor-pointer text-white bg-transparent  hover:text-[#EF5454] font-medium duration-300 ease-in'
            }
          >
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'text-[#CF0807]  hover:text-[#EF5454] bg-transparent border-b-[2px] border-b-[#CF0807] duration-500 '
                  : ' bg-transparent  duration-500  '
              }
            >
              Home
            </NavLink>
          </li>

          <li
            className={
              navbar
                ? 'text-lg cursor-pointer text-black bg-transparent hover:text-gray-600 font-medium duration-300 ease-in'
                : 'text-lg cursor-pointer text-stone-300 bg-transparent  hover:text-[#EF5454]  font-medium duration-300 ease-in'
            }
          >
            <NavLink
              to='/category'
              className={({ isActive }) =>
                isActive
                  ? 'text-[#CF0807] hover:text-[#EF5454] bg-transparent border-b-[2px] border-b-[#CF0807] duration-500 '
                  : ' bg-transparent  duration-500  '
              }
            >
              Category
            </NavLink>
          </li>

          <li
            className={
              navbar
                ? 'text-lg cursor-pointer text-black bg-transparent hover:text-gray-600 font-medium duration-300 ease-in'
                : 'text-lg cursor-pointer text-stone-300 bg-transparent  hover:text-[#EF5454]  font-medium duration-300 ease-in'
            }
          >
            <NavLink
              to='/article'
              className={({ isActive }) =>
                isActive
                  ? 'text-[#CF0807] hover:text-[#EF5454] bg-transparent border-b-[2px] border-b-[#CF0807] duration-500 '
                  : ' bg-transparent  duration-500  '
              }
            >
              Articles
            </NavLink>
          </li>
          <li
            className={
              navbar
                ? 'text-lg cursor-pointer text-black bg-transparent hover:text-gray-600 font-medium duration-300 ease-in'
                : 'text-lg cursor-pointer text-stone-300 bg-transparent  hover:text-[#EF5454]  font-medium duration-300 ease-in'
            }
          >
            <NavLink
              to='/lifestyle'
              className={({ isActive }) =>
                isActive
                  ? 'text-[#CF0807] hover:text-[#EF5454] bg-transparent border-b-[2px] border-b-[#CF0807] duration-500 '
                  : ' bg-transparent  duration-500  '
              }
            >
              Lifestyle
            </NavLink>
          </li>
          <li
            className={
              navbar
                ? 'text-lg cursor-pointer text-black bg-transparent hover:text-gray-600 font-medium duration-300 ease-in'
                : 'text-lg cursor-pointer text-stone-300 bg-transparent  hover:text-[#EF5454]  font-medium duration-300 ease-in'
            }
          >
            <NavLink
              to='/health'
              className={({ isActive }) =>
                isActive
                  ? 'text-[#CF0807] hover:text-[#EF5454] bg-transparent border-b-[2px] border-b-[#CF0807] duration-500 '
                  : ' bg-transparent  duration-500  '
              }
            >
              Health (GHIR)
            </NavLink>
          </li>
          <li
            className={
              navbar
                ? 'text-lg cursor-pointer text-black bg-transparent hover:text-gray-600 font-medium duration-300 ease-in'
                : 'text-lg cursor-pointer text-stone-300 bg-transparent  hover:text-[#EF5454]  font-medium duration-300 ease-in'
            }
          >
            <NavLink
              to='/politics'
              className={({ isActive }) =>
                isActive
                  ? 'text-[#CF0807] hover:text-[#EF5454] bg-transparent border-b-[2px] border-b-[#CF0807] duration-500 '
                  : ' bg-transparent  duration-500  '
              }
            >
              Politics
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='lg:flex items-center justify-between bg-transparent   hidden gap-7 '>
        <FaUser
          onClick={openRegister} 
          className={
            navbar
              ? 'text-stone-800 bg-transparent text-4xl hover:bg-stone-700 rounded-md p-2  border-[1px] border-stone-700 cursor-pointer duration-300 ease-in'
              : 'text-stone-300 text-4xl duration-300 hover:bg-stone-700 ease-in p-2 border-[1px] border-stone-700 rounded-md cursor-pointer'
          }
        />
        <FaSearch
          onClick={toggleSearchBar}
          className={
            navbar
              ? 'text-stone-800 bg-transparent text-4xl rounded-md p-2  border-[1px] border-stone-700 hover:bg-stone-700 cursor-pointer duration-300 ease-in'
              : 'text-stone-300 text-4xl duration-300 ease-in p-2 border-[1px] border-stone-700 hover:bg-stone-700 rounded-md cursor-pointer'
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
          onClick={() => setShowModal(prevState => !prevState)}
          className={
            navbar
              ? 'text-stone-800 bg-transparent text-4xl hover:bg-stone-700 rounded-md p-2  border-[1px] border-stone-700 cursor-pointer duration-300 ease-in'
              : 'text-stone-300 text-4xl duration-300 hover:bg-stone-700 ease-in p-2 border-[1px] border-stone-700 rounded-md cursor-pointer'
          }
        />
      </div>

      <div className='flex xl:hidden bg-transparent  items-center justify-between gap-4'>
        <div
          className={
            navbar
              ? 'flex text-black bg-transparent gap-6 xl:hidden text-2xl z-20 duration-300 ease-in '
              : 'flex text-white gap-6 xl:hidden text-2xl z-w0 duration-300 ease-in'
          }
          onClick={handleToggleMenu}
        >
          <RiMenu2Line
            className={
              navbar
                ? 'flex lg:flex text-black bg-transparent gap-6 xl:hidden text-2xl z-20 duration-300 ease-in '
                : 'flex lg:flex text-white gap-6 xl:hidden text-2xl z-20 duration-300 ease-in'
            }
          />
        </div>
      </div>
      {/* ------------- MOBILE VIEW------------- */}
      {showMenu && (
        <div className='flex xl:hidden  justify-between duration-500 h-[90vh] ease-out z-[999] rounded-lg px-4  bg-white w-[98%] absolute top-[50px] left-0 py-4 bg-transparent  text-white'>
          <IoClose
            className=' z-[999] absolute  text-white top-[-20px] right-5 text-3xl '
            onClick={handleToggleMenu}
          />
          <div className='bg-white w-full mx-auto px-3 py-3'>
            <ul className='flex flex-col  items-start gap-14 '>
              <li className='text-2xl cursor-pointer text-gray-700 hover:text-white font-medium'>
                <NavLink
                  to='/'
                  onClick={handleToggleMenu}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#CF0807]  hover:text-[#EF5454] bg-transparent border-b-[2px] border-b-[#CF0807] duration-500 '
                      : ' bg-transparent  duration-500  '
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className='text-2xl cursor-pointer text-gray-700 hover:text-[#CF0807] font-medium'>
                <NavLink
                  to='/category'
                  onClick={handleToggleMenu}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#CF0807] hover:text-[#EF5454] bg-transparent border-b-[2px] border-b-[#CF0807] duration-500 '
                      : ' bg-transparent  duration-500  '
                  }
                >
                  Category
                </NavLink>
              </li>
              <li className='text-2xl cursor-pointer text-gray-700 hover:text-[#CF0807] font-medium'>
                <NavLink
                  to='/article'
                  onClick={handleToggleMenu}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#CF0807] hover:text-[#EF5454] bg-transparent border-b-[2px] border-b-[#CF0807] duration-500 '
                      : ' bg-transparent  duration-500  '
                  }
                >
                  Articles
                </NavLink>
              </li>

              <li className='text-2xl cursor-pointer text-gray-700 hover:text-[#CF0807] font-medium'>
                <NavLink
                  to='/lifestyle'
                  onClick={handleToggleMenu}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#CF0807] hover:text-[#EF5454] bg-transparent border-b-[2px] border-b-[#CF0807] duration-500 '
                      : ' bg-transparent  duration-500  '
                  }
                >
                  Lifestyle
                </NavLink>
              </li>
              <li className='text-2xl cursor-pointer text-gray-700 hover:text-[#CF0807] font-medium'>
                <NavLink
                  to='/health'
                  onClick={handleToggleMenu}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#CF0807] hover:text-[#EF5454] bg-transparent border-b-[2px] border-b-[#CF0807] duration-500 '
                      : ' bg-transparent  duration-500  '
                  }
                >
                  Health(GHIR)
                </NavLink>
              </li>
              <li className='text-2xl cursor-pointer text-gray-700 hover:text-[#CF0807] font-medium'>
                <NavLink
                  to='/politics'
                  onClick={handleToggleMenu}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#CF0807] hover:text-[#EF5454] bg-transparent border-b-[2px] border-b-[#CF0807] duration-500 '
                      : ' bg-transparent  duration-500  '
                  }
                >
                  Politics
                </NavLink>
              </li>
            </ul>
            <div className='flex items-center justify-start bg-transparent my-10   xl:hidden gap-20 '>
              <FaUser
                onClick={openRegister}
                className='text-stone-300 text-4xl duration-300 bg-stone-900 ease-in p-2 border-[1px] border-stone-700 rounded-md cursor-pointer'
              />
              <FaSearch
                onClick={toggleSearchBar}
                className='text-stone-300 text-4xl duration-300 ease-in p-2 border-[1px] border-stone-700 bg-stone-900 rounded-md cursor-pointer'
              />

              <FaBell className='text-stone-300 text-4xl duration-300 ease-in p-2 border-[1px] bg-stone-900 border-stone-700 rounded-md cursor-pointer' />

              <IoIosFunnel
                onClick={handleCloseModal}
                className='text-stone-300 text-4xl duration-300 bg-stone-900 ease-in p-2 border-[1px] border-stone-700 rounded-md cursor-pointer'
              />
            </div>
          </div>
        </div>
      )}

      {isSearchOpen && (
        <div className='absolute top-full bg-black h-[20vh] flex items-center justify-center left-0 right-0 mx-auto w-11/12 md:w-1/2  shadow-lg rounded-lg p-4  transition-transform transform origin-top animate-fade-in-down'>
          <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            type='text'
            placeholder='Search...'
            className='w-full px-4 py-2  border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
      )}
    </div>
  )
}

export default Header
