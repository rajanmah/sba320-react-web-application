import React, { useState } from 'react';
import axios from 'axios';
import Card from '../card/Card'
import './search.css'

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=05fc1aa79d3ce4aac049790fca464bad&query=${query}`
      );

      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="search__input" placeholder="Search..." type="text" value={query} onChange={handleChange} />
        {/* <button type="submit">Search</button> */}
      </form>

      {
                    movies.map(movie => (
                        // <li><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/></li>
                        <Card movie={movie} />
                    ))
                }
    </div>
  );
};

export default MovieSearch;