import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//6f2999d8

const API_URL = 'http://www.omdbapi.com?apikey=6f2999d8';

// const movie1 = {
//     "Title": "Amazing spiderman",
//     "Year": "2021",
//     "imdbID": "tt2586634",
//     "Poster": "N/A"
// }


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('movie');
    }, []);

    return (
        <div className="app">
        <h1>Ur Movies</h1>

        <div className="search">
            <input 
                placeholder="search for movies"
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value) }
             />
             <img 
             src={SearchIcon}
             alt="search"
             onClick={() => searchMovies(searchTerm)}
             />
        </div>

        {
            movies?.length > 0
            ? (
            <div className="container">
                 {movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
            </div>
            ) : (
                <div className='empty'>
                    <h2>No movies found</h2>
                    </div>
            )
        }          
        </div>

     );
    }

    export default App;