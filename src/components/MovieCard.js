import React from 'react'
import { CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-8'>
        <img
        src = {CDN_URL + posterPath}
        />
        
    </div>
  )
}

export default MovieCard