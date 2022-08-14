import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import MovieItem from './MovieItem';
import { API_KEY, API_BASEURL } from '../../config';
import styled from 'styled-components';

const MovieList = (props) => {
    const { page } = props;
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${API_BASEURL}popular?api_key=${API_KEY}&language=ko-KR&page=${page}`);
            setMovies(data.results);
            setLoading(false);
        })();
    }, []);
    if (loading) { return <div>loading...</div> }
    return (
        <Wrapper>
            {movies.map((movie) => {
                return <MovieItem key={movie.id} id={movie.id} title={movie.title} vote_average={movie.vote_average} poster_path={movie.poster_path} />
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    width: 700px;
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

export default MovieList;