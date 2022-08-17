import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
//import axios from 'axios';
import PopularMovies from './pages/PopularMovies';
import MovieDetail from './pages/MovieDetail';
import Search from './components/Search';
// import MovieList from './components/MovieList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />}>
          <Route path='/' element={<PopularMovies/>}></Route>
          <Route path='/detail/:movieId' element={<MovieDetail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;