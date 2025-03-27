import React from 'react';
import { NETFLIX_LOGO_URL } from '../utils/constant';

function Header() {
  return (

  <div className='absolute bg-gradient-to-b from-black p-4 z-10'>
        <img src={NETFLIX_LOGO_URL}
        alt='Netflix-logo'
        className='w-40'
        />
  </div>

  )
}

export default Header