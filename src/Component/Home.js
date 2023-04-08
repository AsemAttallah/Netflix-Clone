import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';

export default function Home(){

    const[movies,setMovies]=useState([])

    async function getMovies(){
        const url=process.env.REACT_APP_MY_URL;
        console.log(url);
        const response = await fetch(`${url}/trending`);
        console.log(response);
        const jsonData = await response.json();
        console.log(jsonData);
        setMovies(jsonData);
        console.log(movies);

    }

    useEffect(() => {
        getMovies();
      },[]);


    return(
        <>
        <h1>This home page</h1>
        <MovieList movies={movies}/>
        </>

    ) 
}