import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : 'movies',
    initialState: {
        nowPlayingMovies : null,
        trailer : null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
    },
    reducers: {
        addMovies : (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailer : (state, action) =>{
            state.trailer = action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },
        topRatedMovies: (state, action)=>{
            state.topRatedMovies = action.payload;
        },
        upComingMovies :(state, action)=>{
            state.upComingMovies = action.payload;
        }
    }

});

export const { addMovies, addTrailer, addPopularMovies,topRatedMovies, upComingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;