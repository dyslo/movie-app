import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieItem = (props) => {
    const { id, title, poster_path } = props;
    return (
        <Movie>
            <Link to={`detail/${id}`}><Poster alt={title} src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}></Poster></Link>
        </Movie>
    );
};

const Movie = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 200px;
`;

const Poster = styled.img`
    width: 110px;
    height: 165px;
`;

export default MovieItem;