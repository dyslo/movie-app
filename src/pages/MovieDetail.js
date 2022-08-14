import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASEURL, API_KEY, IMG_BASEURL } from '../config';
import axios from 'axios';
import styled from 'styled-components';

// import MovieTitle from '../components/MovieDetail/MovieTitle';

const Detail = () => {
    const params = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${API_BASEURL}${params.movieId}?api_key=${API_KEY}&language=ko-KR`);
            setMovie(data);
            setLoading(false);
            //console.log(data);
        })();
    }, [params.movieId]);
    //console.log(Object.entries(movie));
    if (loading) { return <div>loading..</div> }
    return (
        <Wrapper>
            <Header>
                <DataWrapper>
                    {(movie.adult === true) ? <NSFW>성인 영화</NSFW> : <></>}
                    <MovieTitle>{movie.title}</MovieTitle>
                    {(movie.title !== movie.original_title) ? <MovieOriginalTitle>{movie.original_title}</MovieOriginalTitle> : <></>}
                    <Divider />
                    <MetaData>
                    
                    <p>평점: {movie.vote_average} (투표 수: {movie.vote_count})</p>
                    <p>상영시간: {movie.runtime}분</p>
                    </MetaData>
                </DataWrapper>
                <Poster src={`${IMG_BASEURL}${movie.poster_path}`}></Poster>
            </Header>
            <MovieOverView>{movie.overview}</MovieOverView>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    margin: 50px auto;
    flex-direction: column;
    justify-content: center;
    width: 700px;
    min-height: 500px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 700px;
    height: auto;
`;

const NSFW = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: #ff0000;
`;

const DataWrapper = styled.div`
    min-width: 480px;
    height: auto;
`;

const MovieTitle = styled.div`
    min-width: 300px;
    font-size: 36px;
    text-align: left;
    font-weight: 700;
`;

const MovieOriginalTitle = styled.div`
    min-width: 300px;
    font-size: 24px;
    text-align: left;
    font-weight: 500;
`;

const Divider = styled.hr`
    margin: 15px 0;
    border: .01rem solid #000;
`;

const MetaData = styled.div`
    width: auto;
    height: auto;
`;

const Poster = styled.img`
    width: 150px;
    height: 225px;
`;

const MovieOverView = styled.div`
    width: 700px;
    height: auto;
    padding-top: 20px;
    font-size: 16px;
    line-height: 24px;
`;

export default Detail;