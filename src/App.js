import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/navBar";
import Search  from "./components/search";
import styled from 'styled-components';

const ScTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const ScParag=styled.p`
font-family: 'Changa', sans-serif;
font-size: 1em;
text-align: justify;
color: #364958;
text-shadow: 1px 1px;
margin:5%;

`

function App() {
  const [gorsel, setGorsel]= useState(null);
  const [date , setDate]=useState("2023-03-10");
  
  const changeHandler=(e)=>{
    setDate(e);
  }


  useEffect(()=> {
    const fetchGorsel=()=>{
    axios
    .get('https://api.nasa.gov/planetary/apod?date='+date+'&api_key=DEMO_KEY')
    // Which we then set to state
    .then(res => {setGorsel(res.data)})
    
    // Always include error handling
    .catch(err => console.log(err));
    }

    fetchGorsel();
  }, [date]);

  if(!gorsel) return <h3>Get ready to be surprised!!</h3>

  return (
    <div className="App">
      
      <Header />
      
      <Search changeHandler={changeHandler} date={date}/>

      <div className="App-alt">
        <ScTitle>{gorsel.title}</ScTitle>
        <p></p>
        <ScParag class="explanation-txt">{gorsel.explanation}</ScParag>
		    <p>Have Fun!<span role="img" aria-label='go!'>🚀</span>! </p>
      </div>
    <div id="Ta">
      {gorsel.media_type==="image"? (
      <img src={gorsel.url} alt={gorsel.title}/>):(
        <iframe
        title="space-video"
        src={gorsel.url}
        frameBorder="0"
        gesture="media"
        allowFullScreen="true"
        className="photo"
        />
        )
      }
        <div>
        <Navbar />
        </div>
      </div>
    
    </div>
    
    
  );
  
}

export default App;
