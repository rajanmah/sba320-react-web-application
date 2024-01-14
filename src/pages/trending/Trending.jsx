import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import './trending.css'


export default function Trending() {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=05fc1aa79d3ce4aac049790fca464bad&language=en-US`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovieList(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData()
  }, []);

  return (
    <div className="movie__list">
      <h2 className="list__title">{"TRENDING"}</h2>
      <div key="movie.id" className="list__cards">
        {
          movieList.map(movie => (
            <Card movie={movie} />
          ))
        }
      </div>
    </div>
  )
}
