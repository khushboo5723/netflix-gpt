import { useEffect } from "react";
import { OPTIONS_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) =>{
    const url = "https://api.themoviedb.org/3/movie/" + movieId+ "/videos?language=en-US";
    const dispatch = useDispatch();

    const movieVideos = async()=>{
        const data = await fetch(url, OPTIONS_API);
        const json = await data.json();
        const trailers = json?.results?.filter((movie)=>movie.type === 'Trailer');
        const trailer = trailers?.length ? trailers[0] : json.results?.[0];
        dispatch(addTrailer(trailer));

        console.log(trailer);
    }

    useEffect(()=>{
        movieVideos();

    },[])
    

}
export default useMovieTrailer;