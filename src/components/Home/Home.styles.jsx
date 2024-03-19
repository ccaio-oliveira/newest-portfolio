import styled, { keyframes } from 'styled-components';

const typing = keyframes`
    from {
        width: 0;
    }
    to {
        width: 220px;
    }
`;

const blink = keyframes`
    50% {
        border-color: transparent;
    }
`;

export const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProfileImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 10px;
`;

export const Title = styled.h1`
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    animation: 
        ${typing} 3s steps(40),
        ${blink} .75s step-end infinite;
`;