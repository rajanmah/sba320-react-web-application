import React, { useState } from 'react';
import Card from '../card/Card'
import './movieSearch.css'

export default function MovieSearch  () {
  const [searchItem, setSearchItem] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=05fc1aa79d3ce4aac049790fca464bad&query=${searchItem}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovies();
  };

  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <input className="search__input" placeholder="Search..." type="text" value={searchItem} onChange={handleChange} />
      </form>

      {
        movies.map(movie => (
          <Card movie={movie} />
        ))
      }
    </div>
  );
};

