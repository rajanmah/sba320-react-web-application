import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from  './pages/home/Home'
import MovieList from './components/movieList/MovieList'
import Movie from './pages/movieDetail/Movie'



function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/movie/:id' element={<Movie />}> </Route>
          <Route path='/movies/:type' element={<MovieList />}> </Route>
          <Route path='/*' element={<h1>error page</h1>}> </Route>
        </Routes>
      </Router>

      {/* <h1>Hello WOrld</h1> */}
      <footer className="footer">
 
         © 2023 </footer>
    </div>
  )
}

export default App
