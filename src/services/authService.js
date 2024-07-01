// src/services/authService.js
import axios from 'axios';

export const register = async (userData) => {
    const response = await axios.post('/api/auth/register', userData);
    return response.data;
};

export const login = async (credentials) => {
    const response = await axios.post('/api/auth/login', credentials);
    return response.data;
};

