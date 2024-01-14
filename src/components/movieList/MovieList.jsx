import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import { useParams } from 'react-router-dom'
import './movielist.css'


export default function MovieList() {

    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=05fc1aa79d3ce4aac049790fca464bad&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "TOP RATED").toUpperCase()}</h2>
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

