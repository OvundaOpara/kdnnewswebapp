import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import FIlterModal from '../Components/FIlterModal'

const MainLayout = () => {


  
  return (
    <div>
        <Header/>
       
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainLayout