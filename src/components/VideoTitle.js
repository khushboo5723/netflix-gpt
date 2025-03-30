import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='pt-[20%] px-12 absolute w-screen text-white bg-gradient-to-r from-black aspect-video'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-white text-black px-12 p-4 text-xl hover:bg-opacity-80 rounded-lg'>▶️Play</button>
        <button className='bg-gray-500 text-black px-12 p-4 mx-2 text-xl bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle