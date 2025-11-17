// services/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.softzenit.shop/shopzen', // Replace with your API base URL
    timeout: 5000, // Optional: Set a request timeout
    headers: {
        'Content-Type': 'application/json',
        // Add any other default headers here
    },
});

// Optional: Add request or response interceptors for global error handling, authentication, etc.
axiosInstance.interceptors.request.use(
    (config) => {
        // Modify request config, e.g., add authorization token
        // config.headers.Authorization = `Bearer ${yourAuthToken}`;
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle global errors, e.g., redirect on 401
        // if (error.response.status === 401) { /* handle unauthorized */ }
        return Promise.reject(error);
    }
);

export default axiosInstance;