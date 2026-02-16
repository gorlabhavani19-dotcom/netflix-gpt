import React from 'react'
import logo from "../Netflix_Logo_PMS.png";
const Header = () => {
  return (
    <div className='absolute z-10'>
      <img 
      className='w-70 px-8 py-2 bg-gradient-to-b from-black'
      src={logo} alt="logo" /></div>
  )
}

export default Header