import React, { useEffect, useState } from 'react'
import './card.css'
import { Link } from 'react-router-dom'

export default function Card ({movie}) {

    return <>
   
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,120)+"..." : ""}</div> 
                    {/* showing 120 chars */}
                </div>
            </div>
        </Link>
    {/* } */}
    </>
}

