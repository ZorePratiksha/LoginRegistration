// src/services/movieService.js
import axios from 'axios';

export const fetchMovies = async () => {
    const response = await axios.get('/api/movies');
    return response.data;
};

export const bookSeats = async (bookingData) => {
    const response = await axios.post('/api/movies/book', bookingData);
    return response.data;
};

