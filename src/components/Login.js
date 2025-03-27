import React, {useState} from 'react'
import Header from './Header';
import { NETFLIX_LOGIN_IMAGE_URL } from '../utils/constant';


function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleClick =()=>{
    setIsSignIn(!isSignIn);

  }
  return (
    <div >
        <Header/>
        <div className='absolute'>
          <img src={NETFLIX_LOGIN_IMAGE_URL}
          alt='netflix-bg-logo'
          />
        </div>
          <form className='bg-black absolute w-3/12 mx-auto my-36 right-0 left-0 p-12 bg-opacity-80'>
           <h1 className='font-bold text-3xl py-4  text-white'>{isSignIn ? 'Sign In' : 'SignUp'}</h1>
              <input placeholder='Email/Phone number' type='text' className='p-2 my-4 w-full bg-gray-700' />
              {!isSignIn && <input placeholder='Full Name' type='text' className='p-2 my-4 w-full bg-gray-700' />}
              <input placeholder='Password' type='text' className='p-2 my-4 w-full bg-gray-700' />
              <button className='bg-red-700 p-4 my-6 w-full text-white'>{isSignIn ? 'Sign In' : 'SignUp'}</button>

              <p onClick={handleClick} className='text-white'>New to Netflix?Sign up now.</p>
          </form>
    </div>
  )
}

export default Login