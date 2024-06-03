import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.get('/api/auth/user', {
                baseURL: import.meta.env.VITE_APP_API_URL,
                withCredentials: true,
                headers: {
                    'Content-type': 'application/json',
                    Accept: 'application/json'
                }
            }).then(response => {
                setUser(response.data);
            }).catch(error => {
                console.error('User not authenticated', error);
            });
        }
    }, []);

    const signIn = async (email, password) => {
        const response = await axios.post('/api/user/signin', { email, password }, {
            baseURL:  import.meta.env.VITE_APP_API_URL
        });
        setUser(response.data);
        localStorage.setItem('token', response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    };

    const signUp = async (name, email, password) => {
        const response = await axios.post('/api/user/signup', { name, email, password }, {
            baseURL: import.meta.env.VITE_APP_API_URL,
            withCredentials: true,
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json'
            }
        });
        setUser(response.data);
        localStorage.setItem('token', response.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    };

    const signOut = () => {
        setUser(null);
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
