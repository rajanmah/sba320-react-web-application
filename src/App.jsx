import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from  './pages/home/Home'
import MovieList from './components/movieList/MovieList'
import Movie from './pages/movieDetail/Movie'
import Trending from './pages/trending/Trending'
import Tv from './pages/tv/Tv'



export default function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/trending/all/day' element={<Trending />}> </Route>
          <Route path='/movie/:id' element={<Movie />}> </Route>
          <Route path='/movies/:type' element={<MovieList />}> </Route> 
          <Route path='/discover/tv' element={<Tv />}> </Route> 

          <Route path='/*' element={<h1>error page</h1>}> </Route>
        </Routes>
      </Router>
<hr />
      <footer className="footer">
 
         © 2023 </footer>
         <hr/>
    </div>
  )
}

