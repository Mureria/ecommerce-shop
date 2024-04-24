import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useTheme } from "../Theme";



const Layout = () => {
  const { isDarkMode } = useTheme();

  return (
      <>
      <div className={`${isDarkMode ? 'bg-black text-gray-200' : 'bg-white text-black'}`}>
      <Header/>
      <Outlet/>
      <Footer/>
      </div>
      
      </>
    )
}

export default Layout