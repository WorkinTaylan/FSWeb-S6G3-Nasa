import React from "react";
import styled from 'styled-components';


export default function Navbar(){

    const ScButton=styled.button`
    color: #FEFCF3;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #404258;
    border-radius: 3px;
    background-color: #404258;
    `


    return (
        <div>
            <nav>

            <a href="https://www.nasa.gov/about/index.html">
                <ScButton>About NASA</ScButton>
                </a>

                <a href="https://www.nasa.gov/astronauts">
                <ScButton>Astronouts</ScButton>
                </a>

                <a href="https://earthobservatory.nasa.gov/">
                <ScButton>Earth Observatory</ScButton>
                </a>
            
                <a href="https://www.figma.com/login">
                    <ScButton>Edit Me!</ScButton>
                </a>
            </nav>
        </div>
    )
}