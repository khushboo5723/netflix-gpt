import React, {useEffect} from 'react';
import { NETFLIX_LOGO_URL, NETFLIX_PROFILE_LOGO } from '../utils/constant';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);
  const dispatch = useDispatch();

  const handleSignOut =() =>{
    signOut(auth).then(() => {}).catch((error) => {
      navigate('/error');
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, displayName, email} = user;
        dispatch(addUser({uid:uid, displayName: displayName, email:email}))
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });
    // unsubscribe to the onauth callback when the component unmounts
    return ()=> unsubscribe();
  },[])
  return (

  <div className='absolute bg-gradient-to-b from-black p-4 z-10 w-screen flex justify-between'>
        <img src={NETFLIX_LOGO_URL}
        alt='Netflix-logo'
        className='w-40'
        />
{   user &&     <div className='p-2 m-2 flex'>
      <img  src = {NETFLIX_PROFILE_LOGO} alt= "netflix-profile-logo"/>
      <button onClick={handleSignOut}>SignOut</button>
      </div>}
  </div>

  )
}

export default Header