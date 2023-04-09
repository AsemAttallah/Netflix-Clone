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

    useEffect(() => {
        getMovies();
    }, []);


    return (
        <>
            <h1>This home page</h1>
            <MovieList movies={movies} />
        </>

    )
}