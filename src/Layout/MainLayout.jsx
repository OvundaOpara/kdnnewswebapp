import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Components/Footer'

const MainLayout = ({ user, setUser }) => {
  const location = useLocation()
  const hideFooter =
    location.pathname === '/register' ||
    location.pathname === '/login' ||
    location.pathname === '/account_setting'

  return (
    <div className='bg-[#02090D]  text-primary6'>
      <Header user={user} setUser={setUser} />

      <Outlet />
      {!hideFooter && <Footer />}
    </div>
  )
}

export default MainLayout
