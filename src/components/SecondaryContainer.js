import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies);
  return (
    <div className='bg-black '>
      <div className='-mt-52 relative z-20  '>
      <MovieList title={'NowPlayinMovies'} movies={movies?.nowPlayingMovies}/>
      </div>
      <MovieList title={'Popular'} movies={movies?.popularMovies}/>
      <MovieList title={'TopRatedMovies'} movies={movies?.topRatedMovies}/>
      <MovieList title={'UpComingMovies'} movies={movies?.upComingMovies}/>
    </div>
  )
}

export default SecondaryContainer