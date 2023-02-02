import React, {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/navBar";
import Search  from "./components/search";
import { BrowserRouter, Route } from "react-router-dom";


function App() {
  const [gorsel, setGorsel]= useState(null);
  const [date , setDate]=useState("2023-02-02");
  
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

  if(!gorsel) return <h3>Yükleniyor...</h3>

  return (
    <div className="App">
      
      <Header />
      
      <Search changeHandler={changeHandler} date={date}/>

      <div className="App-alt">
      <h1>{gorsel.title}</h1>
      <p>{gorsel.date}</p>
      <p>{gorsel.explanation}</p>
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
