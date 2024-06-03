import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getMovies } from '../../http';

const Home = () => {
  const [jokes, setJokes] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/movies')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!movieTitle.trim()) {
      setError('Please enter a search term');
      return;
    }
    setLoading(true);
    setError(null);

    try {
      // const response = await axios.get(`/api/movies?title=${movieTitle}`);
      const response = await getMovies(movieTitle);
      // const response = await axios.get(`/api/jokes`);
      setResults(response.data);

      console.log("results", results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSearch} className="flex items-center mb-4">
        <input
          type="text"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          placeholder="Search Movies..."
          className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <button
          onSubmit={handleSearch}
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {error && <div className="text-red-600">{error}</div>}
      <div className='max-w-md mx-auto mt-10'>
        {results ? (
         <div className="relative flex flex-row w-100 h-48 overflow-hidden shadow-lg rounded-lg bg-gray-900">
         <div className="w-1/2 h-full">
           <img
             src={results.Poster}
             alt={results.Title}
             className="w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-50"
           />
         </div>
         <div className="flex flex-col justify-center p-4 bg-black bg-opacity-50 w-1/2 transition-opacity duration-300 opacity-100 hover:opacity-100">
           <h3 className="text-2xl font-semibold text-white mb-2">{results.Title}</h3>
           <p className="text-lg text-gray-400">{results.Genre}</p>
         </div>
       </div>
       
       
       
        ) : (
          !loading && <div>No results found</div>
        )}
      </div>
    </div>
  );
};

export default Home;
