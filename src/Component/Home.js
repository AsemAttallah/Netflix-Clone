import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';

export default function Home() {

    const [movies, setMovies] = useState([])

    async function getMovies() {
        const url = process.env.REACT_APP_MY_URL;
        const response = await fetch(`${url}/trending`);
        const jsonData = await response.json();
        setMovies(jsonData);

    }

    function commentHandler(newMovies,id){
        movies.map(movie=>{
            if(movie.id===id){
                movie.comment=newMovies.userComment
                return movie;
            }else{
                return movie;
            }
        })
    }

    useEffect(() => {
        getMovies();
    }, []);


    return (
        <>
            <h1>This home page</h1>
            <br/>
            <br/>
            <MovieList movies={movies} commentHandler={commentHandler}/>
        </>

    )
}