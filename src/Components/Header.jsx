import React from 'react'
import logo from "../Netflix_Logo_PMS.png";
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { addUser,removeUser } from '../utils/userSlice';
const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleSignout=()=>{
    signOut(auth).then(() => {

}).catch((error) => {
 navigate("/errorpage");
});
  }
      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayname} = user;
      dispatch(addUser({uid: uid,email: email,displayname: displayname}));
      navigate("/browse")
     
    } else {
      dispatch(removeUser());
      navigate("/");
      
    }
  });
  //unsubscribr when the component unmount,this function will cann and this unsubscribe to the onauthstate
  return()=>unsubscribe();
      },[])
  return (
    <div className='absolute  w-screen from-black flex justify-between z-10 '>
      <img 
      className='w-72  px-8 py-2 bg-gradient-to-b from-black'
      src={logo} alt="logo" />
      <button className='font-bold m-12 text-white cursor-pointer' onClick={handleSignout}>Sign Out</button>
      </div>
  )
}

export default Header