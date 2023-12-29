import React, { useEffect, useState } from 'react'
import './movie.css'
import { useParams } from 'react-router-dom'


export default function Movie() {

    const [currentMovieDetail, setCurrentMovieDetail] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
    }, [])

    const getData = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=05fc1aa79d3ce4aac049790fca464bad&language=en-US`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCurrentMovieDetail(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className="movie movie__intro">

            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">"{currentMovieDetail ? currentMovieDetail.tagline : ""}"</div>

                        <div className="movie__runtime">Duration: {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                    </div>

                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                        <div>
                            {
                                currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{ color: "black" }}><p><span>IMDb Link <i className="newTab fas fa-external-link-lt"></i></span></p></a>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

