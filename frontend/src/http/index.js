import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
    }
});


export const getMovies = (title) => {
    let apiUrl = `/api/movies?`;

    if (title) {
        apiUrl += `&title=${encodeURIComponent(title)}`;
    }

    return api.get(apiUrl);
}

export const registerUser = (data) => api.post('/api/user/signup', data);



export default api;