import { useEffect } from "react";
import { OPTIONS_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () =>{
    const dispatch = useDispatch();
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

    const popularMovies = async() =>{
      const data = await fetch(url, OPTIONS_API);
      const json = await data.json();
      console.log(json);
      dispatch(addPopularMovies(json.results));
      console.log(json.results);
    }
  
    useEffect(()=>{
      popularMovies();
  
    },[]);
}

export default usePopularMovies;
