import { useEffect } from "react";
import { OPTIONS_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

    const nowPlayingMovies = async() =>{
      const data = await fetch(url, OPTIONS_API);
      const json = await data.json();
      dispatch(addMovies(json.results));
      console.log(json.results);
    }
  
    useEffect(()=>{
      nowPlayingMovies();
  
    },[]);
}

export default useNowPlayingMovies;