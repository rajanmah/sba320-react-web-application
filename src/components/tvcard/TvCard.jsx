import React from 'react'
import './tvcard.css'
import { Link } from 'react-router-dom'

export default function TvCard ({tv}) {

    return <>
   
        <Link to={`/tv/${tv.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${tv?tv.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{tv?tv.original_name:""}</div>
                  <div className="card__description">{tv ? tv.overview.slice(0,120)+"..." : ""}</div> 
                    {/* showing 120 chars */}
                </div>
            </div>
        </Link>
    {/* } */}
    </>
}

