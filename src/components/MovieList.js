import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='p-6'>
        <h1 className='text-3xl py-6 text-white'>{title}</h1>
        <div className='overflow-x-scroll flex'>
        <div className='flex '>
            {movies?.map(movie =><MovieCard key={movie.id} posterPath={movie.poster_path}/> )}
        </div>
        </div>
    </div>
  )
}

export default MovieList