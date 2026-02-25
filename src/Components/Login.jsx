import React, { useRef, useState } from 'react'
import Header from './Header'
import logo from '../netflix.jpg'
import { checkvalidatedata } from '../utils/validate'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
const Login = () => {
  const[isSign,setisSign]=useState(true);
  const[errorMessage,seterrorMessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const handlebutton=()=>{
   //validate data
console.log("isSign",isSign);
  const message=checkvalidatedata(email.current.value,password.current.value,name.current?.value,!isSign);
 seterrorMessage(message);
if(message)return;
if(!isSign){
//sign up logic
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
  console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   seterrorMessage(errorCode+" "+errorMessage);
  });
}else{
//sign in logic
}
  }
  const togglesignform=()=>{
setisSign(!isSign)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src={logo} alt='logo'></img>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='bg-black/70 absolute mx-auto right-0 left-0 my-40 p-12 w-3/12 rounded-lg bg-gradient-70'>
      <h1 className='text-white font-bold text-3xl m-2'>{isSign?"Sign In":"Sign up"}</h1>
       {!isSign&&(<input ref={name} type='text' placeholder='Full Name' className='p-2 my-2 bg-gray-700 w-full text-white'/>)}
        <input ref={email} type="text" placeholder='Email Address' className='p-2 my-2 bg-gray-700 w-full text-white'/>
      <input ref={password} type='password' placeholder='password' className='p-2 my-2 bg-gray-700 w-full text-white'/>
      <p className='text-red-700 p-2 font-bold pb-0'>{errorMessage}</p>
      <button className='p-2 my-6 bg-gray-50 cursor-pointer bg-red-700 text-white w-full rounded-lg' onClick={handlebutton}>{isSign?"Sign In":"Sign up"}</button>
        <p className='text-white cursor-pointer' onClick={togglesignform}>{isSign?"new to Netflix?please sign in":"Alreay registered Sign up"}</p>
      </form>
    </div>
  )
}

export default Login