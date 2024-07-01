// src/components/Movies.js
import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../services/movieService';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMovies = async () => {
            const movies = await fetchMovies();
            setMovies(movies);
        };
        loadMovies();
    }, []);

    return (
        <div>
            {movies.map(movie => (
                <div key={movie._id}>
                    <h2>{movie.title}</h2>
                    <p>{movie.genre}</p>
                    <ul>
                        {movie.showtimes.map(showtime => (
                            <li key={showtime}>{showtime}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Movies;
