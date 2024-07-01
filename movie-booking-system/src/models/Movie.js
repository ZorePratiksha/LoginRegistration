// models/Movie.js
const mongoose = require('mongoose');
const MovieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    showtimes: [String],
    seats: [[Boolean]], // 2D array for seat availability
});
module.exports = mongoose.model('Movie', MovieSchema);

