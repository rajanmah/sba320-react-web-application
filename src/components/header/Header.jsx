import React from 'react'
import './header.css'
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="header">
       <Link to='/'> <img className="header__icon" src="https://www.ethic-ads.com/wp-content/uploads/play-button-png-filename-play-button-png-237.png" /> </Link>
       <Link to='/movies/popular'style={{textDecoration:"none"}}> <span>Popular</span> </Link>
       <Link to='/movies/top_rated'style={{textDecoration:"none"}}><span>Top Rated</span> </Link>
       <Link to='/movies/upcoming'style={{textDecoration:"none"}}><span>Upcoming</span> </Link>
    </div>
  )
}
