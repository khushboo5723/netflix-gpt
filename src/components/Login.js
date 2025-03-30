import React, {useRef, useState} from 'react'
import Header from './Header';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { NETFLIX_LOGIN_IMAGE_URL } from '../utils/constant';
import { validateEmailAndPassword } from '../utils/validate';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser} from '../utils/userSlice';


function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignInSignUp = () =>{
    const message = validateEmailAndPassword(email?.current?.value, password?.current?.value);
    setErrorMessage(message);
    if(message) return;

    if(!isSignIn){
      // signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/73767170?v=4"
            }).then(() => {
              navigate('/browse');
            }).catch((error) => {
              setErrorMessage(error.message)
            });
          const {uid, displayName, email} = user;
          dispatch(addUser({uid:uid, displayName: displayName, email:email}))
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });


    } else {
      // signin logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          const {uid, displayName, email} = user;
          dispatch(addUser({uid:uid, displayName: displayName, email:email}))
          navigate('/browse'); 

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    }

  }
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
          <form className='bg-black absolute w-3/12 mx-auto my-36 right-0 left-0 p-12 bg-opacity-80  text-white' onSubmit={(e)=>(e.preventDefault())}>
           <h1 className='font-bold text-3xl py-4 '>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
              <input placeholder='Email/Phone number' type='text' className='p-2 my-4 w-full bg-gray-700' ref={email}/>
              {!isSignIn && <input placeholder='Full Name' type='text' className='p-2 my-4 w-full bg-gray-700' ref={name}/>}
              <input placeholder='Password' type='password' className='p-2 my-4 w-full bg-gray-700' ref={password}/>
              <p className='font-bold text-lg text-red-500 py-2'>{errorMessage}</p>
              <button className='bg-red-700 p-4 my-6 w-full text-white' onClick={handleSignInSignUp}>{isSignIn ? 'Sign In' : 'Sign Up'}</button>

              <p onClick={handleClick} className='text-white'>New to Netflix?Sign up now.</p>
          </form>
    </div>
  )
}

export default Login