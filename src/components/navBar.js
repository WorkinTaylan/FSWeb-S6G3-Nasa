import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import App from "../App"


export default function Navbar(){

    

    return (
        <div>
            <nav>

            <a href="https://www.nasa.gov/about/index.html">
                <button>About NASA</button>
                </a>

                <a href="https://www.nasa.gov/astronauts">
                <button>Astronouts</button>
                </a>

                <a href="https://earthobservatory.nasa.gov/">
                <button>Earth Observatory</button>
                </a>
            
                <a href="https://www.figma.com/login">
                    <button>Edit Me!</button>
                </a>
            </nav>
        </div>
    )
}