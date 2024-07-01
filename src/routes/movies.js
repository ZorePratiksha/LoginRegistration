// routes/movies.js
const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/', async (req, res) => {
    const movies = await Movie.find();
    res.send(movies);
});

router.post('/book', async (req, res) => {
    const { movieId, showtime, seats } = req.body;
    const movie = await Movie.findById(movieId);
    // Check seat availability and book seats logic here
    res.send('Booking confirmed');
});

module.exports = router;
