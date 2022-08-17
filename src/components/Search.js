import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Search = () => {
    const [isExpanded, setisExpanded] = useState(false);

    const handleExpanded = (e) => {
        setisExpanded(!isExpanded);
    }

    return (
        <>
            <SearchButton active={isExpanded} onClick={handleExpanded}>
                <SearchInput placeholder="키워드를 입력해 주세요." active={isExpanded} onClick={(e)=>e.stopPropagation()}/>
                <SearchEmoji />
            </SearchButton>
            <Outlet />
        </>
    );
};

const SearchButton = styled.div`
    position: fixed;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.2);
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    text-align: center;
    ${(props) => props.active && `
        width: 300px;
    `}
`;

const SearchEmoji = styled.button`
    width: 50px;
    height: 50px;
    right: 0;
    border: 0;
    outline: none;
    background-color: transparent;
    font-size: 20px;
    position: absolute;
    cursor: pointer;
    &:after {
        content: '🔎';
    }
`;

const SearchInput = styled.input`
    outline: none;
    border: none;
    background-color: transparent;
    width: 230px;
    height: 50px;
    float: left;
    padding-left: 15px;
    font-size: 16px;
    transition: 0.3s all ease-in-out;
    ${(props) => !props.active &&`
        width: 0;
    `}
`;

export default Search;