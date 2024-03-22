import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
    background-color: #282c34;
    padding: 10px;
    color: white;

    display: flex;
    justify-content: center;
`;

export const NavComponent = styled.nav`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavTitle = styled.h1`
    
`;

export const NavTitleLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

export const NavTitleSpan = styled.span`
    color: #61dafb;
    border-bottom: 3px solid #61dafb;
`;

export const NavLinks = styled.div`
    
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    margin-left: 20px;

    position: relative;

    &::before {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 1px;
        background-color: #61dafb;
        transition: width 0.2s ease-in-out;
    }

    &:hover::before {
        width: 100%;
        color: #61dafb;
        border-bottom: 1px solid #61dafb;
    }

    &:hover {
        color: #61dafb;
    }
`;

export const LanguageButton = styled.button`
    background-color: transparent;
    color: white;
    border: 1px solid white;
    padding: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: white;
        color: #282c34;
    }
`;