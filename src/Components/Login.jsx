import React, { useState } from 'react'
import Header from './Header'
import logo from '../netflix.jpg'
const Login = () => {
  const[isSign,setisSign]=useState(true);
  const togglesignform=()=>{
setisSign(!isSign)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src={logo} alt='logo'></img>
      </div>
      <form className='bg-black/70 absolute mx-auto right-0 left-0 my-40 p-12 w-3/12 rounded-lg bg-gradient-70'>
      <h1 className='text-white font-bold text-3xl m-2'>{isSign?"Sign In":"Sign up"}</h1>
       {!isSign&&(<input type='text' placeholder='Full Name' className='p-2 my-2 bg-gray-700 w-full text-white'/>)}
        <input type="text" placeholder='Email Address' className='p-2 my-2 bg-gray-700 w-full text-white'/>
      <input type='password' placeholder='password' className='p-2 my-2 bg-gray-700 w-full text-white'/>
      <button className='p-2 my-6 bg-gray-50 bg-red-700 text-white w-full rounded-lg'>{isSign?"Sign In":"Sign up"}</button>
        <p className='text-white cursor-pointer' onClick={togglesignform}>{isSign?"new to Netflix?please sign in":"Alreay registered Sign up"}</p>
      </form>
    </div>
  )
}

export default Login