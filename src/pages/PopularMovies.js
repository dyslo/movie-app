import React from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import MovieList from '../components/MovieList/MovieList';
import styled from 'styled-components';

const PopularMovies = () => {
    // const loc = useLocation();
    // const [searchParams, setSearchParams] = useSearchParams();
    //console.log(searchParams.get("pages"));
    return (
        <>
            <MainTitle><Link to="/">최근에 잉기있는 영화를 추천해드립니당</Link></MainTitle>
            <MovieList />
        </>
    );
};

const MainTitle = styled.h1`
    text-align: center;
    font-size: 25px;
`;

export default PopularMovies;