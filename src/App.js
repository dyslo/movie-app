import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
//import axios from 'axios';
import PopularMovies from './pages/PopularMovies';
import MovieDetail from './pages/MovieDetail';
// import MovieList from './components/MovieList';

const App = () => {
  
  // const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //       (async () => {
  //       const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4a18ca6ed79dbc9e07ca2082e3a48a14');
  //       setMovies(data.results);
  //       setLoading(false);
  //       })();
  //   }, []);
  //   return (
  //       <div>
  //           <h1>잉기있는 영화를 추천해드립니다</h1>
  //             <ul>
  //               {movies.map((movie) => {
  //                 return <li key={movie.id}>{movie.title}</li>
  //               })}
  //             </ul>
  //       </div>
  //   );
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PopularMovies/>}></Route>
        <Route path='/detail/:movieId' element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;