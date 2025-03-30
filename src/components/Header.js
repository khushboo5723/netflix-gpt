import React from 'react';
import { NETFLIX_LOGO_URL, NETFLIX_PROFILE_LOGO } from '../utils/constant';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);
  const handleClick =() =>{
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      navigate('/error');
    });
  }
  return (

  <div className='absolute bg-gradient-to-b from-black p-4 z-10 w-screen flex justify-between'>
        <img src={NETFLIX_LOGO_URL}
        alt='Netflix-logo'
        className='w-40'
        />
{   user &&     <div className='p-2 m-2 flex'>
      <img  src = {NETFLIX_PROFILE_LOGO} alt= "netflix-profile-logo"/>
      <button onClick={handleClick}>SignOut</button>
      </div>}
  </div>

  )
}

export default Header