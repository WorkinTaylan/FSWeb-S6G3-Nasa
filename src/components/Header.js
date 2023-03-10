import React from 'react';
import styled from 'styled-components';
import img from '../components/stars.jpg'

export default function Header(){

const ScHeader=styled.header`
    display:flex;
    background-image:url(${img});
    justify-content:space-between;
    width:100%;
    height:30vh;
`

const Title = styled.h1`
font-size: 1em;
text-align: center;
color: #F6F5F5;
margin:2%;
text-decoration: none;
`;

const ScAnchor=styled.a`
    text-decoration: none;
`

const ScImg=styled.img`
    margin-left:1%;
`
    return (
        <ScHeader>
            <ScImg src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"/>
            <a href="https://www.nasa.gov/">
            <Title>DAILY NASA </Title>
            </a>
        </ScHeader>
        
    )
}