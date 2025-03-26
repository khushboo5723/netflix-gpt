import React from 'react'
import { NETFLIX_LOGIN_IMAGE_URL, NETFLIX_LOGO_URL } from '../utils/constant'

function Header() {
  return (
    <div >
        <img src={NETFLIX_LOGO_URL}
        className='w-'
        />
        <div className='absolute'>
            <img src={NETFLIX_LOGIN_IMAGE_URL}/>
        </div>
    </div>
  )
}

export default Header