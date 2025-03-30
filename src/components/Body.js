import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

function Body() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login/>
    },
    {
      path: '/browse',
      element: <Browse/>
    },

  ])
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, displayName, email} = user;
        dispatch(addUser({uid:uid, displayName: displayName, email:email}))
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  },[])
  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body