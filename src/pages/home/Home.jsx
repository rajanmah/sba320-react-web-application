import React, { useEffect, useState } from 'react'
import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom"
import MovieSearch from '../../components/search/MovieSearch';


export default function Home() {
    const [latestMovies, setLatestMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=05fc1aa79d3ce4aac049790fca464bad&language=en-US');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setLatestMovies(data.results);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);






    return (
        <>
            <div className="poster">
            <MovieSearch />
           
            <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        latestMovies.map(movie => (
                            <Link key={movie.id} style={{textDecoration:"none", color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        {/* <span className="posterImage__rating">
                                            {movie ? movie.vote_average: ""}
                                            <i className="fas fa-star" />{" "}                                        </span> */}
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
               
            </div>
        </>


    )

}

