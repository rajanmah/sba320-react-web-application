import React, { useEffect, useState } from 'react'
import TvCard from '../../components/tvcard/TvCard'
import './tv.css'


export default function Tv() {

  const [tvList, setTvList] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=05fc1aa79d3ce4aac049790fca464bad&language=en-US`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTvList(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData()
  }, []);

  return (
    <div className="movie__list">
      <h2 className="list__title">{"TELEVISION SERIES"}</h2>
      <div key="movie.id" className="list__cards">
        {
          tvList.map(tv => (
            <TvCard tv={tv} />
          ))
        }
      </div>
    </div>
  )
}
